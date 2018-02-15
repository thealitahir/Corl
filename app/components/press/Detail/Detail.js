import React from 'react';
import "./detail.css";
class Detail extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="press-summary">
                <div className="inner-summary">
                    <h3>Company Description</h3>
                    <p className="light-text"><strong>25 Words</strong></p>
                    <p className="light-text">Corl is aiming to create the world’s first regulatory-compliant securities and revenue-sharing token designed to support and participate in the growth of emerging companies.</p>
                    <p className="light-text"><strong>50 Words</strong></p>
                    <p className="light-text">Corl is aiming to create the world’s first regulatory-compliant securities and revenue-sharing token designed to provide emerging companies with access to fast, fairly priced, and entrepreneur-friendly growth capital, whereby investors receive a continuous stream of quarterly dividends in the form of Ether, based on future earnings of Corl.</p>
                    <p className="light-text"><strong>100 Words</strong></p>
                    <p className="light-text">Corl is aiming to create the world’s first regulatory-compliant securities and revenue-sharing token designed to provide emerging companies with access to fast, fairly priced, and entrepreneur-friendly growth capital, whereby investors receive a continuous stream of quarterly dividends in the form of Ether, based on future earnings of Corl.</p>
                    <p className="light-text">Corl combines two of the most recent disruptions in the online world: crowdfunding and blockchain. Through a straightforward investment method based on revenue, companies can grow on their own terms without any dilution, while providing investors with the opportunity to access robust revenue potential through crypto-assets beyond stocks and bonds.</p>
                </div>
            </div>
        );
    }
}

export default Detail;