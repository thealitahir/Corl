import React from 'react';
import "./general.css";
import business from '../../../images/Business_mbp.png';
class General extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="faqs-main-block faqs-main-general">
                <h2 className="similar-heading mb-0">General</h2>
                <div id="accordion">
                    <div className="card card-faqs rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header border-0 bg-transparent p-0" id="headingOne">
                            <h5 className="mb-0 py-2 d-flex align-items-center justify-content-between collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <button className="btn btn-link w-100 text-left pl-1 pr-3 py-0">
                                    How does Revenue Sharing work?
                    </button>
                                <span className="card-collapse-icons mr-2 pr-1">
                                    <a href="" className="card-collapse-plus">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                    <a href="" className="card-collapse-minus">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body pr-4">
                                <p className="light-text">We created Corl to reshape the process of raising capital for early growth businesses through flexible and entrepreneur-friendly financing terms. With no dilution, no loss of control, and no fixed repayment schedule, entrepreneurs can stay focused on growing their businesses. Revenue Sharing works like a royalty. Your monthly loan payment is based on a percentage of your monthly top-line revenue. If your revenues drop, so do your payments.</p>
                                <p className="light-text mb-0">Our Revenue Sharing matures when a predefined total repayment cap is reached, and we target a 5-year payback term, depending on your unique situation. If your revenues grow faster than planned, you pay back the loan a little faster; if they are slower, then your payback is slower. Corl’s financing solution aligns our investors with your sales growth goals. We’re here to help you grow – on your terms. <a href="" onClick={() => this.props.setModelFlag(true)}>Request Early Access.</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-faqs rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header border-0 bg-transparent p-0" id="headingTwo">
                            <h5 className="mb-0 py-2 d-flex align-items-center justify-content-between collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <button className="btn btn-link w-100 text-left pl-1 pr-3 py-0">
                                    What is Capital-as-a-Service (CaaS)?
                    </button>
                                <span className="card-collapse-icons mr-2 pr-1">
                                    <a className="card-collapse-plus">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                    <a className="card-collapse-minus">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <p className="light-text mb-0">In the way that the software industry evolved to a more user friendly Software-as-a-Service model, for small business customers, we think it’s time for company financing & investing to do the same. What we call – Capital-as-a-Service. At Corl we believe that the following three principles are critical to creating a Capital-as-a-Service industry:</p>
                                <ol className="decimal-list pl-3 mb-2 pb-1">
                                    <li>Financing for long-term business growth</li>
                                    <li>Use technology to improve, not shortcut credit analysis</li>
                                    <li>Be entrepreneur-centric</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="card card-faqs rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header border-0 bg-transparent p-0" id="headingThree">
                            <h5 className="mb-0 py-2 d-flex align-items-center justify-content-between collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <button className="btn btn-link w-100 text-left pl-1 pr-3 py-0">
                                    When will Corl launch to the public?
                    </button>
                                <span className="card-collapse-icons mr-2 pr-1">
                                    <a href="" className="card-collapse-plus">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                    <a href="" className="card-collapse-minus">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <p className="light-text mb-0">Our team is working hard, but we’ll let you know as soon as we’re ready. Before we launch we’ll be opening up an early Beta version to a small group of our applicants, so hurry and reserve your spot by <a  href="" onClick={() => this.props.setModelFlag(true)}>requesting early access</a>!</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-faqs rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header border-0 bg-transparent p-0" id="headingFour">
                            <h5 className="mb-0 py-2 d-flex align-items-center justify-content-between collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <button className="btn btn-link w-100 text-left pl-1 pr-3 py-0">
                                    I have other questions, how do I reach you?
                    </button>
                                <span className="card-collapse-icons mr-2 pr-1">
                                    <a href="" className="card-collapse-plus">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                    <a href="" className="card-collapse-minus">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </h5>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <div className="card-body">
                                <p className="light-text mb-0">Check out our <a href="/contact/">contact page</a>. We’ll usually respond within 48 hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default General;