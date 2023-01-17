import React from "react";

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
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import logo from "./../img/Logo.png";
import habib from "./../img/habib.png";
import studio from "./../img/studio.png";
import employes from "./../img/employes.png";
import users from "./../img/users.png";
import posts from "./../img/posts.png";

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

function PostsScreen(props) {
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
      <Row></Row>
    </Container>
  );
}

export default PostsScreen;
