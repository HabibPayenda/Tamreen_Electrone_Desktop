import React, { useEffect } from "react";
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
  ListGroup,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import { connect } from "react-redux";
import { loadAllUsers } from "./../store/actions/usersActions";

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

const StyledContainer = styled.div`
  display: flex;
  flex-direction: "row";
  flex: 1;
  justify-content: space-around;
`;

const StyledTitle = styled.text`
  font-size: 16;
  font-weight: bold;
  color: ${colors.primary};
`;

const StyledButton = styled.a`
  background-color: ${colors.primary};
  margin: 20px;
  color: ${colors.light};

  &:hover {
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  height: 50px;
  width: 70px;
`;

function UsersScreen({ users, loadAllUsers }) {
  useEffect(() => {
    loadAllUsers();
  }, []);
  console.log(users);
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
            <Nav.Link href="#features">USERS</Nav.Link>
            <Nav.Link href="#pricing">EMPLOYES</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </Row>

      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th> Name</th>
                <th>Eamil</th>
                <th>Photo</th>
              </tr>
            </thead>
            {users.map((user) => {
              return (
                <tbody>
                  <tr>
                    <td> {user.id} </td>
                    <td> {user.name} </td>
                    <td>{user.email}</td>
                    <td>
                      <StyledImage
                        src={`http://192.168.43.211:8000/photos/${
                          user.latest_image
                            ? user.latest_image.name
                            : "hello.jpg"
                        }`}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateTopProps = ({ users }) => {
  return { users };
};
export default connect(mapStateTopProps, { loadAllUsers })(UsersScreen);
