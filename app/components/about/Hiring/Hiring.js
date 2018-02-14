import React from 'react';
import "./hiring.css";


class Hiring extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="part-team py-sections text-center">
                <div className="container-wide">
                    <div className="container-inner-padd mb-0">
                        <h2 className="similar-heading mb-0 pb-2 text-green">Want to be part of the team? We’re hiring!</h2>
                        <p className="light-text mb-4">Are you passionate about finance and blockchain? Visit our careers page to see how you can help us bring revenue sharing to the blockchain.</p>
                        <a href="https://corl.breezy.hr/" target="_blank" className="btn btn-early-access d-inline-block mb-1 mt-2">Open Positions</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Hiring;