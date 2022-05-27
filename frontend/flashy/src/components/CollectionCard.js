import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../pages/CollectionsPage.css'
import {format} from 'date-fns'


const CollectionCard = (props) => {
  const collection = props.collection
  const dateFormatted = format(new Date(collection.date_created), 'MM/dd/yyyy')

  return (
    <div>
        <Card style={{ width: '18rem', margin: '15px', height: '150px' }} className="Card">
            <Card.Body>
                <Card.Title>{collection.title}</Card.Title>
                <Button variant="primary" style={{marginTop: '15px', marginBottom: '15px'}}>open flash</Button>
                  <Card.Title>
                    {collection.date_created && 
                        <>
                              created: {dateFormatted}
                        </>
                    }
                  </Card.Title>
            </Card.Body>
        </Card>
    </div>
  )
}

export default CollectionCard