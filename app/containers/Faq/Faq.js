import React from 'react';
import Banner from '../../components/faq/Banner/Banner';
import Contact from '../../components/faq/Contact/Contact';
import Entrepreneur from '../../components/faq/Entrepreneur/Entrepreneur';
import General from '../../components/faq/General/General';
import Invester from '../../components/faq/Invester/Invester';

class Faq extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Banner />
        <div className="faqs-main py-sections">
          <div className="container-wide">
            <div className="container-inner-padd">
              <General />
              <Entrepreneur />
              <Invester />
            </div>
          </div>
        </div>

        <Contact />
      </div>
    )
  }
}

export default Faq;
