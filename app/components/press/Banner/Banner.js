import React from 'react';
import "./banner.css";

class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="press-banner">
                <div className="inner-container">
                    <h1 className="et_pb_module_header">Share Corl's story with the world</h1>
                </div>
            </div>
        );
    }
}

export default Banner;