import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../pages/FlashSetListPage.css'
import {format} from 'date-fns'


const CollectionCard = (props) => {
  const flashsetinfo = props.flashset
  const dateFormatted = format(new Date(flashsetinfo.date_created), 'MM/dd/yyyy')

  return (
    <div>
        <Card style={{ margin: '15px', height: '250px' }} className="Card">
            <Card.Body>
                <Card.Title>{flashsetinfo.title}</Card.Title>
          <Link to={`${flashsetinfo.id}/`}>
                  <Button variant="primary" style={{marginTop: '15px', marginBottom: '15px'}}>open flash</Button>
                </Link>
                  <Card.Title style={{ fontSize: '10pt'}}>
                    {flashsetinfo.date_created && 
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