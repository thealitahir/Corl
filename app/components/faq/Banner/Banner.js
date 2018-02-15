import React from 'react';
import "./banner.css";

class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="faqs-visit py-sections bg-grey">
                <div className="container-wide">
                    <div className="container-inner-padd mb-0">
                        <h1 className="similar-heading mb-4 pb-3 text-center text-lg-left">Looking for answers? You came to the right place.</h1>
                        <p className="light-text mb-0">To make your visit worthwhile, this page has answers to most common questions about Corl and our revenue sharing on the blockchain.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;