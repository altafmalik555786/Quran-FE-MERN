import React from "react";
import StudentHeader from "../../sharedComponents/StudentHeader";
import { Container, Row, Col } from "react-bootstrap";
import StudentSidebar from "../../sharedComponents/StudentSidebar";
import { Link } from "react-router-dom";
const ParentalWatch = () => {
  return (
    <>
      <StudentHeader />
      <Row>
        <Col className="col-4 col-md-3 col-xl-2">
          <StudentSidebar />
        </Col>
        <Col md={9} className="content-col">
          <p className="text-center p-5 fs-3">
            To enable the Parental Watch option please{" "}
            <Link to="/priceplan" className="text-primary">
              upgrade
            </Link>{" "}
            your plan.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default ParentalWatch;
