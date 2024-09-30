import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Updates() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
  });

  // Showing Error
  const [error, setError] = useState({});

  const validationform = () => {
    let validationError = {};

    // Name Validation
    if (!formdata.name.trim()) {
      validationError.name = "Username is required";
    } else if (formdata.name.length < 4) {
      validationError.name = "UserName Must Be 4 Char";
    }
    if (!formdata.email.trim()) {
      // Email Validation
      validationError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      validationError.email = "Email is not valid";
    }

    setError(validationError);
    return Object.keys(validationError).length === 0;
  };

  // Submit
  function handlesubmit(e) {
    e.preventDefault();
    const isValid = validationform();
    if (isValid) {
      navigate("/");
      alert("Submitted Successfully");
      // Store data in localStorage
      localStorage.setItem("Name", formdata.name);
      localStorage.setItem("Email", formdata.email);
      // Clear form fields
      setFormdata({
        name: "",
        email: "",
      });
    }
  }

  // Name & Email Handler
  function handlechange(e) {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h5 className="Subscribe">SUBSCRIBE TO OUR NEWSLETTER</h5>
        <h2 className="updates">Get weekly updates</h2>
        <p className="lead text-muted">
          Fill in your details to join the party!
        </p>
      </div>
      {/* Forms */}
      <form onSubmit={handlesubmit}>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="bg-white rounded p-4 shadow">
              <div className="mb-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formdata.name}
                  onChange={handlechange}
                />
                {error.name && (
                  <span style={{ color: "red" }}>{error.name}</span>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formdata.email}
                  onChange={handlechange}
                />
                {error.email && (
                  <span style={{ color: "red" }}>{error.email}</span>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block w-25"
                style={{ background: "#f99a0e" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Updates;
