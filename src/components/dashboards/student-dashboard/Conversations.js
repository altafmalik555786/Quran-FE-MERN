import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import StudentHeader from "../../sharedComponents/StudentHeader";

const Conversations = () => {
  return (
    <>
      <StudentHeader/>
      <Row>
        <Col className="col-4 col-md-3 col-xl-2 border-end">
          <h1 className="border-bottom py-4">Recent (0)</h1>
        </Col>
        <Col  className="col-7 col-md-8 col-xl-9 content-col ">
          NO messages
        </Col>
      </Row>
    </>
  );
};

export default Conversations;
