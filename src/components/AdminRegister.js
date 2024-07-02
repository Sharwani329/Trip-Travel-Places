// src/components/AdminRegister.js
import React, { useState } from 'react';

const AdminRegister = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const { username, password, email } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Register Form Data:', formData);
        // Here you would typically send a POST request to your API
    };

    return (
        <div className="register-container">
            <h2>Admin Register</h2>
            <form
            //  onSubmit={onSubmit}
             >
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        // onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        // onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        // onChange={onChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default AdminRegister;
