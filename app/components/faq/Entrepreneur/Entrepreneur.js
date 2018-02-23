import React from 'react';
import "./entrepreneur.css";
import apply from '../../../images/apply-online.svg';
import due from '../../../images/due-dilligence.svg';
import close from '../../../images/close-deal.svg';

class Entrepreneur extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="faqs-main-block faqs-main-entrepreneurs">
                <h2 className="similar-heading mb-0">Entrepreneurs</h2>
                <div id="accordion">
                    <div className="card card-faqs rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header border-0 bg-transparent p-0" id="headingFive">
                            <h5 className="mb-0 py-2 d-flex align-items-center justify-content-between collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                <button className="btn btn-link w-100 text-left pl-1 pr-3 py-0">
                                    What type of companies does Corl fund?
                    </button>
                                <span className="card-collapse-icons mr-2 pr-1">
                                    <a href=" " className="card-collapse-plus">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                    <a href=" " className="card-collapse-minus">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </h5>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                            <div className="card-body pr-4">
                                <p className="light-text mb-0">Our revenue sharing model is best suited for online, software, technology and knowledge-based companies. Entrepreneurs in these high-growth, high-margin markets will find our model to be an exciting new way to raise growth capital without giving up equity. Companies with hard assets (i.e. collateral) will generally qualify for traditional loans that are better suited for their needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-faqs rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header border-0 bg-transparent p-0" id="headingSix">
                            <h5 className="mb-0 py-2 d-flex align-items-center justify-content-between collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <button className="btn btn-link w-100 text-left pl-1 pr-3 py-0">
                                    What do I owe in return?
                    </button>
                                <span className="card-collapse-icons mr-2 pr-1">
                                    <a href=" " className="card-collapse-plus">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                    <a href=" " className="card-collapse-minus">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </h5>
                        </div>
                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                            <div className="card-body">
                                <p className="light-text mb-0">We will look for a percentage of revenue (in the range of 2% to 10%) until the total repayment cap is reached. Generally, this is calculated and debited monthly via pre-authorized payments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-faqs rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header border-0 bg-transparent p-0" id="headingSeven">
                            <h5 className="mb-0 py-2 d-flex align-items-center justify-content-between collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <button className="btn btn-link w-100 text-left pl-1 pr-3 py-0">
                                    Can pre-revenue companies apply for Revenue Sharing?
                    </button>
                                <span className="card-collapse-icons mr-2 pr-1">
                                    <a href=" " className="card-collapse-plus">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                    <a href=" " className="card-collapse-minus">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </h5>
                        </div>
                        <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                            <div className="card-body">
                                <p className="light-text">Our revenue sharing or revenue-based financing model is best suited for companies that have been generating a consistent revenue in the past 6-12 months.</p>
                                <p className="light-text mb-0">If you’re a pre-revenue company, you can still <a href="" onClick={() => this.props.setModelFlag(true)}>request early access</a> so that we can keep you on our radar. You can also <a href="https://blog.corl.io/">sign up for our newsletter</a> to receive occasional emails containing company resources, news, and tips on how to grow your business. We encourage you to keep us in mind when you get further with your revenue model.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-faqs rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header border-0 bg-transparent p-0" id="headingEight">
                            <h5 className="mb-0 py-2 d-flex align-items-center justify-content-between collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                <button className="btn btn-link w-100 text-left pl-1 pr-3 py-0">
                                    How much funding can I get from Corl?
                    </button>
                                <span className="card-collapse-icons mr-2 pr-1">
                                    <a href=" " className="card-collapse-plus">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                    <a href=" " className="card-collapse-minus">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </h5>
                        </div>
                        <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                            <div className="card-body">
                                <p className="light-text mb-0">We’re currently offering Revenue Sharing investments ranging from $50K-$500K CAD. You can qualify for a loan for up to 4X your Monthly Recurring Revenue. So if you are on track for $50K in sales this year, we can invest about $200K.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-faqs rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header border-0 bg-transparent p-0" id="headingNine">
                            <h5 className="mb-0 py-2 d-flex align-items-center justify-content-between collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                <button className="btn btn-link w-100 text-left pl-1 pr-3 py-0">
                                    Is Corl available to businesses outside of Canada?
                    </button>
                                <span className="card-collapse-icons mr-2 pr-1">
                                    <a href=" " className="card-collapse-plus">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                    <a href=" " className="card-collapse-minus">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </h5>
                        </div>
                        <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                            <div className="card-body">
                                <p className="light-text mb-0">We’re launching in Canada for now, with plans to expand to other countries shortly after. That doesn’t mean we don’t want to be helpful to you. Please send us a message to <a href="mailto:hello@corl.io">hello@corl.io</a>, and we will try to help you in the meantime. To stay in the loop on Corl and find out when we’re expanding internationally, <a href="https://blog.corl.io/">sign up for our newsletter</a>.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-faqs rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header border-0 bg-transparent p-0" id="headingTen">
                            <h5 className="mb-0 py-2 d-flex align-items-center justify-content-between collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                <button className="btn btn-link w-100 text-left pl-1 pr-3 py-0">
                                    If it’s a Revenue Sharing, then what’s the interest rate?
                    </button>
                                <span className="card-collapse-icons mr-2 pr-1">
                                    <a href=" " className="card-collapse-plus">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                    <a href=" " className="card-collapse-minus">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </h5>
                        </div>
                        <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordion">
                            <div className="card-body">
                                <p className="light-text mb-0">Unlike a traditional loan, the revenue-sharing model doesn’t have a fixed monthly payment amount. Instead, the payment due floats with your monthly revenue, such as 5% of topline revenue. So, if you beat your goals and grow faster, your “rate” goes up, but if you miss your plan, your “rate” goes down.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-faqs rounded-0 border-top-0 border-left-0 border-right-0">
                        <div className="card-header border-0 bg-transparent p-0" id="headingEleven">
                            <h5 className="mb-0 py-2 d-flex align-items-center justify-content-between collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                <button className="btn btn-link w-100 text-left pl-1 pr-3 py-0">
                                    Isn’t the cost of your capital high?
                    </button>
                                <span className="card-collapse-icons mr-2 pr-1">
                                    <a href=" " className="card-collapse-plus">
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                    </a>
                                    <a href=" " className="card-collapse-minus">
                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                    </a>
                                </span>
                            </h5>
                        </div>
                        <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#accordion">
                            <div className="card-body">
                                <p className="light-text mb-0">Yes. Corl is taking a lot of risks, we think a high return is fair. If you think about it, it’s not so high considering the stage of businesses we target. While the rate might be high, a business with solid gross margins and proper growth plan can afford our revenue-sharing percentage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Entrepreneur;