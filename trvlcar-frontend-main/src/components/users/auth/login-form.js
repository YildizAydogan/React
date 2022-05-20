import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { getUser, login } from "../../../api/user-service";
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });
  const onSubmit = (values) => {
    setLoading(true);
    login(values).then( respLogin => {
      localStorage.setItem("token", respLogin.data.token);
      getUser().then( respUser=> {
        console.log(respUser);

        setLoading(false);
        // MERKEZİ STATE E KULLANICI YERLEŞTİR
        navigate(-1);
      })
      .catch( err=>{
        console.log(err);
        toast(err.responce.data.message);
        setLoading(false);
      })
      
    })
    .catch( err=>   {
      console.log(err);
      toast(err.responce.data.message);
      setLoading(false);
    })
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && formik.errors.email}
          isValid={formik.touched.email && !formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          {...formik.getFieldProps("password")}
          isInvalid={formik.touched.password && formik.errors.password}
          isValid={formik.touched.password && !formik.errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={loading}>
        {loading && <Spinner animation="border" size="sm"/>}  Login
      </Button>
    </Form>
  );
};
export default LoginForm;