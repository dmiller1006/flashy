import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../pages/FlashcardLayout.css'


const CollectionCard = (props) => {
  const flashsetinfo = props.flashset

  return (
    <div>
        <Card style={{ margin: '15px', height: '250px' }} className="card">
            <Card.Body>
                <Card.Title>{flashsetinfo.title}</Card.Title>
                <Link to={`${flashsetinfo.id}/`}>
                        <Button variant="primary" style={{marginTop: '30px' }}>open/edit flash</Button>
                </Link>
            </Card.Body>
            <Card.Body>
              <Link to={`${flashsetinfo.id}/delete`}>
                <Button variant="danger" style={{ marginBottom: '15px' }}>delete flash</Button>
              </Link>
            </Card.Body>
        </Card>
    </div>
  )
}

export default CollectionCard