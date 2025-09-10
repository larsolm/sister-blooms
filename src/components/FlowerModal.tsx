import { Flower } from '../types'
import { withBase } from '../utils'

interface FlowerModalProps {
  flower: Flower
  onClose: () => void
}

export default function FlowerModal({ flower, onClose }: FlowerModalProps) {
  const formatPrice = (price?: number) => {
    if (!price) return null
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        
        <div className="modal__content">
          <div className="modal__image">
            <img src={withBase(flower.image)} alt={flower.name} />
          </div>
          
          <div className="modal__details">
            <h2 className="modal__title">{flower.name}</h2>
            
            {flower.price && (
              <p className="modal__price">{formatPrice(flower.price)}</p>
            )}
            
            {flower.description && (
              <p className="modal__description">{flower.description}</p>
            )}
            
            <dl className="modal__info">
              {flower.colors && flower.colors.length > 0 && (
                <>
                  <dt>Colors:</dt>
                  <dd>{flower.colors.join(', ')}</dd>
                </>
              )}
              
              {flower.bloom_size && (
                <>
                  <dt>Bloom Size:</dt>
                  <dd>{flower.bloom_size}</dd>
                </>
              )}
              
              {flower.height && (
                <>
                  <dt>Plant Height:</dt>
                  <dd>{flower.height}</dd>
                </>
              )}
              
              {flower.availability && (
                <>
                  <dt>Availability:</dt>
                  <dd>{flower.availability}</dd>
                </>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
