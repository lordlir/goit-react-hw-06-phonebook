import React from 'react';

import { ContactForm } from './contact-form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contact-list/ContactList';

import s from './app.module.css';

export const App = () => {
  return (
    <>
      <h2 className={s.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={s.title}>Contact</h2>
      <Filter />
      <ContactList />
    </>
  );
};
