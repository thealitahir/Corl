import React from 'react';
import "./banner.css";

class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="revenue-sharing py-sections about-sections">
                <div className="container-wide mx-auto">
                    <div className="row">
                        <div className="col col-12 col-lg-6">
                            <div className="revenue-sharing-content">
                                <h1>Meet Corl</h1>
                                <p>We are combining two of the most recent disruptions in the online world: crowdfunding and blockchain. As a result, we are inventing a whole new way to make financing and investing in companies more intuitive.</p>
                                <a onClick={() => this.props.setModelFlag(true)} className="btn btn-early-access d-inline-block">Request Early Access</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;