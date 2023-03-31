import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, MainTitle, Title } from './App.styled';

export const App = () => {
  return (
    <Layout>
      <MainTitle>Phonebook</MainTitle>
      <ContactsForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactsList />

      <GlobalStyle />
    </Layout>
  );
};
