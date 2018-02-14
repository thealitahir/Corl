import React from 'react';
import "./team.css";
import sam from '../../../images/Sam-B&W-400x400.jpg';
import derek from '../../../images/Derek-B&W-400x400.jpg';
import bill from '../../../images/Bill-B&W-400.jpg';
import liam from '../../../images/Liam.png';
import grg from '../../../images/George.jpg';
import safwan from '../../../images/Safwan.jpg';
import sandy from '../../../images/Sandy.jpg';
import darren from '../../../images/darren.jpg';
import matt from '../../../images/Matt.jpg';
import maco from '../../../images/Mayco.jpg';
import ben from '../../../images/Ben.jpg';



class Team extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <div className="team-section py-sections text-center">
                    <div className="container-wide">
                        <div className="container-inner-padd mb-0">
                            <h2 className="similar-heading mb-5 mb-lg-0 pb-2">The Team</h2>
                        </div>
                        <div className="container-inner-padd mb-0">
                            <div className="row">
                                <div className="col col-12 col-lg-4">
                                    <div className="team-block d-flex flex-column flex-md-row flex-lg-column">
                                        <div className="team-block-img">
                                            <span className="mx-auto d-inline-block"><img src={sam} alt="Sam Kawtharani" /></span>
                                        </div>
                                        <div className="team-block-detail pl-md-5 pl-lg-0">
                                            <h4 className="d-inline-block w-100 similar-subHeading mt-0">Sam Kawtharani</h4>
                                            <p className="light-text mb-2 px-0">Co-Founder, CEO</p>
                                            <div className="d-flex justify-content-center team-social-account">
                                                <a href="https://www.linkedin.com/in/hkawtharani/" className="mx-2"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-4">
                                    <div className="team-block d-flex flex-column flex-md-row flex-lg-column">
                                        <div className="team-block-img">
                                            <span className="mx-auto d-inline-block"><img src={derek} alt="Derek Manuge" /></span>
                                        </div>
                                        <div className="team-block-detail pl-md-5 pl-lg-0">
                                            <h4 className="d-inline-block w-100 similar-subHeading mt-0">Derek Manuge</h4>
                                            <p className="light-text mb-2 px-0">Co-Founder, CIO</p>
                                            <div className="d-flex justify-content-center team-social-account">
                                                <a href="https://www.linkedin.com/in/derekmanuge/" className="mx-2"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-4">
                                    <div className="team-block d-flex flex-column flex-md-row flex-lg-column">
                                        <div className="team-block-img">
                                            <span className="mx-auto d-inline-block"><img src={bill} alt="Bill Tharp" /></span>
                                        </div>
                                        <div className="team-block-detail pl-md-5 pl-lg-0">
                                            <h4 className="d-inline-block w-100 similar-subHeading mt-0">Bill Tharp</h4>
                                            <p className="light-text mb-2 px-0">Chief Revenue Officer</p>
                                            <div className="d-flex justify-content-center team-social-account">
                                                <a href="https://www.linkedin.com/in/wrtharp/" className="mx-2"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-inner-padd mb-0">
                            <div className="row">
                                <div className="col col-12 col-lg-4">
                                    <div className="team-block d-flex flex-column flex-md-row flex-lg-column">
                                        <div className="team-block-img">
                                            <span className="mx-auto d-inline-block"><img src={liam} alt="Lian Liam" /></span>
                                        </div>
                                        <div className="team-block-detail pl-md-5 pl-lg-0">
                                            <h4 className="d-inline-block w-100 similar-subHeading mt-0">Lian Liam</h4>
                                            <p className="light-text mb-2 px-0">Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-4">
                                    <div className="team-block d-flex flex-column flex-md-row flex-lg-column">
                                        <div className="team-block-img">
                                            <span className="mx-auto d-inline-block"><img src={grg} alt="George Yammine" /></span>
                                        </div>
                                        <div className="team-block-detail pl-md-5 pl-lg-0">
                                            <h4 className="d-inline-block w-100 similar-subHeading mt-0">George Yammine</h4>
                                            <p className="light-text mb-2 px-0">Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-section our-advisors py-sections text-center">
                    <div className="container-wide">
                        <div className="container-inner-padd mb-0">
                            <h2 className="similar-heading mb-5 mb-lg-0 pb-2">Our Advisors</h2>
                        </div>
                        <div className="container-inner-padd mb-0">
                            <div className="row">
                                <div className="col col-12 col-sm-6 col-lg-3">
                                    <div className="team-block">
                                        <div className="team-block-img">
                                            <span className="mx-auto d-inline-block"><img src={safwan} alt="Safwan Zaheer" /></span>
                                        </div>
                                        <div className="team-block-detail">
                                            <h4 className="d-inline-block w-100 similar-subHeading mt-0">Safwan Zaheer</h4>
                                            <p className="light-text mb-2 px-0">FinTech</p>
                                            <div className="d-flex justify-content-center team-social-account">
                                                <a href="https://www.linkedin.com/in/safwanzaheer/" className="mx-2"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-sm-6 col-lg-3">
                                    <div className="team-block">
                                        <div className="team-block-img">
                                            <span className="mx-auto d-inline-block"><img src={sandy} alt="Sandy Hershaw" /></span>
                                        </div>
                                        <div className="team-block-detail">
                                            <h4 className="d-inline-block w-100 similar-subHeading mt-0">Sandy Hershaw</h4>
                                            <p className="light-text mb-2 px-0">Venture Capital</p>
                                            <div className="d-flex justify-content-center team-social-account">
                                                <a href="https://www.linkedin.com/in/james-sandy-hershaw-03a7b225/" className="mx-2"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-sm-6 col-lg-3">
                                    <div className="team-block">
                                        <div className="team-block-img">
                                            <span className="mx-auto d-inline-block"><img src={darren} alt="Darren Franceshini" /></span>
                                        </div>
                                        <div className="team-block-detail">
                                            <h4 className="d-inline-block w-100 similar-subHeading mt-0">Darren Franceshini</h4>
                                            <p className="light-text mb-2 px-0">Blockchain</p>
                                            <div className="d-flex justify-content-center team-social-account">
                                                <a href="https://www.linkedin.com/in/darrenfranceschini/" className="mx-2"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-sm-6 col-lg-3">
                                    <div className="team-block">
                                        <div className="team-block-img">
                                            <span className="mx-auto d-inline-block"><img src={matt} alt="Matt Mcguire" /></span>
                                        </div>
                                        <div className="team-block-detail">
                                            <h4 className="d-inline-block w-100 similar-subHeading mt-0">Matt Mcguire</h4>
                                            <p className="light-text mb-2 px-0">Compliance</p>
                                            <div className="d-flex justify-content-center team-social-account">
                                                <a href="https://www.linkedin.com/in/amlmattmcguire/" className="mx-2"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-inner-padd mb-0">
                            <div className="row">
                                <div className="col col-12 col-sm-6 col-lg-3">
                                    <div className="team-block">
                                        <div className="team-block-img">
                                            <span className="mx-auto d-inline-block"><img src={maco} alt="Mayco Quiroz" /></span>
                                        </div>
                                        <div className="team-block-detail">
                                            <h4 className="d-inline-block w-100 similar-subHeading mt-0">Mayco Quiroz</h4>
                                            <p className="light-text mb-2 px-0">Treasury</p>
                                            <div className="d-flex justify-content-center team-social-account">
                                                <a href="https://www.linkedin.com/in/mayco-quiroz-cma-cpa-emp-a952761b/" className="mx-2"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-sm-6 col-lg-3">
                                    <div className="team-block">
                                        <div className="team-block-img">
                                            <span className="mx-auto d-inline-block"><img src={ben} alt="Ben Clayton" /></span>
                                        </div>
                                        <div className="team-block-detail">
                                            <h4 className="d-inline-block w-100 similar-subHeading mt-0">Ben Clayton</h4>
                                            <p className="light-text mb-2 px-0">Startups</p>
                                            <div className="d-flex justify-content-center team-social-account">
                                                <a href="https://www.linkedin.com/in/benclayton/" className="mx-2"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
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

export default Team;