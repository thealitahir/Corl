import React from 'react';
import "./corl.css";
import pay from '../../../images/pay-as-you-grow.svg';
import friend from '../../../images/entrepreneur-friendly.svg';
import diversify from '../../../images/diversify.svg';


class Corl extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <div className="choose-corl why-corl py-sections text-center bg-grey position-relative section-lines">
                    <div className="container-wide">
                        <div className="container-inner-padd why-corl-top">
                            <h2 className="similar-heading mb-0">Why Corl?</h2>
                        </div>
                        <div className="container-inner-padd choose-corl-inner">
                            <div className="row">
                                <div className="col col-12 col-lg-4">
                                    <div className="choose-corl-block why-corl-block">
                                        <div className="choose-corl-img">
                                            <img src={pay} alt="Competitive Returns" />
                                        </div>
                                        <div className="choose-corl-detail">
                                            <h4 className="d-inline-block w-100 similar-subHeading">Competitive Returns</h4>
                                            <p className="light-text mb-0">Earn 15-30% annually by investing in markets under-served by mainstream finance and earn steady income with quarterly payments.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-4">
                                    <div className="choose-corl-block why-corl-block">
                                        <div className="choose-corl-img">
                                            <img src={diversify} alt="Diversification" />
                                        </div>
                                        <div className="choose-corl-detail">
                                            <h4 className="d-inline-block w-100 similar-subHeading">Diversification</h4>
                                            <p className="light-text mb-0">Private, fixed rate investments through blockchain offset your exposure to market volatility and improve diversification in your portfolio.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-4">
                                    <div className="choose-corl-block why-corl-block">
                                        <div className="choose-corl-img">
                                            <img src={friend} alt="Support Canadian Tech" />
                                        </div>
                                        <div className="choose-corl-detail">
                                            <h4 className="d-inline-block w-100 similar-subHeading">Support Emerging Companies</h4>
                                            <p className="light-text mb-0">Investing in these businesses not only provides the opportunity to earn an attractive return, it also helps them grow, which in turn, benefits the ecosystem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="revenue-sharing-what investing-what py-sections">
                    <div className="container-wide">
                        <div className="container-inner-padd mb-0">
                            <h2 className="similar-heading mb-0 pb-3">What you will be investing in?</h2>
                        </div>
                        <div className="container-inner-padd mb-0">
                            <div className="row">
                                <div className="col col-12 col-lg-6">
                                    <div className="px-lg-2">
                                        <p className="light-text mb-3 px-0">Focusing on companies with promising growth rates, Corl is building a compelling portfolio that generates a steady stream of quarterly income for investors. Simply put, Corl’s metric-driven revenue-sharing system is the ultimate opportunity for investors to align with innovative entrepreneurs.</p>
                                        <p className="light-text mb-3 px-0">Banks & traditional lenders haven’t adjusted to the opportunity presented by asset-light companies leaving a financing gap that is growing on monthly basis.</p>
                                        <p className="light-text mb-5 mb-lg-0 px-0">That's where we focus. We provide growing companies with entrepreneur friendly financing while generating strong returns.</p>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-6">
                                    <div className="px-lg-2">
                                        <p className="light-text mb-3 px-0">We do the heavy lifting so you can feel confident that your money is being invested for profit and in boosting the tech ecosystem.</p>
                                        <p className="light-text mb-3 px-0">Our team of experts performs rigorous due diligence before funding any business.</p>
                                        <p className="light-text mb-0 px-0">We finance projects with:</p>
                                        <ul className="disc-list pl-3 pb-3">
                                            <li className="light-text">Predictable profitable customer acquisition</li>
                                            <li className="light-text">Experienced management team</li>
                                            <li className="light-text">Recognized revenues (invoiced and billing)</li>
                                            <li className="light-text">Growing recurring revenues</li>
                                            <li className="light-text">Scaling sales model that generates healthy gross margins</li>
                                        </ul>
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

export default Corl;