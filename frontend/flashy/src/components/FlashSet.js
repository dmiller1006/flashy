import React from 'react'
import FlashCard from '../components/FlashCard'

const FlashSet = ({ flashData }) => {
    const cards = flashData['cards']
    
    const renderCards = () => {
        return cards.map((card, idx) => {
            return <FlashCard key={idx} card={card}/>
        })
    }
  return (
    <div>
        FlashSet
        {renderCards()}
    </div>

  )
}

export default FlashSet