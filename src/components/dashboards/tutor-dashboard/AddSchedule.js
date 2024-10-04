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
    { startAt: '', endAt: '', day: 'Monday', id: null },
  ]);

  // Fetch schedules on component mount
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/tutor/get-schedule');
        const fetchedSchedules = response.data.map(schedule => ({
          ...schedule,
          id: schedule._id, // Use MongoDB _id as ID
        }));
        setAvailabilityFields(fetchedSchedules.length > 0 ? fetchedSchedules : [{ startAt: '', endAt: '', day: 'Monday', id: null }]);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };
    fetchSchedules();
  }, []);

  // Handle adding a new field (for new schedule)
  const handleAddField = () => {
    setAvailabilityFields([
      ...availabilityFields,
      { startAt: '', endAt: '', day: 'Monday', id: null },
    ]);
  };

  // Handle changes in form fields
  const handleChange = (id, event) => {
    const updatedFields = availabilityFields.map((field) => {
      if (field.id === id || field.id === null) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setAvailabilityFields(updatedFields);
  };

  // Handle deleting a schedule
  const handleDeleteSchedule = async (id) => {
    if (window.confirm("Are you sure you want to delete this schedule?")) {
      try {
        const response = await axios.delete(`http://localhost:8000/api/v1/tutor/delete-schedule/${id}`);
        if (response.status === 200) {
          setAvailabilityFields(availabilityFields.filter(field => field.id !== id));
          alert("Schedule deleted successfully");
        }
      } catch (error) {
        console.error("Error deleting schedule:", error);
        alert("Failed to delete schedule");
      }
    }
  };

  // Handle form submission to save (either add or update)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Promise.all(
        availabilityFields.map(async (field) => {
          if (field.startAt && field.endAt) {
            if (field.id) {
              // Update existing schedule
              const response = await axios.put(`http://localhost:8000/api/v1/tutor/update-schedule/${field.id}`, {
                startAt: field.startAt,
                endAt: field.endAt,
                day: field.day,
              });
              if (response.status !== 200) {
                throw new Error("Error occurred while updating schedule");
              }
            } else {
              // Add new schedule
              const response = await axios.post('http://localhost:8000/api/v1/tutor/add-schedule', {
                startAt: field.startAt,
                endAt: field.endAt,
                day: field.day,
              });
              if (response.status === 200) {
                // Update state to reflect newly added schedule
                setAvailabilityFields(prevFields =>
                  prevFields.map(f => (f === field ? { ...f, id: response.data._id } : f))
                );
              } else {
                throw new Error("Error occurred while saving schedule");
              }
            }
          }
        })
      );
      alert("Schedules saved successfully");
    } catch (error) {
      console.error("Error saving schedules:", error);
      alert("Failed to save schedules");
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
                {availabilityFields.map((field, index) => (
                  <Row key={index} className="mb-3">
                    <Col md={4}>
                      <Form.Group controlId={`startAt_${index}`}>
                        <Form.Label>Start At:</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="time"
                            name="startAt"
                            className='p-4'
                            value={field.startAt}
                            onChange={(e) => handleChange(field.id || index, e)}
                            required
                          />
                          <InputGroup.Text>
                            <i className="bi bi-clock"></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId={`endAt_${index}`}>
                        <Form.Label>End At:</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="time"
                            name="endAt"
                            className='p-4'
                            value={field.endAt}
                            onChange={(e) => handleChange(field.id || index, e)}
                            required
                          />
                          <InputGroup.Text>
                            <i className="bi bi-clock"></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group controlId={`day_${index}`}>
                        <Form.Label>Day:</Form.Label>
                        <Form.Select
                          name="day"
                          value={field.day}
                          onChange={(e) => handleChange(field.id || index, e)}
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
                    <Col md={2}>
                      {field.id && (
                        <Button
                          variant="danger"
                          className='p-4 mt-3 mt-md-0'
                          onClick={() => handleDeleteSchedule(field.id)}
                        >
                          Remove
                        </Button>
                      )}
                    </Col>
                  </Row>
                ))}
                <Button variant="primary" className="mt-3" type="submit">
                  Save Schedule
                </Button>
              </Form>
              <Button variant="secondary" className="mt-3" onClick={handleAddField}>
                Add Another Schedule
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AddSchedule;
