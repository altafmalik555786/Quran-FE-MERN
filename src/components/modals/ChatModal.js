import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import { FaRegCommentDots } from 'react-icons/fa'; 
import {jwtDecode} from 'jwt-decode'; 

const ChatModal = ({ selectedTutor, showModal, handleClose }) => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [minimized, setMinimized] = useState(false); 
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const studentId = decodedToken.id;

    // Fetch chat history when the modal opens
    useEffect(() => {
        if (selectedTutor && showModal) {
            axios.get(`http://localhost:8000/api/v1/messages/${studentId}/${selectedTutor._id}`)
                .then(response => setChatHistory(response.data))
                .catch(error => console.error('Error fetching chat history:', error));
        }
    }, [selectedTutor, showModal]);

    const handleSendMessage = async () => {
        try {
            const newMessage = {
                studentId,
                tutorId: selectedTutor._id,
                message,
                sender: 'student',
            };

            const response = await axios.post('http://localhost:8000/api/v1/messages', newMessage);

            // Append the new message to the chat history
            setChatHistory([...chatHistory, response.data.newMessage]);
            setMessage('');  // Clear the input
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleMinimize = () => setMinimized(!minimized);

    return (
        <Modal
            show={showModal}
            onHide={handleMinimize}
            dialogClassName="custom-modal"
            className="chatbox_253243 popup-box chat-popup show"
            style={{ right: '10px' }}
        >
            <div className="popup-head d-flex justify-content-between align-items-center p-2">
                <div className="popup-head-left d-flex align-items-center">
                    <img
                        src={selectedTutor?.avatar || "https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"}
                        alt="Tutor Avatar"
                        style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
                    />
                    <span>{selectedTutor?.name}</span>
                </div>
                <div className="popup-head-right d-flex align-items-center">
                    <span className="ico-minimize minimize-chatbox fs-3" title="Minimize" onClick={handleMinimize}>
                        <FaRegCommentDots />
                    </span>
                    <span className="ico-close cursor-pointer close-chatbox ms-3 fs-3" title="Close" onClick={handleClose}>
                        &times; {/* Close icon */}
                    </span>
                </div>
            </div>

            {!minimized && (
                <Modal.Body className="popup-body border mx-2 mb-2" style={{ border: '1px solid #ccc', borderTop: 'none' }}>
                    <div className="popup-messages d-flex flex-column" style={{ maxHeight: '300px', overflowY: 'auto', padding: '10px' }}>
                        {chatHistory.map((msg, index) => (
                            <div key={index} className={msg.sender === 'student' ? 'message sent' : 'message received'}>
                                {msg.message}
                            </div>
                        ))}
                    </div>
                    <div className="sendbar send-message d-flex justify-content-between align-items-center mt-2">
                        <Form.Group className="mb-0 w-100 me-2">
                            <Form.Control
                                type="text"
                                placeholder="Type a message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="success" onClick={handleSendMessage}>
                            Send
                        </Button>
                    </div>
                </Modal.Body>
            )}
        </Modal>
    );
};

export default ChatModal;
