import React from "react";
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from "yup";

const initialUserForm = {
  title: '',
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
      errors.title = 'Invalid title';
  }
}

const validation = yup.object().shape({
  title: yup.string().required('Invalid title'),
})

export default function SearchForm({onSubmit}) {
  return (
    <Formik
        validationSchema= {validation}
        initialValues={initialUserForm}
        validate= {validate}
        onSubmit={onSubmit}
        render={props => {
            return (
                <Form>
                    <label>
                        <input name='title' type='text' placeholder='Search for stylist...' />
                        <ErrorMessage name='title' component='div' />
                    </label>
                    <button type='submit'>Search</button>
                </Form>
            )
        }}
    />
  );
}