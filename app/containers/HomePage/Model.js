import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class Model extends React.Component {
  state = { entrepreneur: false, investor: false, form: true, country: '' }
  selectCountry(val) {
    this.setState({ country: val });
  }
  renderForm() {
    const { country } = this.state;
    return (
      <div className="modal-body">
        <h2>We're Making Investing in Companies More Intuitive.</h2>
        <p>A straightforward investment method based on revenue sharing &amp; the blockchain.</p>
        <div className="investing-form">
          <form id="mc4wp-form-3" method="post" data-id="26494" data-name="Corl Early Access - General" >
            <div className="investing-field">
              <input className="input-field" type="text" name="FNAME" placeholder="Your First Name" required="" />
            </div>
            <div className="investing-field">
              <input className="input-field" type="text" name="LNAME" placeholder="Your Last Name" required="" />
            </div>
            <div className="investing-field">
              <input className="input-field" type="email" name="EMAIL" placeholder="Your Work Email" required="" />
            </div>
            <div className="investing-field">
              <input className="input-field" type="hidden" name="REF_CODE" value="" />
            </div>
            <div className="mc_form_input mc_form_subscribe_type">
              <label>I am an:</label>
              <span className="entrepreneur"><input name="USER_TYPE" type="radio" id="businessType" value="Entrepreneur" onClick={() => { this.setState({ entrepreneur: true, investor: false }) }} required="" /> Entrepreneur</span>
              <span className="investor"><input name="USER_TYPE" type="radio" id="investorType" value="Investor" onClick={() => { this.setState({ entrepreneur: false, investor: true }) }} required="" /> Investor</span>
            </div>
            {
              this.state.entrepreneur ?
                <div className="investing-field">
                  <input className="input-field" name="COMPANY" type="text" placeholder="Your Company Name" required="" />
                </div>
                :
                null
            }
            {
              this.state.investor ?
                <div>
                  <div className="form-field">
                    <CountryDropdown className="select-field"
                      value={country}
                      onChange={(val) => this.selectCountry(val)} />
                  </div>

                  <div className="form-field">
                    <label>Please indicate the amount with which you want to participate in the token sale (in USD).</label>
                    <select name="INVEST_AMT" required="" className="select-field">
                      <option value="">Choose an amount</option>
                      <option value="USD < 100">USD &lt; 100</option>
                      <option value="USD 100 - 1000">USD 100 - 1000</option>
                      <option value="USD 1,000 - 5,000">USD 1,000 - 5,000</option>
                      <option value="USD 5,000 - 10,000">USD 5,000 - 10,000</option>
                      <option value="USD 10,000 - 50,000">USD 10,000 - 50,000</option>
                      <option value="USD 50,000 - 100,000">USD 50,000 - 100,000</option>
                      <option value="USD > 100,000">USD &gt; 100,000</option>
                    </select>
                  </div>
                </div>
                :
                null
            }

            <div className="mc_form_submit_subscription text-center my-3">
              <input onClick={() => { this.setState({ entrepreneur: false, investor: false, form: false }) }} type="submit" value="Request Early Access" />
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
            <div className="col col-12 col-lg-7 fill-form nice-fill">
              <h2>Nice! You're in!</h2>
              <p className="mdText">You have reserved a spot on our Corl Token Airdrop. Stay tuned!</p>
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
        <div className="fade-inner" onClick={() => { this.props.closeModel(false) }}></div>
        <div className="centered-modal">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button onClick={() => { this.props.closeModel(false) }} type="button" className="close pum-close" data-dismiss="modal" aria-label="Close">
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

export default Model;
