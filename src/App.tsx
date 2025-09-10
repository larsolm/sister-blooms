import { useState, useEffect } from 'react'
import { Flower } from './types'
import FlowerGrid from './components/FlowerGrid'
import FlowerModal from './components/FlowerModal'
import { withBase } from './utils'

export default function App() {
  const [flowers, setFlowers] = useState<Flower[]>([])
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadFlowers = async () => {
      try {
        setLoading(true)
        const response = await fetch(withBase('content/flowers.json'))
        if (!response.ok) {
          throw new Error('Failed to load flowers')
        }
        const data = await response.json()
        setFlowers(data.flowers || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load flowers')
        setFlowers([])
      } finally {
        setLoading(false)
      }
    }

    loadFlowers()
  }, [])

  const filteredFlowers = flowers.filter(flower => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return true
    
    return (
      flower.name.toLowerCase().includes(query) ||
      flower.description?.toLowerCase().includes(query) ||
      flower.colors?.some(color => color.toLowerCase().includes(query))
    )
  })

  return (
    <div className="app">
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">Sister Blooms</h1>
          <p className="header__subtitle">Beautiful dahlias grown with love</p>
          
          <div className="header__search">
            <input
              type="text"
              placeholder="Search flowers by name, description, or color..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search flowers"
            />
          </div>
          
          <div className="scroll-indicator">
            <div className="scroll-arrow">↓</div>
            <span>Explore Our Collection</span>
          </div>
        </div>
      </header>

      <main className="main">
        {loading && (
          <div className="loading">Loading flowers...</div>
        )}
        
        {error && (
          <div className="error">
            <p>Error: {error}</p>
            <button onClick={() => window.location.reload()}>
              Try Again
            </button>
          </div>
        )}
        
        {!loading && !error && (
          <>
            <div className="main__header">
              <h2>Our Dahlia Collection</h2>
              <p>{filteredFlowers.length} flower{filteredFlowers.length !== 1 ? 's' : ''} available</p>
            </div>
            
            <FlowerGrid 
              flowers={filteredFlowers}
              onFlowerSelect={setSelectedFlower}
            />
          </>
        )}
      </main>

      <footer className="footer">
        <div className="footer__container">
          <p>&copy; 2025 Sister Blooms. All rights reserved.</p>
          <p>
            <a href="mailto:hello@sisterblooms.com">Contact Us</a>
            {' | '}
            <a href={withBase('admin/')}>Admin</a>
          </p>
        </div>
      </footer>

      {selectedFlower && (
        <FlowerModal
          flower={selectedFlower}
          onClose={() => setSelectedFlower(null)}
        />
      )}
    </div>
  )
}
