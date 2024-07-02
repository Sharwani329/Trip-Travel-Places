// RegisterPage.js
import React, { useState } from 'react';
import '../../src/App.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formData;

       

        try {
            const response = await fetch('http://192.168.0.140:8000/api/adminRegister', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Reset form and error state on successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
            });
            setError(null);

            console.log('Registration successful');
            // Optionally, you can redirect to a success page or handle success in UI
        } catch (error) {
            console.error('Error registering user:', error);
            setError('Registration failed. Please try again.'); // Display error to user
        }
    };

    return (
        <div className='container'>
            <div className='row align-items-center vh-100'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6'>
                    <div className="login-container">
                        <h2 className='text-center mb-4'>Register</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form className="login-form" onSubmit={handleSubmit}>
                            <h5 className='mb-4'>Create A New Account</h5>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="name" className='w-100' required value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" className='w-100' required value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" className='w-100' required value={formData.password} onChange={handleChange} />
                            </div>
                           
                            <div className='form-group'>
                                <input type='checkbox' className='me-2' />
                                <span>I Accept <strong>Terms & Conditions</strong></span>
                            </div>
                            <button type="submit" className="btn-login my-2">Create An Account</button>
                        </form>
                        <p className='text-center my-2'>Already have an account? <Link to="/">Login</Link></p>
                    </div>
                </div>
                <div className='col-lg-3'></div>
            </div>
        </div>
    );
};

export default RegisterPage;
