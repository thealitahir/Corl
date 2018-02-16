import React from 'react';
import Banner from '../../components/airdrop/Banner/Banner';
import Share from '../../components/airdrop/Share/Share';
import Form from '../../components/airdrop/Form/Form';
// import $ from 'jquery'
class AirDrop extends React.Component {

	componentWillMount() {
		// $(function () {
		// 	$('a[href*="#"]:not([href="#"].animatedowmn)').click(function () {
		// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		// 			var target = $(this.hash);
		// 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// 			if (target.length) {
		// 				$('html, body').animate({
		// 					scrollTop: target.offset().top - 150
		// 				}, 1000);
		// 				return false;
		// 			}
		// 		}
		// 	});
		// });
	}

	render() {
		return (
			<div className="main-content">
				<Banner />
				<Share />
				<Form />

			</div>
		)
	}
}



export default AirDrop;
