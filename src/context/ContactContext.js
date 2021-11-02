import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { API } from "../const/const"

export const contactContext = createContext()

const INIT_STATE = {
    contacts: [],
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CONTACTS":
            return {...state, contacts: action.payload}
            default:
                return state;
    }
};

const ContactContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getContacts = async (contact) => {
        try{
            let {data} = await axios(API)
            dispatch({
                type: "GET_CONTACTS",
                payload: data,
            })
        }catch(e){
            console.log(e);
        }
    }

     const createContact = async (contact) => {
        try{
            await axios.post(API, contact)
            getContacts()
        }catch(e) {
            console.log(e)
        }
     }   

    const deleteContact = async (id) => {
        try {
            await axios.delete(`${API}/${id}`);
            getContacts()
        } catch (e) {
            console.log(e);
        }
    };
    const editContact = async(contact, id) => {
        try{
            await axios.patch(`${API}/${id}`,contact)
            getContacts()
        }catch(e){
            console.log(e)
        }
    }
    


    
    return (
        <contactContext.Provider 
        value ={{
            getContacts,
            createContact,
            deleteContact,
            editContact,
            contacts: state.contacts
        }}
        >
            {props.children}
        </contactContext.Provider>
    );
}
    export default ContactContextProvider;