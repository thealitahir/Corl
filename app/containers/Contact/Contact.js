import React from 'react';
class Contact extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="terms-container contact-us">
          <div className="contact-heading">
            <h1 className="text-center"><span>Contact Us</span></h1>
            <h5 className="text-center mt-3">Feel free to send us your question using the form below and we’ll do our very best to answer you as soon as we can.</h5>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <h1 className="et_pb_contact_main_title">Get in Touch</h1>
              <div className="row et_pb_contact">
                <div className="col-md-6">
                  <input type="text" id="et_pb_contact_name_1" className="input" value="" name="et_pb_contact_name_1" data-required_mark="required" data-field_type="input" data-original_id="name" placeholder="Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" id="et_pb_contact_company_1" className="input" value="" name="et_pb_contact_company_1" data-required_mark="not_required" data-field_type="input" data-original_id="company" placeholder="Company Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" id="et_pb_contact_phone_1" className="input" value="" name="et_pb_contact_phone_1" data-required_mark="required" data-field_type="input" data-original_id="phone" placeholder="Phone Number" />
                </div>
                <div className="col-md-6">
                  <input type="text" id="et_pb_contact_email_1" className="input" value="" name="et_pb_contact_email_1" data-required_mark="required" data-field_type="email" data-original_id="email" placeholder="Email Address" />
                </div>
                <div className="col-md-12">
                  <div className="select-arrow">
                    <select id="et_pb_contact_type_1" className="et_pb_contact_select input" name="et_pb_contact_type_1" data-required_mark="required" data-field_type="select" data-original_id="type">
                      <option value="">-- Which best describes you? --</option>
                      <option value="I am an Investor">I am an Investor</option>
                      <option value="I am an Entrepreneur">I am an Entrepreneur</option>
                      <option value="I am a potential partner">I am a potential partner</option><option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <textarea name="et_pb_contact_comments_1" id="et_pb_contact_comments_1" className="et_pb_contact_message input" data-required_mark="required" data-field_type="text" data-original_id="comments" placeholder="Comments"></textarea>
                </div>
                <div className="col-md-12">
                  <div className="et_contact_bottom_container">
                    <div className="et_pb_contact_right">
                      <p className="clearfix">
                        <span className="et_pb_contact_captcha_question">2 + 14</span> = <input type="text" size="2" className="input et_pb_contact_captcha" data-first_digit="2" data-second_digit="14" value="" name="et_pb_contact_captcha_0" data-required_mark="required" />
                      </p>
                    </div>
                    <button type="submit" className="et_pb_contact_submit et_pb_button">Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h1>Connect With Us!</h1>
              <div aria-hidden="false">
                <pre className="ng-binding" tabIndex="0">[addthis tool=addthis_horizontal_follow_toolbox]</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Contact;
