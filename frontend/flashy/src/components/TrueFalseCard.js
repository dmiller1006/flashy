import React from 'react'
import { useState } from 'react'
import TriviaCardFront from './TriviaCardFront'
import TriviaCardBack from './TriviaCardBack'
import FlashyAPI from '../api/FlashyAPI'

const TrueFalseCard = ({ question, answer }) => {
    const [flip, setFlip] = useState(false)
    let he = require('he')
    he.decode(question)

    return (
        <div
            className={` card ${flip ? 'flip card-bottom' : 'card-top'} triviaCard`}
            onClick={() => setFlip(!flip)}
        >
            <div className="front">
                <h3>{flip ? '' : FlashyAPI.decodeHTMLEntities(question)}</h3>
            </div>
            <div className="back">
                <h3>{flip ? FlashyAPI.decodeHTMLEntities(question) : ''}</h3>
                <h3>{flip ? 'Answer: ' + answer : ''}</h3>
            </div>
        </div>
    )
}

export default TrueFalseCard