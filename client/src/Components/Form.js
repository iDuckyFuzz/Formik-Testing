import React, { useState } from 'react';
import { Formik, Form, Field, useField } from 'formik';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';
import axios from 'axios';

const MyCheckbox = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <FormControlLabel {...field} control={<Checkbox />} label={label} />
    )
}

const Container = styled.div`
    display:flex;
`

const RegisterForm = () => {
    const formHandler = async (event) => {

        //this prevents the reloading of the page
        event.preventDefault();
        console.log("Form Submitted");
        console.log(event);

        //create a data object to pass through axios (like node)
        const body = {
            name: name,
        }

        // tell the browser what type of content is being passed from frontend to backend
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        // pass the data & the config to the back end - axios.post will return a response
        // from our back end
        const response = await axios.post("/sign-up", body, config);
        //response is an object
        setbackendResponse(response.data.response);
    }
    return (
        <Container>
            <Formik
                initialValues={{ firstName: '', lastName: '', password1: '', password2: '', receiveEmail: false }}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    // make async call
                    console.log(data);
                    setSubmitting(false);
                    formHandler();
                    resetForm();
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <Field placeholder="First Name" name="firstName" type="input" as={TextField} />
                        <div>
                            <Field placeholder="Last Name" name="lastName" type="input" as={TextField} />
                        </div>
                        <div>
                            <Field placeholder="Password" name="password1" type="input" as={TextField} />
                        </div>
                        <div>
                            <Field placeholder="Confirm Password" name="password2" type="input" as={TextField} />
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
    )
};

export default RegisterForm;
