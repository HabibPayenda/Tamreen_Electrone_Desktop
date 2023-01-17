import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Nav,
  Card,
  Button,
  Navbar,
  Form,
  FormControl,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import { Formik } from "formik";
import * as Yup from "yup";

import { connect } from "react-redux";
import { createStudio } from "./../store/actions/studioActions";

import colors from "./../utils/colors";

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  height: 80px;
  width: 100%;
  margin: 0;
  padding: 0;
  box-shadow: black;
  margin-bottom: 10px;
`;

const StyledContainer = styled.div``;

const StyledButton = styled.a`
  background-color: ${colors.primary};
  margin: 20px;
  color: ${colors.light};

  &:hover {
    cursor: pointer;
  }
`;

const StyledLogo = styled.img`
  height: 50px;
  width: 70px;
`;

////Yup Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  ownerId: Yup.string().required().label("ID"),
});

function StudiosScreen({ createStudio, newStudio }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = (values) => {
    console.log(`values.name in submit form is : ${values.name}`);
    createStudio(values);
    handleClose();
  };

  return (
    <Container fluid>
      <Row style={{ justifyContent: "center", alignItems: "center" }}>
        <Navbar
          variant="dark"
          style={{ width: "100%", backgroundColor: colors.primary }}
        >
          <Navbar.Brand href="/">TAMREEN</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/studios">STUDIOS</Nav.Link>
            <Nav.Link href="/users">USERS</Nav.Link>
            <Nav.Link href="/employes">EMPLOYES</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Navbar
          variant="dark"
          style={{ width: "100%", backgroundColor: colors.primary }}
        >
          <Form inline>
            <Button variant="outline-light" onClick={handleShow}>
              Add Studio
            </Button>
          </Form>
        </Navbar>
      </Row>
      <Row>
        <h4> {newStudio ? newStudio.name : null} </h4>
      </Row>
      <Modal show={show} onHide={handleClose} style={{ marginTop: 200 }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Studio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ name: "", ownerId: "" }}
            onSubmit={(values) => submitForm(values)}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <label for="name" style={{ marginRight: 10 }}>
                  Name:
                </label>
                <input
                  onChangeText={handleChange("name")}
                  onBlur={() => setFieldTouched("name")}
                  type="text"
                  name="name"
                  placeholder="Studio Name"
                />
                <br />
                <label for="name" style={{ marginRight: 37 }}>
                  ID:
                </label>
                <input
                  onChangeText={handleChange("ownerId")}
                  onBlur={() => setFieldTouched("ownerId")}
                  type="text"
                  name="ownerId"
                  placeholder="Owner Id"
                />
                <br />
                <Button
                  variant="primary"
                  name="studio"
                  type="Submit"
                  onClick={handleSubmit}
                  style={{ marginTop: 10 }}
                >
                  Create Studio
                </Button>
              </>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

const mapStateTopProps = ({ newStudio }) => {
  return { newStudio };
};

export default connect(mapStateTopProps, { createStudio })(StudiosScreen);
