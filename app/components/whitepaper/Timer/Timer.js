import React from 'react';
import ReactDOM from "react-dom";
import Countdown from "react-countdown-now";
import "./timer.css";
class Timer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        const date = new Date("April 1, 2018 00:00");
        const renderer = ({ hours, minutes, seconds, days }) => {
            return <div className="et_pb_section-time" id="timer">
                <div className="timer-container">
                    <div className="et_pb_column et_pb_column_4_4  et_pb_column_0 et-last-child">
                        <div className="et_pb_module et_pb_countdown_timer et_pb_bg_layout_light  et_pb_countdown_timer_0 et_pb_no_bg">
                            <div className="et_pb_countdown_timer_container clearfix">
                                <h3 className="title">Corl Token Sale</h3>
                                <div className="days section values" data-short="Day" data-full="Day(s)">
                                    <p className="value" >{days}</p>
                                    <p className="label">Day(s)</p>
                                </div>
                                <div className="sep section">
                                    <p>:</p>
                                </div>
                                <div className="hours section values" data-short="Hrs" data-full="Hour(s)">
                                    <p className="value" >{hours}</p>
                                    <p className="label">Hour(s)</p>
                                </div>
                                <div className="sep section">
                                    <p>:</p>
                                </div>
                                <div className="minutes section values" data-short="Min" data-full="Minute(s)">
                                    <p className="value">{minutes}</p>
                                    <p className="label">Minute(s)</p>
                                </div>
                                <div className="sep section">
                                    <p>:</p>
                                </div>
                                <div className="seconds section values" data-short="Sec" data-full="Second(s)">
                                    <p className="value" >{seconds}</p>
                                    <p className="label">Second(s)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                ;
        };
        return (


            <div  >
                <Countdown date={date}
                    renderer={renderer} />

            </div>
            // <div className="et_pb_section-time" id="timer">
            //     <div className="timer-container">
            //         <div className="et_pb_column et_pb_column_4_4  et_pb_column_0 et-last-child">
            //             <div className="et_pb_module et_pb_countdown_timer et_pb_bg_layout_light  et_pb_countdown_timer_0 et_pb_no_bg">
            //                 <div className="et_pb_countdown_timer_container clearfix">
            //                     <h3 className="title">Corl Token Sale</h3>
            //                     <div className="days section values" data-short="Day" data-full="Day(s)">
            //                         <p className="value" id="days"></p>
            //                         <p className="label">Day(s)</p>
            //                     </div>
            //                     <div className="sep section">
            //                         <p>:</p>
            //                     </div>
            //                     <div className="hours section values" data-short="Hrs" data-full="Hour(s)">
            //                         <p className="value" id="hours"></p>
            //                         <p className="label">Hour(s)</p>
            //                     </div>
            //                     <div className="sep section">
            //                         <p>:</p>
            //                     </div>
            //                     <div className="minutes section values" data-short="Min" data-full="Minute(s)">
            //                         <p className="value" id="minutes"></p>
            //                         <p className="label">Minute(s)</p>
            //                     </div>
            //                     <div className="sep section">
            //                         <p>:</p>
            //                     </div>
            //                     <div className="seconds section values" data-short="Sec" data-full="Second(s)">
            //                         <p className="value" id="seconds"></p>
            //                         <p className="label">Second(s)</p>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>

        )
    }
}

export default Timer;