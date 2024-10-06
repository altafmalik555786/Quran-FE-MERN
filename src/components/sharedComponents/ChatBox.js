import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect
import axios from 'axios'; // Import axios

function ChatBox({ tutorId }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Fetch messages when component loads
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`/api/messages?tutorId=${tutorId}`);
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages', error);
            }
        };
        fetchMessages();
    }, [tutorId]);

    const sendMessage = async () => {
        try {
            await axios.post('/api/messages', {
                tutorId,
                message: newMessage,
                sender: 'student', // or 'tutor' based on user
            });
            setNewMessage(''); // Clear input field
            // Optionally refetch the conversation to update the message list
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    return (
        <div className="chat-box">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === 'student' ? 'student-message' : 'tutor-message'}>
                        {msg.message}
                    </div>
                ))}
            </div>
            <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatBox;
