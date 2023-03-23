import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import service from "./Services/services";
import { Table, Spin } from "antd";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Book Id</Form.Label>
              <Form.Control type="email" placeholder="Enter Book Id" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Book Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Publisher</Form.Label>
              <Form.Control type="text" placeholder="Enter Publisher" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Shelf Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Shelf Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="text" placeholder="Enter Quantity" />
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [book, setBook] = useState([]);

  const fetchBooks = async (e) => {
    const response = await service.getBooks();
    console.log("*****Books******");
    console.log(response);
    setBook(response);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const columns = [
    { title: "Book ID", dataIndex: "_id" },
    { title: "Book Title", dataIndex: "title" },
    { title: "Publisher", dataIndex: "publisher" },
    { title: "Quantity", dataIndex: "quantity" },
    { title: "Action", dataIndex: "action" },
  ];
  return (
    <div className="Wrapper " style={{ margin: "20px" }}>
      <header>
        <h1>Library Management System</h1>
      </header>
      <Navbar />
      <br />
      <div style={{ float: "right", marginBottom: "10px" }}>
        <Button variant="success" onClick={() => setModalShow(true)}>
          Add Book
        </Button>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <br />

      <Table
        className="admin-table"
        style={{
          borderRadius: 8,
          boxShadow: "0px 1px 2px rgba(18, 62, 119, 0.05)",
          border: "1px solid #E5E7EB",
          padding: 1.5,
          backgroundColor: "#F9FAFB",
          width: "100%",
        }}
        columns={columns}
        dataSource={book}
        pagination={true}
      />
    </div>
  );
}

export default App;
