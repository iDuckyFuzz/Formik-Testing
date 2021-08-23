import React from 'react';
import { Formik, Form, Field, useField } from 'formik';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';

const MyCheckbox = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <FormControlLabel {...field} control={<Checkbox />} label={label} />
    )
}

const Container = styled.div`
    display:flex;
`

const RegisterForm = () => (
    <Container>
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
                </Form>
            )}
        </Formik>
    </Container>
);

export default RegisterForm;
