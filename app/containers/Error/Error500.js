import React from 'react';
import error from '../../images/error-img.png';

class Error500 extends React.Component {
	render() {
		return (
			<div className="main-content error-content text-center py-5">
				<div className="container">
					<h1 className="similar-heading mb-4 pb-0">Uh oh!</h1>
					<p className="light-text mb-0">Something went wrong at our end.</p>
					<p className="light-text mb-0">Don't worry, it's not you - it's us. Sorry about that! Give us another try.</p>
					<div className="w-100 my-4">
						<span className="error-img d-inline-block"><img src={error} alt="Error-IMG" /></span>
					</div>
					<a href="#" className="go-home-btn text-white d-inline-block">Try Again</a>
				</div>
			</div>
		)
	}
}



export default Error500;
