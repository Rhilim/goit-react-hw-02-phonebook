import React from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import {
  StyledButton,
  StyledError,
  StyledField,
  StyledForm,
  StyledTitle,
} from 'components/PhoneBook/PhoneBook.styled';

export const PhoneBook = ({ onAdd }) => {
  return (
    <>
      <StyledTitle>Phonebook</StyledTitle>
      <Formik
        initialValues={{
          contacts: [],
          name: '',
        }}
        onSubmit={(values, actions) => {
          onAdd({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <StyledForm>
          <label htmlFor="firstName">
            Name
            <StyledField
              id="firstName"
              placeholder="Jane"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <StyledError name="name" component="div" />
          </label>
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
