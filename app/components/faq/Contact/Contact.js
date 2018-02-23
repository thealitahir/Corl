import React from 'react';
import "./contact.css";


class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="faqs-contact py-sections bg-grey text-center">
                <div className="container-wide">
                    <div className="container-inner-padd mb-0">
                        <h2 className="similar-heading m-0 p-0">Still have questions? <a href="/contact/">Contact us</a> and we’d be happy to give you an answer.</h2>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;