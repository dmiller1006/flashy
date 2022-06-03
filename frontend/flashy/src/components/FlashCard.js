import React, { useState } from 'react'
import '../pages/FlashcardLayout.css'
import '../components/FlashCard.css'

export default function FlashCard({ card }) {
    const [flip, setFlip] = useState(false)

    return (
        <div
            className={` card ${flip ? 'flip flashcard-bottom' : 'flashcard-top'}`}
            onClick={() => setFlip(!flip)}
        >
            <div className="front">
                <h3>{flip ? '' : card.front_text}</h3>
            </div>
            <div className="back"><h3>{flip ? card.back_text : ''}</h3></div>
        </div>
    )
}