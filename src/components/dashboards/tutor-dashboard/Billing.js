import React from 'react'
import {  Row, Col } from "react-bootstrap";
import TutorHeader from '../../sharedComponents/TutorHeader';
import TutorSidebar from '../../sharedComponents/TutorSidebar';

const Billing = () => {
  return (
    <>
    <TutorHeader />
    <Row>
      <Col className="col-4 col-md-3 col-xl-2">
        <TutorSidebar />
      </Col>
      <Col md={9} className="content-col">
        <p className="text-center p-5 fs-3">
          Total bill of your worked hours will be here
        </p>
      </Col>
    </Row>
  </>
  )
}

export default Billing