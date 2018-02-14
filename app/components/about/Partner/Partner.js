import React from 'react';
import "./partner.css";
import poly from '../../../images/polymath.png';
import block from '../../../images/blocksale.png';
import mlg from '../../../images/mlg-logo.png';
import denton from '../../../images/dentons.jpg';
import logo from '../../../images/mars_logo.jpg';


class Partner extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <div className="our-partners text-center py-sections">
                    <div className="container-wide">
                        <div className="container-inner-padd mb-0">
                            <h2 className="similar-heading mb-5 mb-lg-0 pb-2">Our Partners</h2>
                        </div>
                        <div className="container-inner-padd mb-0">
                            <div className="our-partners-block">
                                <div className="row align-items-center">
                                    <div className="col col-12 col-sm-6 col-lg-3">
                                        <div className="our-partners-img mx-auto"><img src={poly} alt="" /></div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-lg-3">
                                        <div className="our-partners-img mx-auto"><img src={block} alt="" /></div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-lg-3">
                                        <div className="our-partners-img mx-auto"><img src={mlg} alt="" /></div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-lg-3">
                                        <div className="our-partners-img mx-auto"><img src={denton} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="member-section text-center py-sections">
                    <div className="container-wide">
                        <div className="container-inner-padd mb-0">
                            <h2 className="similar-heading mb-5 mb-lg-0 pb-2">Member Of</h2>
                        </div>
                        <div className="container-inner-padd mb-0">
                            <a href="https://www.marsdd.com/" className="mx-auto d-inline-block member-img" target="_blank"><img src={logo} alt="MaRS" /></a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Partner;