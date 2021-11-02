import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { contactContext } from '../../context/ContactContext';


const EditContacts = (props) => {

    const { editContact} = useContext(contactContext)

    
    let [name, setName] = useState('')
    let [phone, setPhone] = useState('')
    let [email, setEmail] = useState('')
    let [image, setImage] = useState('')
  
    function handleSaveChange() {
        let contact = {
            name,
            phone,
            email,
            image
        }
        editContact(contact, props.item.id)
        props.handleClose()
            
    }
    return (
            <>
               

            <Modal show={props.show} onHide={props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>

                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Img URL</Form.Label>
                            <Form.Control type="text" placeholder="Img url"
                                value={image}
                                onChange={(e) => setImage(e.target.value)} />
                        </Form.Group>

                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                    <Button variant="primary" onClick={handleSaveChange}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            )
    
};

export default EditContacts;