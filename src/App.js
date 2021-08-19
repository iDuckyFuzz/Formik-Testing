import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';


const MyCheckbox = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <FormControlLabel {...field} control={<Checkbox />} label={label} />
  )
}

const App = () => (
  <div>
    <Formik
      initialValues={{ firstName: '', lastName: '', receiveEmail: false }}
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
          <MyCheckbox label="Receive Email" type="checkbox" name="receiveEmail" />
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
