import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllItem,
  deleteItem,
} from '../../redux/contacts/contacts-operation';
import { itemsArray } from './contactList-selector';
import { filterValue } from '../FilterContacts/filter-selector';

import {
  TaskList,
  TaskItem,
  TaskItemElements,
  Button,
} from './StyledComponents';

export default function ContactList() {
  const contactsArray = useSelector(itemsArray);
  const filter = useSelector(filterValue);

  const filterContacts = items => {
    return items.filter(item =>
      item.nameValue.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  const arrFilters = filterContacts(contactsArray);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItem());
  }, []);

  return (
    <TaskList>
      {arrFilters.map(item => (
        <TaskItem key={item.id}>
          <TaskItemElements>{item.nameValue} :</TaskItemElements>
          <TaskItemElements>{item.numberValue}</TaskItemElements>
          <Button type="button" onClick={() => dispatch(deleteItem(item))}>
            Delete
          </Button>
        </TaskItem>
      ))}
    </TaskList>
  );
}

ContactList.propTypes = {
  visibleContacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
