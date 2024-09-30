import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from 'react-bootstrap';
import TutorHeader from '../../sharedComponents/TutorHeader';
import TutorSidebar from '../../sharedComponents/TutorSidebar';

const AddSchedule = () => {
  const [availabilityFields, setAvailabilityFields] = useState([
    { startAt: '', endAt: '', day: 'Monday', id: Date.now() },
  ]);

  // Fetch schedules on component mount
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/tutor/get-schedule');
        const fetchedSchedules = response.data.map(schedule => ({
          ...schedule,
          id: schedule._id, // Use MongoDB ID for identification
        }));
        setAvailabilityFields(fetchedSchedules.length > 0 ? fetchedSchedules : [{ startAt: '', endAt: '', day: 'Monday', id: Date.now() }]);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  const handleAddField = () => {
    setAvailabilityFields([
      ...availabilityFields,
      { startAt: '', endAt: '', day: 'Monday', id: Date.now() },
    ]);
  };

  const handleRemoveField = (id) => {
    const updatedFields = availabilityFields.filter(field => field.id !== id);
    setAvailabilityFields(updatedFields);
  };

  const handleChange = (id, event) => {
    const newAvailabilityFields = availabilityFields.map((field) => {
      if (field.id === id) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setAvailabilityFields(newAvailabilityFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send the schedule data to the API
      await Promise.all(
        availabilityFields.map(async (field) => {
          if (field.startAt && field.endAt) {
            const response = await axios.post('http://localhost:8000/api/v1/tutor/add-schedule', {
              startAt: field.startAt,
              endAt: field.endAt,
              day: field.day,
            });

            // Check response status
            if (response.status !== 200) {
              throw new Error(response.data.message || 'Error occurred while saving schedule');
            }
          }
        })
      );

      alert('Schedules saved successfully');
      // Optionally, fetch the schedules again to refresh the list
      // await fetchSchedules(); // Uncomment if you want to refresh after save
    } catch (error) {
      console.error('Error saving schedules:', error);
      alert('Failed to save schedules: ' + (error.response ? error.response.data.message : error.message));
    }
  };


  return (
    <>
      <TutorHeader />
      <Row>
        <Col className="col-4 col-md-3 col-xl-2">
          <TutorSidebar />
        </Col>
        <Col md={9} className="content-col">
          <Row>
            <Col className='m-4 m-md-0'>
              <h1 className="text-start my-4">Availability Schedule:</h1>
              <Form onSubmit={handleSubmit}>
                {availabilityFields.map((field) => (
                  <Row key={field.id} className="mb-3">
                    <Col md={4}>
                      <Form.Group controlId={`startAt_${field.id}`}>
                        <Form.Label>Start At:</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="time"
                            name="startAt"
                            className='p-4'
                            value={field.startAt}
                            onChange={(e) => handleChange(field.id, e)}
                            required
                          />
                          <InputGroup.Text>
                            <i className="bi bi-clock"></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId={`endAt_${field.id}`}>
                        <Form.Label>End At:</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="time"
                            name="endAt"
                            className='p-4'
                            value={field.endAt}
                            onChange={(e) => handleChange(field.id, e)}
                            required
                          />
                          <InputGroup.Text>
                            <i className="bi bi-clock"></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group controlId={`day_${field.id}`}>
                        <Form.Label>Day:</Form.Label>
                        <Form.Select
                          name="day"
                          value={field.day}
                          onChange={(e) => handleChange(field.id, e)}
                        >
                          <option value="Sunday">Sunday</option>
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={2} className="d-flex align-items-end">
                      <Button
                        variant="danger"
                        className='p-4 mt-3 mt-md-0'
                        onClick={() => handleRemoveField(field.id)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                ))}
                <Button variant="success" className='p-4' onClick={handleAddField}>
                  Add Day
                </Button>
                <div className="text-end mt-3">
                  <Button className='p-4' variant="secondary" type="button">
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit" className="ms-2 p-4">
                    Save
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AddSchedule;
