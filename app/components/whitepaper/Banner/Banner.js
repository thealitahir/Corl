import React from 'react';
import "./banner.css";
import Timer from '../Timer/Timer';
class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="entry-content">
                <div className="et_pb_section et_pb_fullwidth_section ico-presale et_pb_section_0 et_pb_with_background et_section_regular">
                    <section className="dwd-fwe et_pb_fullwidth_header et_pb_fullscreen et_pb_module et_pb_bg_layout_dark et_pb_text_align_center  et_pb_fullwidth_header_extended_0 et_pb_animated_transparent_bg">
                        <div className="et_pb_fullwidth_header_container">
                            <div className="header-content-container">
                                <div className="header-content">
                                    <div className="et_pb_header_description">
                                        <h1 className=" ">Corl, a Token for Revenue-Sharing Investments </h1>
                                        <div className="et_pb_header_content  ">
                                            <p>Corl Token (CRL) is the world’s first revenue-sharing token designed to support and participate in the growth of emerging companies. CRL is based on a profit-sharing model, whereby investors receive a continuous stream of quarterly dividends in the form of cryptocurrency, based on future earnings of Corl.</p>
                                        </div>
                                        <a href="#crl-token-presale" className="et_pb_more_button et_pb_button et_pb_button_one fadeIn animated pum-trigger">Get Whitelisted</a><a href="/whitepaper" className="et_pb_more_button et_pb_button et_pb_button_two fadeIn animated" target="_blank">Read Our Whitepaper</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="et_pb_fullwidth_header_gradient"></div>
                        <div className="et_pb_fullwidth_header_overlay"></div>
                        <div className="et_pb_fullwidth_header_scroll"></div>
                    </section>
                </div>
                <Timer />
            </div>

        );
    }
}

export default Banner;