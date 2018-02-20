import React from 'react';

class ModelCompany extends React.Component {
  state = { entrepreneur: false, investor: false, form: true }
  renderForm() {
    return (
      <div className="modal-body">
        <h2>Get Early Access & Reserve Your Funding Spot</h2>
        {/* <p>A straightforward investment method based on revenue sharing &amp; the blockchain.</p> */}
        <div className="investing-form">
          <form>
            <div className="investing-field">
              <input className="input-field" type="text" placeholder="Your First Name" required="" />
            </div>
            <div className="investing-field">
              <input className="input-field" type="text" placeholder="Your Last Name" required="" />
            </div>
            <div className="investing-field">
              <input className="input-field" type="email" placeholder="Your Work Email" required="" />
            </div>

            <div className="investing-field">
              <input className="input-field" type="text" placeholder="Your Company Name" required="" />
            </div>



            <div className="mc_form_submit_subscription text-center my-3">
              <input onClick={() => { this.setState({ form: false }) }} type="submit" value="Request Early Access" />
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

export default ModelCompany;
