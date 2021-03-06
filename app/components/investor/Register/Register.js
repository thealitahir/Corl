import React from 'react';
import "./register.css";


class Register extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="register-presale py-sections text-center">
                <div className="container-wide">
                    <div className="container-inner-padd mb-0">
                        <h2 className="similar-heading mb-4 pb-3">Reserve your spot today</h2>
                        <a onClick={() => { this.props.openInvestorModel(true) }} className="btn btn-early-access d-inline-block mb-3">Get Early Access</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Register;