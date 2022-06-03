import { useState } from 'react'
import { Card } from 'react-bootstrap'
import '../pages/FlashcardLayout.css'

const FlashCard = ({ card }) => {
  const [cardText, setCardText] = useState(card.front_text)
  const [flipped, setFlipped] = useState(false)


  const handleCardClick = (e) => {
    e.preventDefault()
    if (!flipped) {
      setCardText(card.back_text)
      setFlipped(true)
    } else {
      setCardText(card.front_text)
      setFlipped(false)
    }
  }

  return (
    <div onClick={handleCardClick}>
      <Card style={{ margin: '15px', height: '250px' }} >
        <Card.Body>
          <Card.Title style={{ marginTop: '25%' }}>{cardText}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default FlashCard