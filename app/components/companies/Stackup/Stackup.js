import React from 'react';
import "./stackup.css";
import corl from '../../../images/corl-circular-logo.svg';
import bank from '../../../images/bank.svg';
import angle from '../../../images/angels.svg';

class Stackup extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="we-stack py-sections text-center">
                <div className="container-wide">
                    <div className="container-inner-padd">
                        <h2 className="similar-heading">How we stack up</h2>
                        <p className="light-text light-text-padd mb-0">More flexible than the bank. Far cheaper than equity.</p>
                    </div>
                </div>
                <div className="container-we-stack">
                    <div className="container-inner-padd we-stack-desktop">
                        <div className="row no-gutters">
                            <div className="col col-12 col-lg-3">
                                <div className="we-stack-block">
                                    <ul className="list-group we-stack-list pb-3">
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0"></li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Expected Return</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Term</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Personal Guarantees</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Collateral</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Fundraising Period</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Repayment Schedule</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Equity</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Impacts Credit Score</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-3">
                                <div className="we-stack-block selected">
                                    <ul className="list-group we-stack-list pb-3">
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0 flex-column">
                                            <span className="stack-list-img"><img src={corl} /></span>
                                            <strong>Corl</strong>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">15-30%</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Until repaid</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">None</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">None</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">1-2 Weeks</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Flexible</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Small Upside</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">No impact</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-3">
                                <div className="we-stack-block">
                                    <ul className="list-group we-stack-list pb-3">
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0 flex-column">
                                            <span className="stack-list-img"><img src={bank} /></span>
                                            <strong>Banks</strong>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">10%</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Varies</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Required</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Required</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">2-6 Months</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Fixed</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">None</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">Yes</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-12 col-lg-3">
                                <div className="we-stack-block">
                                    <ul className="list-group we-stack-list pb-3">
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0 flex-column">
                                            <span className="stack-list-img w-100"><img src={angle} /></span>
                                            <strong>VCs Angels</strong>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">25-100%</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">N/A</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">None</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">None</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">6-9 Months</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">N/A</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">20-40%</li>
                                        <li className="list-group-item d-flex align-items-center justify-content-center border-0">No impact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-inner-padd we-stack-tablet">
                        <div className="table-responsive">
                            <table className="table table-striped we-stack-table">
                                <thead>
                                    <tr>
                                        <th>Corl</th>
                                        <th>Banks</th>
                                        <th>VCs &amp; Angels</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="3" className="text-center light-blue">Expected Return</td>
                                    </tr>
                                    <tr>
                                        <td className="line-bg">15-30%</td>
                                        <td>10%</td>
                                        <td>25-100%</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-center light-blue">Term</td>
                                    </tr>
                                    <tr>
                                        <td className="line-bg">Until repaid</td>
                                        <td>Varies</td>
                                        <td>None</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-center light-blue">Personal Guarantees</td>
                                    </tr>
                                    <tr>
                                        <td className="line-bg">None</td>
                                        <td>Required</td>
                                        <td>None</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-center light-blue">Collateral</td>
                                    </tr>
                                    <tr>
                                        <td className="line-bg">None</td>
                                        <td>Required</td>
                                        <td>None</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-center light-blue">Fundraising Period</td>
                                    </tr>
                                    <tr>
                                        <td className="line-bg">1-2 Weeks</td>
                                        <td>2-6 Months</td>
                                        <td>6-9 Months</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-center light-blue">Repayment Schedule</td>
                                    </tr>
                                    <tr>
                                        <td className="line-bg">Flexible</td>
                                        <td>Fixed</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-center light-blue">Equity</td>
                                    </tr>
                                    <tr>
                                        <td className="line-bg">Small Upside</td>
                                        <td>None</td>
                                        <td>20-40%</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="text-center light-blue">Impacts Credit Score</td>
                                    </tr>
                                    <tr>
                                        <td className="line-bg">No impact</td>
                                        <td>Yes</td>
                                        <td>No impact</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>Corl</th>
                                        <th>Banks</th>
                                        <th>VCs &amp; Angels</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="container-inner-padd">
                        <a href="#" className="btn btn-early-access d-inline-block mb-3">Get Early Access</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Stackup;