import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import error from '../../images/error-img.png';

class Error500 extends React.Component {
	componentWillMount() {
		document.title = "Page not found | Corl";
	}
	render() {
		return (
			<div className="main-content error-content text-center">
				<div className="container">
					<h1 className="similar-heading mb-4 pb-0">Uh oh!</h1>
					<p className="light-text mb-0">Something went wrong at our end.</p>
					<p className="light-text mb-0">Don't worry, it's not you - it's us. Sorry about that! Give us another try.</p>
					<div className="w-100 my-4">
						<span className="error-img d-inline-block"><img src={error} alt="Error-IMG" /></span>
					</div>
					<a onClick={() => this.props.history.push('/')} className="go-home-btn text-white d-inline-block">Try Again</a>
				</div>
			</div>

		)
	}
}


export default withRouter(connect(null, null)(Error500));
