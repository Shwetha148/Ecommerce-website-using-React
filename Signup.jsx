import React, { useState } from 'react';
import './Signup.css';
import { Link, Navigate } from 'react-router-dom';

const Signup = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    dob: '',
    number: '',
    gender: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (name === 'email') {
      if (!value.includes('@')) {
        setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
      } else {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    }

    if ((name === 'password' || name === 'confirmPassword') && formData.confirmPassword !== '') {
      if (name === 'password' && value !== formData.confirmPassword) {
        setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
      } else if (name === 'confirmPassword' && formData.password !== value) {
        setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: '' }));
      }
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    setErrors((prev) => ({
      ...prev,
      confirmPassword: 'Passwords do not match'
    }));
    return;
  }

  localStorage.setItem('user', JSON.stringify(formData));
  alert('Signed up successfully!');
  Navigate('/login');
};


  return (
    
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup Form</h2>

        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" name="dob" id="dob" value={formData.dob} onChange={handleChange} required />

        <label htmlFor="number">Phone Number:</label>
        <input type="tel" name="number" id="number" value={formData.number} onChange={handleChange} required />

        <label>Gender:</label>
        <div className="gender-options">
          <label>
            <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
            Female
          </label>
        </div>

        <button type="submit">Submit</button>
        <p>
  Already have an account? <Link to="/login">Login here</Link>
</p>

      </form>

      
    </div>
  );
};

export default Signup;
