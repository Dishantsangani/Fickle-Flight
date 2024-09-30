import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  // Showing The Error
  const [error, setError] = useState({});

  // Validations
  const Validation = () => {
    let validationError = {};
    // Email Validation
    if (!formdata.email.trim()) {
      validationError.email = "Email Is Required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formdata.email)
    ) {
      validationError.email = "Email Is Not Valid";
    }

    // PassWord Validation
    if (!formdata.password.trim()) {
      validationError.password = "Password Is Required";
    } else if (formdata.password.length < 8) {
      validationError.password = "Password Must Be At Least 4 char";
    }
    setError(validationError);
  };

  // Submit Handling
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for errors
    Validation();
    axios
      .post("https://reqres.in/api/login", {
        email: formdata.email,
        password: formdata.password,
      })
      .then((result) => {
        localStorage.setItem("Login Data", JSON.stringify(result.data));
        localStorage.setItem("login", true);
        navigate("/");
      })
      .catch((error) => {
        console.log("This is a API Error", error);
      });
  };

  // Onchange Handler
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <section className="text-center text-lg-start">
        <div className="container ">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  backdropFilter: "blur(10px)",
                  background: "#2c71b3",
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5" style={{ color: "white" }}>
                    Login Now
                  </h2>
                  <form onSubmit={handleSubmit}>
                    {/* Email input */}
                    <div className="form-outline ">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formdata.email}
                        className="form-control"
                        onChange={handlechange}
                      />
                      <label className="form-label login-title">
                        Email address
                      </label>
                    </div>
                    {error.email && <span className="sp">{error.email}</span>}
                    {/* Password input */}
                    <div data-mdb-input-init="" className="form-outline ">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formdata.password}
                        className="form-control"
                        onChange={handlechange}
                      />
                      <label className="form-label login-title">Password</label>
                    </div>
                    <p>
                      {error.password && (
                        <span className="sp">{error.password}</span>
                      )}
                    </p>
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-block mb-3 submitbutton"
                    >
                      Login
                    </button>
                    {/* Register buttons */}
                    <div className="text-center login-title">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1 login-title"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1 login-title"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1 login-title"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1 login-title"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4 mb-0">
              <img
                src="Flight1.jpg"
                className="w-75 rounded-4 shadow-4 h-75 d-inline-block"
                alt="flight images"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Loginpage;
