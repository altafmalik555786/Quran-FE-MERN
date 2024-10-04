import React from 'react'
import TutorHeader from '../../sharedComponents/TutorHeader'
import TutorSidebar from '../../sharedComponents/TutorSidebar'
import { Col, Row } from 'react-bootstrap'
import QuranMajeed from "../../../assets/QuranMajeed.pdf";


const ClassroomDemo = () => {
    return (
        <>
            <TutorHeader />
            <Row>
                <Col className="col-4 col-md-3 col-xl-2">
                    <TutorSidebar />
                </Col>
                <Col md={9} className="content-col">
                    <div className="d-flex justify-content-center">
                        <iframe
                            className="pdf mw-100 mh-100"
                            width={800}
                            height={500}
                            src={QuranMajeed}
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ClassroomDemo