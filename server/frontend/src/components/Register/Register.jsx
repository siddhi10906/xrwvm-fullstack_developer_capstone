
import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Connect this form to the project's registration API.
    console.log("Registration form submitted");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input id="username" name="username" className="form-control"
            value={formData.username} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input id="firstName" name="firstName" className="form-control"
            value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input id="lastName" name="lastName" className="form-control"
            value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" name="email" type="email"
            className="form-control" value={formData.email}
            onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input id="password" name="password" type="password"
            className="form-control" value={formData.password}
            onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}
