import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SectionBlock from './components/Section';
import PhoneForm from './components/PhoneForm';
import ContactsList from './components/ContactList';
import FilterContacts from './components/FilterContacts';
import { Spinner } from './components/Spinner';
import { isLoadingValue } from './components/Spinner';
import { getAllItem } from './redux/contacts/contacts-operation';

export default function App() {
  let isLoading = useSelector(isLoadingValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItem());
  }, []);

  return (
    <>
      <SectionBlock title="Phone-book">
        <PhoneForm />
      </SectionBlock>
      <SectionBlock title="Contacts">
        <FilterContacts />
        {isLoading ? <Spinner /> : <ContactsList />}
      </SectionBlock>
    </>
  );
}
