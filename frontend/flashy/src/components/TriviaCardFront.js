import React from 'react'


const TriviaCardFront = ({ question }) => {
  let answers = []
  answers.push(question.correctAnswer)
  for (let answer in question.incorrectAnswers) {
    answers.push(question.incorrectAnswers[answer])
  }

  const renderAnswers = () => {
    return answers.map((answer, idx) => {
      return <li key={idx}>{answer}</li>
    })
  }
  


  
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>{renderAnswers()}</ul>
    </div>
  )
}

export default TriviaCardFront

