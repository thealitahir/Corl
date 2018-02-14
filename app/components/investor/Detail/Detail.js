import React from 'react';
import "./detail.css";
import invester from '../../../images/Investor_mbp.png';
class Detail extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="revenue-sharing-what important-what py-sections">
                <div className="container-wide">
                    <div className="container-inner-padd mb-0">
                        <div className="row">
                            <div className="col col-12 col-lg-6">
                                <h2 className="similar-heading mb-4 pb-3">What's important to you?</h2>
                                <p className="light-text mb-3 px-0">Investing in growing companies is a great way to put your money to work for both compelling returns and measurable impact. But it’s difficult for most investors to participate in this opportunity.</p>
                                <p className="light-text mb-3 px-0">This is where Corl comes in.</p>
                                <p className="light-text mb-5 mb-lg-0 px-0">Our revenue-sharing (a.k.a revenue based financing) investments are backed by a diversified portfolio of loans in emerging companies that are already operational and generating steady revenues – revenues that are used to pay investors like you.</p>
                            </div>
                            <div className="col col-12 col-lg-6">
                                <span className="d-inline-block w-100 pl-md-3"><img src={invester} alt="Corl Investor Portal" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Detail;