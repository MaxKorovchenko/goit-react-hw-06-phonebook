import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

import {
  Form,
  FormButton,
  FormField,
  ErrorMessage,
  Field,
} from './ContactsForm.styled';

const phoneRegex =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const phoneError =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please, enter contact name'),
  number: Yup.string()
    .matches(phoneRegex, phoneError)
    .required('Please, enter phone number'),
});

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, actions) => {
    if (contacts.find(contact => contact.name === values.name)) {
      return alert(`${values.name} is already in contacts.`);
    }

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormField>
          Name
          <Field type="text" name="name" autoComplete="off" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Number
          <Field type="tel" name="number" autoComplete="off" />
          <ErrorMessage name="number" component="span" />
        </FormField>

        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};
