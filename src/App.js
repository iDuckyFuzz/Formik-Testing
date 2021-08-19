import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@material-ui/core';

const App = () => (
  <div>
    <Formik
      initialValues={{ firstName: '', lastName: '', isTall: false }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        // make async call
        console.log(data);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <Field placeholder="First Name" name="firstName" type="input" as={TextField} />
          <div>
            <Field placeholder="Last Name" name="lastName" type="input" as={TextField} />
          </div>
          <Field name="isTall" type="checkbox" />
          <div>
            <Button disabled={isSubmitting} type="submit">
              Submit
            </Button>
          </div>
          <pre>{JSON.stringify(values)}</pre>
        </Form>
      )}
    </Formik>
  </div>
);

export default App;
