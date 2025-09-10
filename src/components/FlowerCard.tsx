import { Flower } from '../types'
import { withBase } from '../utils'

interface FlowerCardProps {
  flower: Flower
  onClick: () => void
}

export default function FlowerCard({ flower, onClick }: FlowerCardProps) {
  const formatPrice = (price?: number) => {
    if (!price) return null
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <button 
      className="flower-card" 
      onClick={onClick}
      aria-label={`View details for ${flower.name}`}
    >
      <div className="flower-card__image">
        <img 
          src={flower.image.startsWith('http') ? flower.image : withBase(flower.image)} 
          alt={flower.name}
          loading="lazy"
        />
      </div>
      <div className="flower-card__content">
        <h3 className="flower-card__name">{flower.name}</h3>
        {flower.price && (
          <p className="flower-card__price">{formatPrice(flower.price)}</p>
        )}
        {flower.colors && flower.colors.length > 0 && (
          <p className="flower-card__colors">{flower.colors.join(', ')}</p>
        )}
      </div>
    </button>
  )
}
