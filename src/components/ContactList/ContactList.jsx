import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          phone={contact.number}
          onDelete={() => handleDeleteContact(contact.id)}
        />
      ))}
    </>
  );
};

export default ContactList;
