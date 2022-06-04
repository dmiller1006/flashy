import React from 'react'

const TriviaCardBack = ({question}) => {
  return (
    <div>{question.correctAnswer}</div>
  )
}

export default TriviaCardBack