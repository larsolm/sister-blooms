import { useState, useEffect, useMemo } from 'react'
import { Flower } from '../types'
import FlowerCard from './FlowerCard'
import { withBase } from '../utils'

interface FlowerGridProps {
  flowers: Flower[]
  onFlowerSelect: (flower: Flower) => void
}

export default function FlowerGrid({ flowers, onFlowerSelect }: FlowerGridProps) {
  return (
    <section className="flower-grid">
      <div className="flower-grid__container">
        {flowers.length === 0 ? (
          <p className="flower-grid__empty">No flowers found.</p>
        ) : (
          flowers.map((flower) => (
            <FlowerCard
              key={flower.id}
              flower={flower}
              onClick={() => onFlowerSelect(flower)}
            />
          ))
        )}
      </div>
    </section>
  )
}
