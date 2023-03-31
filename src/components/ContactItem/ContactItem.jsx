import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/actions';

import { DeleteBtn, Info } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Info>
        {name}: {number}
        <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </DeleteBtn>
      </Info>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
