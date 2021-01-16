import React from "react";
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from "yup";

const initialUserForm = {
  title: '',
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
      errors.title = 'Please enter a valid name!';
  }
}

const validation = yup.object().shape({
  title: yup.string().required('Please enter correct name!'),
})

export default function SearchForm({onSubmit}) {
  return (
    <section>

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
    </section>
  );
}