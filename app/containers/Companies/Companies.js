import React from 'react';
import Banner from '../../components/companies/Banner/Banner';
import Detail from '../../components/companies/Detail/Detail';
import Finance from '../../components/companies/Finance/Finance';
import Stackup from '../../components/companies/Stackup/Stackup';

class Companies extends React.Component {
    render() {
        return (
            <div className="main-content">
                <Banner />
                <Detail />
                <Finance />
                <Stackup />
            </div>
        )
    }
}

export default Companies;
