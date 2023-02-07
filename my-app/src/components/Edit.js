import React, { useState, useEffect } from "react";

import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import demos from "./demo";

import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [id, setId] = useState("");
  let history = useNavigate();

  var index = demos
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = demos[index];
    a.date = date;
    a.time = time;
    history("/add");
  };
  useEffect(() => {
    setDate(localStorage.getItem("date"));
    setTime(localStorage.getItem("time"));
    setId(localStorage.getItem("id"));
  }, []);
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Control type="text" placeholder="Enter Date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTime">
          <Form.Control
            type="text"
            placeholder="Enter Time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
