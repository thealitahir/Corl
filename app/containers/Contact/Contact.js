import React from 'react';
class Contact extends React.Component {
  state = { et_pb_contact_name_1: '', et_pb_contact_company_1: '', et_pb_contact_phone_1: '', et_pb_contact_email_1: '', et_pb_contact_type_1: '', et_pb_contact_comments_1: '' }
  componentWillMount() {
    document.title = "Contact Us | Revenue share on the blockchain | Corl";
  }
  render() {
    return (
      <div className="main-content">
        <div className="terms-container contact-us">
          <div className="contact-heading">
            <h1 className="text-center"><span>Contact Us</span></h1>
            <h5 className="text-center mt-3 mb-4">Feel free to send us your question using the form below and we’ll do our very best to answer you as soon as we can.</h5>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <h1 className="et_pb_contact_main_title">Get in Touch</h1>

              <form action="https://corl.io/contact/" method="post">
                <div className="row et_pb_contact">
                  <div className="col-md-6">
                    <input type="text" id="et_pb_contact_name_1" className="input" name="et_pb_contact_name_1" required placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" id="et_pb_contact_company_1" className="input" name="et_pb_contact_company_1" placeholder="Company Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="tel" id="et_pb_contact_phone_1" className="input" name="et_pb_contact_phone_1" required placeholder="Phone Number" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" id="et_pb_contact_email_1" className="input" name="et_pb_contact_email_1" required data-original_id="email" placeholder="Email Address" />
                  </div>
                  <div className="col-md-12">
                    <div className="select-arrow">
                      <select id="et_pb_contact_type_1" className="et_pb_contact_select input" name="et_pb_contact_type_1" required >
                        <option disabled>-- Which best describes you? --</option>
                        <option value="I am an Investor">I am an Investor</option>
                        <option value="I am an Entrepreneur">I am an Entrepreneur</option>
                        <option value="I am a potential partner">I am a potential partner</option><option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <textarea name="et_pb_contact_comments_1" id="et_pb_contact_comments_1" className="et_pb_contact_message input" required placeholder="Comments"></textarea>
                  </div>
                  <div className="col-md-12">
                    <div className="et_contact_bottom_container">
                      <div className="et_pb_contact_right">
                        <p className="clearfix">
                          <span className="et_pb_contact_captcha_question">2 + 14</span> = <input type="text" size="2" className="input et_pb_contact_captcha" data-first_digit="2" data-second_digit="14" name="et_pb_contact_captcha_0" required />
                        </p>
                      </div>
                      <button type="submit" value="Submit" className="et_pb_contact_submit et_pb_button">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-4">
              <h1>Connect With Us!</h1>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Contact;
