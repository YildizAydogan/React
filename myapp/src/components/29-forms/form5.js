import React from 'react'
import * as Yup from "yup";
import {useFormik} from 'formik'
import { Button, Container, Form } from 'react-bootstrap';
const Form5 = () => {

    const initialValues={
        email:"",
        password:""

    };

    const validationShema= Yup.object({
        email: Yup.string().email("Gecerli bir e posta giriniz").required("Eposta bos gecilemez"),
        password: Yup.string().required("Sifrenizi giriniz")
    });

    const onSubmit =(values) => {
        console.log(values);


    }
 
    const formik= useFormik({
        initialValues,
        validationShema,
        onSubmit

    })


  return (
<Container className="mt-5">

 <Form noValidate onSubmit={formik.handleSubmit}>

    <Form.Group className="mb-3">

        <Form.Label>Email</Form.Label>

           <Form.Control type="email"
        {...formik.getFieldProps("email")}
        isInvalid={formik.touched.email && !!formik.errors.email}
        isValid={formik.touched.email && !formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>


    </Form.Group>




     <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      
         <Form.Control type="password"
      {...formik.getFieldProps("password")}
      isInvalid={formik.touched.password && !!formik.errors.password}
      isValid={formik.touched.password && !formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
      
      
      </Form.Group>
      
</Form>


    <Button variant="warning" type="submit">Login</Button>
</Container>
  )
}

export default Form5