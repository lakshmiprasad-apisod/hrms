import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import ApisodLogo from "./../assets/images/logo.png";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmailError, setUserEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isDisableBtn, setIsDisableBtn] = useState(false);
  let navigate = useNavigate();

  const isLogin = localStorage.getItem("isLogin");

  const handelUser = (e) => {
    setUserEmailError(false);
    setUserEmail(e.target.value);
  };

  const handelPassword = (e) => {
    setPasswordError(false);
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const hanldeLoginDetails = () => {
    if (handleValidation()) {
      setIsDisableBtn(true);
      return navigate("/dashboard");
    }
  };

  const handleValidation = () => {
    let isFormValid = true;
    if (!userEmail) {
      isFormValid = false;
      setUserEmailError(true);
    }
    if (!validateEmail(userEmail)) {
      isFormValid = false;
      setUserEmailError(true);
    }
    if (!password) {
      isFormValid = false;
      setPasswordError(true);
    }
    return isFormValid;
  };

  return (
    <>
      <div className="adminLogin">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="authentic-wrapper">
                <div className="authentic-inner">
                  <div className="card">
                    <div className="card-body">
                      <div className="appbrandnig">
                        <img src={ApisodLogo} alt="Logo" />
                      </div>
                      <h4 className="welcomeHeading">
                        Welcome to Apisod HRMS! 👋
                      </h4>

                      <div className="login-fields">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Enter Email</label>
                          <input
                            type="text"
                            className={
                              userEmailError
                                ? "form-control errorlogin"
                                : "form-control"
                            }
                            value={userEmail}
                            onChange={handelUser}
                          />
                        </div>
                        <div className="form-group form-password-toggle">
                          <label for="password">Enter Password</label>
                          <input
                            type="password"
                            className={
                              passwordError
                                ? "form-control errorlogin"
                                : "form-control"
                            }
                            value={password}
                            onChange={handelPassword}
                          />
                        </div>
                        <div
                          className="form-group form-check"
                          style={{ paddingLeft: "0rem" }}
                        >
                          <label
                            className="form-check-label"
                            style={{ float: "left" }}
                          >
                            <Link to="/register">Don't have account?</Link>
                          </label>
                          <label
                            className="form-check-label"
                            style={{ float: "right" }}
                          >
                            <Link to="/admin/reset-password">
                              Forgot Password?
                            </Link>
                          </label>
                        </div>
                        <div className="form-group loginBtns">
                          <button
                            className="btn btn-adminLogin"
                            onClick={hanldeLoginDetails}
                            disabled={isDisableBtn}
                          >
                            {isDisableBtn ? (
                              <>
                                {/* <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />{" "} */}
                                Please Wait...
                              </>
                            ) : (
                              "Login"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
