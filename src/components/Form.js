import React from "react";
import styled from "styled-components";
import Input from "./Input";
import FormOption from "./FormOption";
import Example from "./CategoryOptions";
import * as Yup from "yup";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      store_name: "",
      adress: "",
      webiste: "",
    },
    validationSchema: getSchema(),
    onSubmit: async (values) => {
      console.log("succes");
    },
  });

  return (
    <Container>
      <Heading>WHERE DO YOU BUY YOUR CONSCIOUS SWEATER?</Heading>
      <StyledForm onSubmit={formik.handleSubmit} noValidate>
        <FormOption />
        <Input
          placeholder="+ name of the store*"
          name="store_name"
          type="store_name"
          value={formik.values.store_name}
          error={formik.touched.store_name ? formik.errors.store_name : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input placeholder="+ adress" />
        <Input
          placeholder="+ website"
          name="webiste"
          type="webiste"
          value={formik.values.webiste}
          error={formik.touched.webiste ? formik.errors.webiste : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input placeholder="+ opening houres" />
        <Example />
        <button type="submit">wdaaw</button>
      </StyledForm>
    </Container>
  );
};

const getSchema = () => {
  return Yup.object().shape({
    store_name: Yup.string()
      .required("name of the store is required")
      .max(200, "name is too long"),
    adress: Yup.string()
      .min(3, "adress is too short")
      .max(32, "adress is too long")
      .required("adress is required"),
    website: Yup.string()
      .min(3, "website is too short")
      .max(32, "website is too long")
      .required("website is required"),
  });
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #152afc;
  height: 100%;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h2`
  text-align: center;
  font-size: 25px;
  max-width: 250px;
  margin-top: -15px;
`;

export default Form;
