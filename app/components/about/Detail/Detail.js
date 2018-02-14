import React from 'react';
import "./detail.css";
import invester from '../../../images/Investor_mbp.png';
class Detail extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <div className="access-growth py-sections text-center">
                    <div className="container-wide">
                        <div className="container-inner-padd mb-0">
                            <h2 className="similar-heading mb-4 pb-3 light-text-padd text-green">Reshaping the way companies access growth capital.</h2>
                            <p className="light-text mb-5 light-text-padd">Founded in 2016 by a team of financial technology nerds, Corl is making it easy for companies to access fast, fairly priced, and entrepreneur friendly growth capital while providing investors with greater peace of mind. Hassle free and without giving up equity. By merging a previously under-utilized and innovative investment structure with the strength of blockchain, we’re proud to provide founder friendly growth capital to help entrepreneurs and investors reach their strategic and financial objectives.</p>
                        </div>
                    </div>
                </div>
                <div className="what-about py-sections bg-grey position-relative section-lines">
                    <div className="container-wide">
                        <div className="container-inner-padd why-corl-top">
                            <h2 className="similar-heading mb-0 light-text-padd">What we're about</h2>
                            <p className="light-text mb-3 light-text-padd">Our philosophy is simple, entrepreneurs should have access to the capital they need to successfully grow their businesses at their own pace.</p>
                            <p className="light-text mb-3 light-text-padd">We like to consider ourselves as your long-term partner. We establish a relationships with your business. That’s why we call it Capital-as-a-Service; making capital available to companies as and when they need it.</p>
                            <p className="light-text mb-0 light-text-padd">At Corl we know that when the interests of entrepreneurs and investors are aligned, that’s when true growth begins.</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Detail;