import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/actions';
import { getFilter } from 'redux/selectors';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          name="nameToFind"
          onChange={e => dispatch(filterContacts(e.target.value))}
          autoComplete="off"
        />
      </Label>
    </div>
  );
};
