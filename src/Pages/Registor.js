import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Registor() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassord, setConfirmPassword] = useState("");

  // Error
  const [nameerror, setNameerror] = useState(false);
  const [emailerror, setEmailerror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);
  const [confirmpassorderror, setConfirmPassworderror] = useState(false);

  // First Name Handler
  function namehandler(e) {
    let item = e.target.value;
    if (item.length < 6) {
      setNameerror(true);
    } else {
      setNameerror(false);
    }
    setName(item);
  }
  // Email Handler
  function emailhandler(val) {
    if (val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailerror(false);
    } else {
      setEmailerror(true);
    }
    setEmail(val);
  }
  // Password Handler
  function passwordhandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setPassworderror(true);
    } else {
      setPassworderror(false);
    }
    setPassword(item);
  }
  // Confimpassword Handler
  function confirmpasswordhandler(e) {
    let item = e.target.value;
    if (item != password) {
      setConfirmPassworderror(true);
    } else {
      setConfirmPassworderror(false);
    }
    setConfirmPassword(item);
  }

  // Registor Form
  function Handleregistor(e) {
    e.preventDefault();
    if (name.length < 5 || password != confirmpassord) {
      navigate("/");
    } else {
      navigate("/*");
    }
    axios
      .post("https://reqres.in/api/register", {
        email: email,
        password: password,
      })
      .then((result) => {
        localStorage.setItem("Registor Data", JSON.stringify(result.data));
        navigate("/");
      })
      .catch((error) => {
        navigate("/*");
        console.log(error);
      });
  }
  return (
    <>
      <Navbar />
      <div className="container mt-1" style={{ backgroundColor: "#2c71b3" }}>
        {/* <section className="vh-75"> */}
          <div className="container ">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-12 col-xl-10">
                <div className="card text-black" style={{ borderRadius: 25 }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p
                          className="text-center h1 fw-bold mb-5 mx-1  "
                          style={{ color: "#299bd8" }}
                        >
                          Registor Form
                        </p>
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                onChange={(e) => namehandler(e)}
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                Your Name
                              </label>
                            </div>
                          </div>
                          {nameerror ? (
                            <span className="sp">First Name is Not Valid</span>
                          ) : (
                            ""
                          )}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                onChange={(e) => emailhandler(e.target.value)}
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example3c"
                              >
                                Your Email
                              </label>
                            </div>
                          </div>
                          {emailerror ? (
                            <span className="sp">Email Is Not To Valid</span>
                          ) : (
                            ""
                          )}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                                onChange={(e) => passwordhandler(e)}
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Password
                              </label>
                            </div>
                          </div>
                          {passworderror ? (
                            <span className="sp">
                              Password Must Be A 4 Char
                            </span>
                          ) : (
                            ""
                          )}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init=""
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                                onChange={(e) => confirmpasswordhandler(e)}
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                Confirm password
                              </label>
                            </div>
                          </div>
                          {confirmpassorderror ? (
                            <span className="sp">Password is Not Same</span>
                          ) : (
                            ""
                          )}
                          <div className="form-check d-flex justify-content-center mb-2">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              defaultValue=""
                              id="form2Example3c"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3"
                            >
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-lg-4">
                            <button
                              type="button"
                              data-mdb-button-init=""
                              data-mdb-ripple-init=""
                              className="btn btn-primary btn-lg"
                              onClick={Handleregistor}
                              style={{ background: "#1262af" }}
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </section> */}
      </div>
    </>
  );
}

export default Registor;
