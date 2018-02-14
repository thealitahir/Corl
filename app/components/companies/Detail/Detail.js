import React from 'react';
import "./detail.css";
import business from '../../../images/Business_mbp.png';
class Detail extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="revenue-sharing-what important-what py-sections">
                <div className="container-wide">
                    <div className="container-inner-padd mb-0">
                        <div className="row">
                            <div className="col col-12 col-lg-6">
                                <h2 className="similar-heading mb-4 pb-3">What's important to you?</h2>
                                <p className="light-text mb-3 px-0">Raising venture capital is a 6—9 months process. That’s precious time you could be using to grow your business.</p>
                                <p className="light-text mb-3 px-0">VC and angel funding is tighter than ever and most banks don’t have loan products to help companies with no hard assets (i.e. collateral).</p>
                                <p className="light-text mb-5 mb-lg-0 px-0">Corl's revenue-sharing investments help you access flexible capital for long-term growth without the restrictions associated with traditional debt financing or equity dilution. We call it, Capital-as-a-Service.</p>
                            </div>
                            <div className="col col-12 col-lg-6">
                                <span className="d-inline-block w-100 pl-md-3"><img src={business} alt="IMG" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Detail;