import React from 'react'
import { Card } from 'react-bootstrap'
import '../pages/FlashcardLayout.css'

const FlashCard = ({card}) => {
  return (
    <div>
      <Card style={{ margin: '15px', height: '250px' }} className="card">
        <Card.Body>
          <Card.Title style={{ marginTop: '25%' }}>{card.front_text}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default FlashCard