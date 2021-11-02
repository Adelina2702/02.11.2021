import axios from 'axios';
import React, { useContext, useState } from 'react';
import { contactContext } from '../../context/ContactContext';



const AddContact = (props) => {
    let [name, setName] = useState('')
    let [phone, setPhone] = useState('')
    let [email, setEmail] = useState('')
    let [image, setImage] = useState('')
    // console.log(props)
    const { getContacts } = useContext(contactContext)
    function handleClick() {
        let newContact = {
            name,
            phone,
            email,
            image
        }
        axios.post("http://localhost:8001/contacts", newContact)
        getContacts()
        setName('')
        setPhone('')
        setEmail('')
        setImage('')
    }

    return (
        <div>
            <input style={{ backgroundColor: "lightblue", width: "100%", height: "40px" }} onChange={(e) => setName(e.target.value)}
                type="text" placeholder="Enter name"
                value={name} />
                <br />
            <input style={{ backgroundColor: "lightblue", width: "100%", height: "40px" }} onChange={(e) => setPhone(e.target.value)}
                type="number" placeholder="Enter number phone"
                value={phone} />
                <br />
            <input style={{ backgroundColor: "lightblue", width: "100%", height: "40px" }} onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="Enter email address"
                value={email} />
            <br />
            <input style={{ backgroundColor: "lightblue", width: "100%", height: "40px" }} onChange={(e) => setImage(e.target.value)}
                type="text" placeholder="Enter url image"
                value={image} />
                <br />
            <button style={{ backgroundColor: "darkgrey", width: "110px", height: "40px" }} onClick={handleClick}>Add Contact</button>
        </div>
    );
};

export default AddContact;
