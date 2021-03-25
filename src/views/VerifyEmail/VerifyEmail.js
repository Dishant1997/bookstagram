import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';

const VerifyEmail = props => {
    const [emailValue, setEmailValue] = useState();

    useEffect(() => {
        console.log("Props", props);
        if (props.location.state) {
            setEmailValue(props.location.state.email);
            console.log('Email', emailValue);
        } else {
            props.history.push('/login');
        }
    });
    return (
        <div id="main-wrapper">
            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-4">
                                <a href="./intro.html"><img src="./images/logo.png" alt="" /></a>
                                <h4 className="card-title mt-3">Verify your Email</h4>
                            </div>
                            <div className="auth-form card">
                                <div className="card-body">
                                    <form action="verify-step-2.html" className="identity-upload">
                                        <div className="identity-content">
                                            <span className="icon"><i className="icofont-email"></i></span>
                                            <p>We sent verification email to <strong
                                                className="text-dark">{emailValue}</strong>. Click the link inside to
                                            get started!</p>
                                            <Link
                                                to="/"
                                            >
                                                Login
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-center">
                                    <Link
                                        to="signup"
                                    >
                                        Email didn't arrive?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(VerifyEmail);
