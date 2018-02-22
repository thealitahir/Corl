import React from 'react';
import "./banner.css";

class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="revenue-sharing py-sections investor-sections">
                <div className="container-wide mx-auto">
                    <div className="row">
                        <div className="col col-12 col-lg-6">
                            <div className="revenue-sharing-content">
                                <h1>There's a better way to invest</h1>
                                <p>A straightforward investment method based on revenue. Diversify your portfolio beyond stocks and bonds through crypto assets.</p>
                                <a onClick={() => { this.props.openInvestorModel(true) }} className="btn btn-early-access d-inline-block">Get Early Access</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
