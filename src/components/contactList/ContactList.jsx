import React, { useContext, useEffect, useState } from 'react';
import { contactContext } from '../../context/ContactContext'
import { Card,Button } from 'react-bootstrap';
import EditContacts from '../editContacts/EditContacts';

const ContactList = (props) => {
    const { getContacts, contacts, deleteContact } = useContext(contactContext)
    useEffect(getContacts, [])
    // console.log(contacts);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container d-flex flex-wrap">
            {
                contacts.map((item, index) => (
                    <Card
                        className='cards'
                        key={item.id} style={{ width: '18rem', margin: "20px auto" }}>
                        <img src={item.image}/>
                        {/* <Card.Img variant="top" src={item.image} /> */}
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.phone}</Card.Text>
                            <Card.Text>{item.email}</Card.Text>
                            <Button variant="primary" onClick={handleShow}>
                                Edit
                            </Button>
                            <Button className='btn-card' variant="danger" onClick={() => deleteContact(item.id)}>Delete</Button>
                            {/* <Button onClick={() => handleEditIndex(index)}>Edit Contact</Button> */}
                        </Card.Body>
                        <EditContacts
                        handleClose ={handleClose}
                        handleShow={handleShow}
                        show={show}
                        item={item}
                        contacts={contacts}
                        index= {index}
                        />
                    </Card>
                ))
            }
        </div>
    );
};

export default ContactList;