import React from 'react';
import "./form.css";
class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="airdrop-container">
                <div className="row justify-content-center" id="fill-form-id">
                    <div className="col col-12 col-lg-7 fill-form">
                        <h2>Fill the Form</h2>
                        <form>
                            <div className="form-field">
                                <input type="text" className="input-field" name="FNAME" placeholder="Your First Name" required="" />
                            </div>
                            <div className="form-field">
                                <input type="text" className="input-field" name="LNAME" placeholder="Your Last Name" required="" />
                            </div>
                            <div className="form-field">
                                <input type="email" className="input-field" name="EMAIL" placeholder="Your Email Address" required="" />
                            </div>
                            <div className="form-field">
                                <input type="text" className="input-field" name="TELEGRAM" placeholder="Your Telegram Username" required="" />
                            </div>
                            <div className="form-field">
                                <input type="text" className="input-field" name="TWITTER" placeholder="Your Twitter Username" required="" />
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
                            <div className="form-field">
                                <input type="text" className="input-field" name="ETH_ADDR" placeholder="Your ETH Address" required="" />
                            </div>
                            <div className="form-field">
                                <input type="text" className="input-field" name="COUNTRY" placeholder="Your Country of Residence" required="" />
                            </div>
                            <div className="form-field mc_form_submit_subscription">
                                <input type="submit" value="Join Airdrop"  className="submit-btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        );
    }
}

export default Form;