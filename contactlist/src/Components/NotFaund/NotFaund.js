import React from "react";
import { Link } from "react-router-dom";
import "./NotFaund.css";

const NotFaund = () => {
    return (
        <div class="error-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 ">
                        <div class="error-text">
                            <h1 class="error">404 Error</h1>
                            <div class="im-sheep">
                                <div class="top">
                                    <div class="body"></div>
                                    <div class="head">
                                        <div class="im-eye one"></div>
                                        <div class="im-eye two"></div>
                                        <div class="im-ear one"></div>
                                        <div class="im-ear two"></div>
                                    </div>
                                </div>
                                <div class="im-legs">
                                    <div class="im-leg"></div>
                                    <div class="im-leg"></div>
                                    <div class="im-leg"></div>
                                    <div class="im-leg"></div>
                                </div>
                            </div>
                            <h4>Oops! This page Could Not Be Found!</h4>
                            <p>Sorry bit the page you are looking for does not exist, have been removed or name changed.</p>
                            <Link to="/" class="btn btn-primary btn-round">Go to homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NotFaund;