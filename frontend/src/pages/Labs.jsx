import React, { useState } from 'react';
import axios from 'axios';

const AddLab = () => {
    const [labDetails, setLabDetails] = useState({
        name: '',
        description: '',
        location: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLabDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/labs', labDetails);
            if (response.status === 201) {
                setMessage('Lab added successfully!');
                setLabDetails({ name: '', description: '', location: '' }); 
            } else {
                setMessage('Failed to add lab.');
            }
        } catch (error) {
            console.error("There was an error adding the lab:", error);
            setMessage('Error adding lab.');
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Add New Lab</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Lab Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={labDetails.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Description:</label>
                    <textarea
                        name="description"
                        value={labDetails.description}
                        onChange={handleChange}
                        style={styles.textarea}
                        required
                    ></textarea>
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={labDetails.location}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Add Lab</button>
            </form>
            {message && <p style={styles.message}>{message}</p>}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        fontSize: '14px',
        marginBottom: '5px',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '14px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        outline: 'none',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        fontSize: '14px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        resize: 'none',
        height: '80px',
        outline: 'none',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    message: {
        textAlign: 'center',
        marginTop: '20px',
        color: '#28a745',
        fontSize: '16px',
    },
};

export default AddLab;
