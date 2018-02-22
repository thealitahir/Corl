import React from 'react';
import "./banner.css";
import image from '../../../images/1f680.svg';
import image1 from '../../../images/1f680.svg';
// import FbPixel from '../../containers/App/FbPixel'

class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
    // func() {
    //     console.log('khan');
    // }
    render() {

        return (
            <div className="et_pb_section et_pb_fullwidth_section join-airdrop et_pb_section_0 investor_background et_section_regular">
                <section className="dwd-fwe et_pb_fullwidth_header et_pb_module et_pb_bg_layout_light et_pb_text_align_left  et_pb_fullwidth_header_extended_0 et_pb_animated_transparent_bg">
                    <div className="et_pb_fullwidth_header_container">
                        <div className="header-content-container">
                            <div className="header-content">
                                <div className="et_pb_header_description" data-typing-loop="true">
                                    <span className="et_pb_fullwidth_header_subhead  "><img draggable="false" className="emoji" alt="🚀" src={image} /> SPECIAL ANNOUNCEMENT <img draggable="false" className="emoji" alt="🚀" src={image1} /></span>
                                    <h1 className=" ">Join the Corl Token Airdrop! </h1>
                                    <div className="et_pb_header_content  ">
                                        <div className="text fs fs-20 ">To join our token sale, please fill out the whitelist form. Once the whitelist reaches a max capacity. It will be closed.</div>
                                    </div>
                                    <a href="#airdrop-tasks"  className="animatedowmn et_pb_more_button et_pb_button et_pb_button_one">Join Airdrop</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="et_pb_fullwidth_header_gradient"></div>
                    <div className="et_pb_fullwidth_header_overlay"></div>
                    <div className="et_pb_fullwidth_header_scroll"></div>
                </section>
            </div>

        );
    }
}

export default Banner;