import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FbPixel from '../App/FbPixel'

class ModelInvestor extends React.Component {
  state = { entrepreneur: false, investor: false, form: true, country: '', FNAME: '', LNAME: '', EMAIL: '', REF_CODE: '', INVEST_AMT: '', COMPANY: '', USER_TYPE: '' }
  selectCountry(val) {
    this.setState({ country: val });
  }
  handleFName(e) {
    this.setState({ FNAME: e.target.value })
  }
  handleLName(e) {
    this.setState({ LNAME: e.target.value })
  }
  handleEmail(e) {
    this.setState({ EMAIL: e.target.value })
  }
  handleInvest(e) {
    this.setState({ INVEST_AMT: e.target.value })
  }

  renderForm() {
    const { country, FNAME, LNAME, EMAIL, INVEST_AMT } = this.state;
    return (
      <div className="modal-body modal-body-first">
        <h2>Keep up with Corl News & Announcements</h2>
        <p>&nbsp;</p>
        {/* <p>A straightforward investment method based on revenue sharing &amp; the blockchain.</p> */}
        <div className="investing-form">
          <form>
            <div className="investing-field">
              <input className="input-field" type="text" value={this.state.FNAME} onChange={this.handleFName.bind(this)} placeholder="Your First Name" required />
            </div>
            <div className="investing-field">
              <input className="input-field" type="text" value={this.state.LNAME} onChange={this.handleLName.bind(this)} placeholder="Your Last Name" required />
            </div>
            <div className="investing-field">
              <input className="input-field" value={this.state.EMAIL} onChange={this.handleEmail.bind(this)} type="email" placeholder="Your Email Address" required />
            </div>
            <div>
              <div className="form-field">
                <CountryDropdown className="select-field"
                  value={country}
                  onChange={(val) => this.selectCountry(val)} />
              </div>
              {/* <div className="form-field">
                <label>Please indicate the amount with which you want to participate in the token sale (in USD).</label>
                <select name="INVEST_AMT" value={this.state.INVEST_AMT} onChange={this.handleInvest.bind(this)} required className="select-field">
                  <option value="">Choose an amount</option>
                  <option value="USD < 100">USD &lt; 100</option>
                  <option value="USD 100 - 1000">USD 100 - 1000</option>
                  <option value="USD 1,000 - 5,000">USD 1,000 - 5,000</option>
                  <option value="USD 5,000 - 10,000">USD 5,000 - 10,000</option>
                  <option value="USD 10,000 - 50,000">USD 10,000 - 50,000</option>
                  <option value="USD 50,000 - 100,000">USD 50,000 - 100,000</option>
                  <option value="USD > 100,000">USD &gt; 100,000</option>
                </select>
              </div> */}
            </div>


            <div className="mc_form_submit_subscription text-center my-3">
              <input type="submit" value="Join Waitlist"
                onClick={() => {
                  FbPixel.trackCustom('Early Access Signup - Submit', {});
                  this.setState({ entrepreneur: false, investor: false });
                  fetch('https://us13.api.mailchimp.com/3.0/lists/76a7c94746/members', {
                    method: 'POST',
                    headers: {
                      'Authorization': 'apikey 460949c257c9c616313928b054f967df-us13',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      "FNAME": FNAME,
                      "LNAME": LNAME,
                      "email_address": EMAIL,
                      "email_type": "html",
                      "status": "subscribed",
                      "COUNTRY": country,
                      "INVEST_AMT": INVEST_AMT
                    }
                    )
                  }).then(res => {
                    this.setState({ form: false });

                  })

                }}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
  renderMessage() {
    return (
      <div className="modal-body">
        <div className="airdrop-container">
          <div className="row justify-content-center" id="fill-form-id">
            <div className="col col-12 col-lg-8 fill-form nice-fill">
              <h2 className="mb-5 pb-5 mt-4">Nice! You're in!</h2>
              <p className="mdText">You have joined our waiting list. Stay tuned!</p>
              <p className="smText">In the meantime, please follow us on social media!</p>
              <ul className="mc_optin_share">
                <li>
                  <a target="_blank" href="https://www.facebook.com/getcorl"><i className="fa fa-facebook-square"></i></a>
                </li>
                <li>
                  <a target="_blank" href="https://www.twitter.com/getcorl"><i className="fa fa-twitter-square"></i></a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/company/corl"><i className="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/getcorl/"><i className="fa fa-instagram"></i></a>
                </li>
              </ul>
              <p className="text-center my-3"><a target="_blank" href="https://t.me/corltoken" className="btn-green"><i className="fa fa-telegram"></i> Join us on Telegram</a></p>
              <p className="share_link_title my-3 text-center">Or share this unique link:</p>
              <p id="refLink" className="text-center"><a href="https://www.corl.io?ref=ctVf5wpbtb">https://www.corl.io?ref=ctVf5wpbtb</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="modal investment-modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="fade-inner" onClick={() => { this.props.closeInvestorModel(false) }}></div>
        <div className="centered-modal">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button onClick={() => { this.props.closeInvestorModel(false) }} type="button" className="close pum-close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              {this.state.form ? this.renderForm() : this.renderMessage()}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ModelInvestor;
