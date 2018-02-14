import React from 'react';
import "./banner.css";

class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="revenue-sharing py-sections companies-sections">
                <div className="container-wide mx-auto">
                    <div className="row">
                        <div className="col col-12 col-lg-6">
                            <div className="revenue-sharing-content">
                                <h1>A simple way to fund your business needs</h1>
                                <p>Our revenue-sharing helps entrepreneurs accelerate their growth without giving up equity, board seats, or personal guarantees.</p>
                                <a href="#" className="btn btn-early-access d-inline-block">Get Early Access</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Banner;