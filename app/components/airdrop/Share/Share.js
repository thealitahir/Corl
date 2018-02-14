import React from 'react';
import "./share.css";
import telegram from '../../../images/telegram.svg';
import fb from '../../../images/facebook.svg';
import form from '../../../images/fill-form.svg';
import {
    FacebookShareButton
} from 'react-share';

class Share extends React.Component { // eslint-disable-line react/prefer-stateless-function
    // state = {
    //     visitedFacebook: false,
    //     visitedForm: false
    // }
    // abc() {
    //     console.log('ahbdsahbh')
    //     debugger;
    // }
    render() {
        return (
            <div className="airdrop-container" id="airdrop-tasks">

                <div className="row">
                    <div className="col col-12 col-lg-4">
                        <div className="et_pb_blurb mx-4">
                            <a className="et_pb_blurb_content p-4">
                                <div className="et_pb_main_blurb_image m-3">
                                    <img src={telegram} alt="Join Telegram" className="et-waypoint" />
                                </div>
                                <div className="et_pb_blurb_container">
                                    <h4 className="et_pb_module_header">1. JOIN OUR TELEGRAM CHANNEL</h4>

                                </div>
                            </a>
                        </div>
                    </div>
                    <FacebookShareButton
                        className="col col-12 col-lg-4"
                        url={'https://corl.io/airdrop/'}
                    >
                        <div className="et_pb_blurb mx-4">
                            <a className="et_pb_blurb_content p-4">
                                <div className="et_pb_main_blurb_image m-3">
                                    <img src={fb} alt="Join facebook" className="et-waypoint" />
                                </div>
                                <div className="et_pb_blurb_container">
                                    <h4 className="et_pb_module_header">2. SHARE ON FACEBOOK</h4>
                                </div>
                            </a>
                        </div>
                    </FacebookShareButton>
                    <div className="col col-12 col-lg-4">
                        <div className="et_pb_blurb mx-4">
                            <a className="et_pb_blurb_content p-4 animatedowmn" href="#fill-form-id" >
                                <div className="et_pb_main_blurb_image m-3">
                                    <img src={form} alt="Join fill-form" className="et-waypoint" />
                                </div>
                                <div className="et_pb_blurb_container">
                                    <h4 className="et_pb_module_header">3. FILL THE FORM</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Share;