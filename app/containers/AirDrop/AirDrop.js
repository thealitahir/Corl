import React from 'react';
import Banner from '../../components/airdrop/Banner/Banner';
import Share from '../../components/airdrop/Share/Share';
import Form from '../../components/airdrop/Form/Form';
import FbPixel from '../App/FbPixel'
import $ from 'jquery'

class AirDrop extends React.Component {
	// constructor() {
	// 	super();

	// 	React.trackCustom('Viewed Airdrop Page', {})

	// }
	componentWillMount() {
		FbPixel.trackCustom('Viewed Airdrop Page', {})
		$(function () {
			$('a[href*="#"]:not([href="#"].animatedowmn)').click(function () {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: target.offset().top - 150
						}, 1000);
						return false;
					}
				}
			});
		});
		// $(window).scroll(function () {
		// 	if ($(this).scrollTop() > 200) {
		// 		$('.description-bar').addClass("getFix");
		// 	} else if ($(this).scrollTop() < 200) {
		// 		$('.description-bar').addClass("getFix");
		// 	}
		// });
		$('.description-bar').addClass("getFix");
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
