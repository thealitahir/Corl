import React from 'react';
import "./form.css";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
// import ethereum_address from 'ethereum-address';
import FbPixel from '../../../containers/App/FbPixel'

class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function
    state = { flag: false, country: '', ethValue: "", FNAME: '', LNAME: '', EMAIL: '', TELEGRAM_NAME: '', INVEST_AMT: '', TWITTER_NAME: '' }
    selectCountry(val) {
        this.setState({ country: val });
    }
    updateValue(evt) {
        this.setState({
            ethValue: evt.target.value
        });

        // if (ethereum_address.isAddress(this.state.ethValue)) {

        // }
        // else {

        // }
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
    handleTelegram(e) {
        this.setState({ TELEGRAM_NAME: e.target.value })
    }
    handleTwitter(e) {
        this.setState({ TWITTER_NAME: e.target.value })
    }
    handleInvest(e) {
        this.setState({ INVEST_AMT: e.target.value })
    }
    renderForm() {
        const { country, FNAME, LNAME, EMAIL, INVEST_AMT, TELEGRAM_NAME, TWITTER_NAME, ethValue } = this.state;
        return (
            <div className="airdrop-container airdrop-container-form pb-5">
                <div className="row justify-content-center" id="fill-form-id">
                    <div className="col col-12 col-lg-7 fill-form">
                        <h2>Fill the Form</h2>
                        <form>
                            <div className="form-field">
                                <input type="text" className="input-field" value={this.state.FNAME} onChange={this.handleFName.bind(this)} name="FNAME" placeholder="Your First Name" required />
                            </div>
                            <div className="form-field">
                                <input type="text" className="input-field" value={this.state.LNAME} onChange={this.handleLName.bind(this)} name="LNAME" placeholder="Your Last Name" required />
                            </div>
                            <div className="form-field">
                                <input type="email" className="input-field" value={this.state.EMAIL} onChange={this.handleEmail.bind(this)} name="EMAIL" placeholder="Your Email Address" required />
                            </div>
                            <div className="form-field">
                                <input type="text" value={this.state.TELEGRAM_NAME} onChange={this.handleTelegram.bind(this)} className="input-field" name="TELEGRAM" placeholder="Your Telegram Username" required />
                            </div>
                            <div className="form-field">
                                <input type="text" value={this.state.TWITTER_NAME} onChange={this.handleTwitter.bind(this)} className="input-field" name="TWITTER" placeholder="Your Twitter Username" required />
                            </div>
                            {/* <div className="form-field">
                                <label>Please indicate the amount with which you want to participate in the token sale (in USD).</label>
                                <select value={this.state.INVEST_AMT} onChange={this.handleInvest.bind(this)} name="INVEST_AMT" required className="select-field">
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



                            <div className="form-field">
                                <input type="text" className="input-field" name="ETH_ADDR" placeholder="Your ETH Address" required value={this.state.ethValue} onChange={this.updateValue.bind(this)} />
                            </div>


                            <div className="form-field">
                                <CountryDropdown className="select-field"
                                    value={country}
                                    onChange={(val) => this.selectCountry(val)} />
                            </div>
                            <div className="form-field mc_form_submit_subscription">
                                <input type="submit" value="Join Airdrop" className="submit-btn"
                                    onClick={() => {
                                        FbPixel.trackCustom('Token Presale Signup', {});

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
                                                "TWITTER_NAME": TWITTER_NAME,
                                                "TELEGRAM_NAME": TELEGRAM_NAME,
                                                "email_type": "html",
                                                "status": "subscribed",
                                                "COUNTRY": country,
                                                "INVEST_AMT": INVEST_AMT
                                            }
                                            )
                                        }).then(res => {
                                            this.setState({ form: true });
                                        })

                                    }}

                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    renderMessage() {
        return (
            <div className="airdrop-container airdrop-container-form pb-5">
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
        )
    }
    render() {
        return (
            this.state.flag ? this.renderMessage() : this.renderForm()
        );
    }
}

export default Form;