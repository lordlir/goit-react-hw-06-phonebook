import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice.contact';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li className="list-item">
      {name}:{number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
