import React from 'react';
import "./work.css";
import apply from '../../../images/apply-online.svg';
import long from '../../../images/long-term-growth.svg';
import monitor from '../../../images/monitor.svg';


class Work extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="choose-corl investor-how-works py-sections text-center bg-grey position-relative section-lines">
                <div className="container-wide">
                    <div className="container-inner-padd why-corl-top">
                        <h2 className="similar-heading mb-4 pb-3">How it works?</h2>
                        <p className="light-text light-text-padd mb-0">Diamonds, deeds, derivatives…the world’s assets are migrating to the blockchain. The Corl token (CRL) is aiming to be the world’s first regulatory-compliant securities token designed to facilitate revenue-sharing secured by this rapidly expanding className of assets.</p>
                    </div>
                    <div className="container-inner-padd choose-corl-inner">
                        <div className="row">
                            <div className="col col-12 col-lg-4">
                                <div className="choose-corl-block why-corl-block">
                                    <div className="choose-corl-img">
                                        <img src={apply} alt="Investor Application" />
                                    </div>
                                    <div className="choose-corl-detail">
                                        <h4 className="d-inline-block w-100 similar-subHeading">Investor Application</h4>
                                        <p className="light-text mb-0">To comply with securities laws, we ask some basic information about your financial circumstances before participating in the token sale.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-4">
                                <div className="choose-corl-block why-corl-block">
                                    <div className="choose-corl-img">
                                        <img src={long} alt="Invest" />
                                    </div>
                                    <div className="choose-corl-detail">
                                        <h4 className="d-inline-block w-100 similar-subHeading">Invest</h4>
                                        <p className="light-text mb-0">Approved applicants subscribe to the token sale by purchasing tokens using Ether. We’ll process your subscription online using our secure payment platform.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-4">
                                <div className="choose-corl-block why-corl-block">
                                    <div className="choose-corl-img">
                                        <img src={monitor} alt="Monitor" />
                                    </div>
                                    <div className="choose-corl-detail">
                                        <h4 className="d-inline-block w-100 similar-subHeading">Monitor</h4>
                                        <p className="light-text mb-0">Receive quarterly payments in Ether or trade it on our KYC-compliant decentralized market for peer-to-peer (P2P) token transfer.</p>
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

export default Work;