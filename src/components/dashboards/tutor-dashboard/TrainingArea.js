import React from 'react';
import TutorHeader from '../../sharedComponents/TutorHeader';
import TutorSidebar from '../../sharedComponents/TutorSidebar';
import { Row, Col } from 'react-bootstrap';


const TrainingArea = () => {
  return (
    <>
      <TutorHeader />
      <Row className="">
        <Col className="col-4 col-md-3 col-xl-2">
          <TutorSidebar />
        </Col>
        <Col md={9} className="content-col">
          <div className="text-center my-4">
            <img
              alt="Qutor"
              src='https://th.bing.com/th/id/OIP.OYAP7LHAXTrS00KiUq-ZbgHaHa?rs=1&pid=ImgDetMain'
              title="Qutor"
              className="img-fluid"
              style={{ maxWidth: '100px', margin: '0 auto' }}
            />
          </div>
          <p className="staticHeading fs-3 text-center">Training Area</p>
          <div className="contentGray text-center mb-4">
            Please watch the videos below for guidance on how to use Qutor
            <br />
            on a laptop or Desktop computer.
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TrainingArea;
