import React from 'react'
import FlashCard from '../components/FlashCard'
import '../pages/FlashcardLayout.css'

const FlashSet = ({ flashData }) => {
    const cards = flashData['cards']
    
    const renderCards = () => {
        return cards.map((card, idx) => {
            return <FlashCard key={idx} card={card} className="card"/>
        })
    }
  return (
    <div>
      <div className="parent">
        {renderCards()}
      </div>
    </div>

  )
}

export default FlashSet