import './App.css';
import AddContacts from './components/addContact/AddContacts';
import ContactList from './components/contactList/ContactList';
import Counter from './components/Counter';
import EditContacts from './components/editContacts/EditContacts';
import Ingredients from './components/Ingredients/Ingredients';
import Receipts from './components/Receipts/Receipts';
import Users from './components/User/User';
import ContactContextProvider from './context/ContactContext';

function App() {
  return (
    <>
    <ContactContextProvider>
    <Counter/>
    <Receipts />
    <Ingredients/>
    <Users/>
    <AddContacts/>
     <ContactList/>
    <EditContacts/> 
    </ContactContextProvider>
    </>
  );
}

export default App;
