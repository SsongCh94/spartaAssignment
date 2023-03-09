import React from "react";
import { Form } from "react-bootstrap";

function Selects() {
  return (
    <Form.Select
      style={{
        width: "300px",
        height: "50px",
        border: "1px solid lightgrey",
        borderRadius: "20px",
        paddingLeft: "15px",
      }}
      aria-label="Default select example"
    >
      <option>리액트</option>
      <option value="1">자바</option>
      <option value="2">스프링</option>
      <option value="3">리액트 네이티브</option>
    </Form.Select>
  );
}

export default Selects;
