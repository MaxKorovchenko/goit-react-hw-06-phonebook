import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { contactsReducer, contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);
