import React from 'react'
import { useState } from 'react'
import TriviaCardFront from './TriviaCardFront'
import TriviaCardBack from './TriviaCardBack'

const TriviaCard = ({question}) => {
    const [flip, setFlip] = useState(false)

    return (
        <div
            className={` card ${flip ? 'flip card-bottom' : 'card-top'} triviaCard`}
            onClick={() => setFlip(!flip)}
        >
            <div className="front">
                <h3>{flip ? '' : <TriviaCardFront question={question}/>}</h3>
            </div>
            <div className="back"><h3>{flip ? <TriviaCardBack question={question}/> : ''}</h3></div>
        </div>
    )
}

export default TriviaCard