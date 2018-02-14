import React from 'react';
import "./finance.css";
import apply from '../../../images/apply-online.svg';
import due from '../../../images/due-dilligence.svg';
import close from '../../../images/close-deal.svg';

class Finance extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="choose-corl financing-process py-sections text-center bg-grey position-relative section-lines">
                <div className="container-wide">
                    <div className="container-inner-padd financing-process-top">
                        <h2 className="similar-heading">Frictionless financing process</h2>
                        <p className="light-text light-text-padd mb-0 mt-4 mt-lg-0">Getting the funding you need should be simple. Corl’s online platform allows us to go from term sheet to financial close in as little as 2 weeks so you can focus on your business.</p>
                    </div>
                    <div className="container-inner-padd choose-corl-inner">
                        <div className="row">
                            <div className="col col-12 col-lg-4">
                                <div className="choose-corl-block financing-process-block">
                                    <div className="choose-corl-img">
                                        <img src={apply} alt="Initial Application" />
                                    </div>
                                    <div className="choose-corl-detail">
                                        <h4 className="d-inline-block w-100 similar-subHeading">Initial Application</h4>
                                        <p className="light-text mb-0">Fill out our secure and simple online application to give us a quick snapshot of your business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-4">
                                <div className="choose-corl-block financing-process-block">
                                    <div className="choose-corl-img">
                                        <img src={due} alt="Get to Know You" />
                                    </div>
                                    <div className="choose-corl-detail">
                                        <h4 className="d-inline-block w-100 similar-subHeading">Get to Know You</h4>
                                        <p className="light-text mb-0">Our team will have a short phone call with you to learn more about your business and answer any questions you may have.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-4">
                                <div className="choose-corl-block financing-process-block">
                                    <div className="choose-corl-img">
                                        <img src={close} alt="Close the Deal" />
                                    </div>
                                    <div className="choose-corl-detail">
                                        <h4 className="d-inline-block w-100 similar-subHeading">Close the Deal</h4>
                                        <p className="light-text mb-0">If revenue-sharing is a good fit for your business, we'll send you a term sheet and get you the funding you need to start taking your business to the next level.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Finance;