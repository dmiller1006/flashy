import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import FlashyAPI from '../api/FlashyAPI'


const NewCardModal = ({ flashsetID, setFlashset }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async () => {
        const frontText = document.getElementById('form.input1').value
        const backText = document.getElementById('form.input2').value
        const createCard = await FlashyAPI.createCard(frontText, backText, flashsetID)
        const newData = await FlashyAPI.fetchSingleFlashset(createCard.flashset)
        setFlashset(newData)
        handleClose()
    }


    return (
        <>
            <Button variant="primary" style={{ marginTop: '30px' }} className="mx-5" onClick={handleShow}>
                add card
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>add new card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="form.input1"
                        >
                            <Form.Label>front text</Form.Label>
                            <Form.Control as="textarea" rows={3} style={{ resize: 'none' }}/>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="form.input2"
                        >
                            <Form.Label>back text</Form.Label>
                            <Form.Control as="textarea" rows={3} style={{ resize:'none'}}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewCardModal