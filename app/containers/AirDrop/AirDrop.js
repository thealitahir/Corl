import React from 'react';
import Banner from '../../components/airdrop/Banner/Banner';
import Share from '../../components/airdrop/Share/Share';
import Form from '../../components/airdrop/Form/Form';
import FbPixel from '../App/FbPixel'
import $ from 'jquery'

class AirDrop extends React.Component {
	componentWillMount() {
		document.title = "Join the Corl Token Airdrop!";
		FbPixel.trackCustom('Viewed Airdrop Page', {})
		$(function () {
			$('a[href*="#"]:not([href="#"].animatedowmn)').click(function () {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						FbPixel.trackCustom('Clicked Join Airdrop', {})
						$('html, body').animate({
							scrollTop: target.offset().top - 150
						}, 1000);
						return false;
					}
				}
			});
		});
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
