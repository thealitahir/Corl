import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import error from '../../images/error-img.png';

class Error404 extends React.Component {
	componentWillMount() {
		document.title = "Page not found | Corl";
	}
	render() {
		return (
			<div className="main-content error-content text-center">
				<div className="container">
					<h1 className="similar-heading mb-4 pb-0">Something wrong here...</h1>
					<p className="light-text mb-0">Uh oh, we can't seem to find the page you're looking for.</p>
					<p className="light-text mb-0">You can go back or chat with us.</p>
					<div className="w-100 my-4">
						<span className="error-img d-inline-block"><img src={error} alt="Error-IMG" /></span>
					</div>
					<a onClick={() => this.props.history.push('/')} className="go-home-btn text-white d-inline-block">Go Home</a>
				</div>
			</div>
		)
	}
}


export default withRouter(connect(null, null)(Error404));
