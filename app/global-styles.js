import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');

  body{
    font-family: 'Open Sans', sans-serif;
  }
  ul{
    padding: 0;
    margin: 0;
  }
  ul li{
    list-style: none;
  }
  img{
    max-width: 100%;
  }
  * {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
  }
  .off-canvas-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 100vh;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
  }
  .off-canvas-container .main-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
  }
  .main-content {
    padding-top: 105px;
    float: left;
    width: 100%;
  }
  .navbar-brand {
    cursor: pointer;
  }
  img{
    max-width: 100%;
  }
  .text-green{
    color: #97C355;
  }
  button:focus{
    outline: none;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #3b3b3c;
    line-height: 1.1em;
    padding-bottom: 10px;
  }
  ul{
    padding: 0;
    margin: 0;
  }
  ul li{
    list-style: none;
  }
  a{
    color: #03aac4;
  }
  .bg-grey{
    background-color: #f7f9f9;
  }
  .py-sections{
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .container-wide{
    width: 92%;
    padding-right: 15px;
    padding-left: 15px;
    max-width: 1920px;
    margin: auto;
  }
  .btn-early-access{
    display: inline-block;
    margin-top: 20px;
    color: #fff !important;
    padding: .3em 1em;
    font-size: 18px;
    background-color: #03aac4;
    border: 2px solid #03aac4;
    border-radius: 20px;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.7em;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
  }
  .btn-early-access:hover,
  .btn-early-access:focus{
    background-color: #338cad;
    border-color: #338cad;
    color: #fff;
  }
  .container-inner-padd{
    padding: 27px 0;
  }
  .similar-heading{
    font-size: 32px;
    font-weight: 400
  }
  .light-text-padd{
    padding-right: 10%;
    padding-left: 10%;
  }
  .light-text{
    font-size: 16px;
    color: rgba(59,59,60,0.8);
    line-height: 1.7em;
  }
  .similar-subHeading{
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 0;
  }
  
  .choose-corl-block .choose-corl-img{
    margin-bottom: 15px;
  }
  .choose-corl-block .choose-corl-img img{
    width: 70px;
    height: 70px;
  }
  .terms-container{
    position: relative;
    width: 90%;
    max-width: 1920px;
    margin: auto;
    padding: 40px 0;
  }
  .terms-container h1{
      padding: 27px 0;
      font-size: 32px;
      text-align: center;
  }
  .terms-container ul li {
      list-style: inherit;
  }
  .italic-text{
    background-color: #ffffff; font-size: 16px;
  }


  .revenue-sharing .container-wide{
    width: 94%;
  }
  .revenue-sharing-content {
    margin-top: 30%;
  }
  .revenue-sharing-content h1{
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 26px;
  }
  .revenue-sharing-content p{
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #212529;
  }




  /*
  ===contact=================
  */
 .contact-us h1 {
  color: #97c355!important;
  font-size: 26px;
  position: relative;
  padding-bottom: 16px;
  font-weight: 500;
  text-align: left;
}
.contact-us input, 
.contact-us textarea {
  width: 100%;
  padding: 16px;
  border: none;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  color: #999;
  background-color: #eee;
  font-size: 14px;
  border-radius: 3px;
  font-size: 16px;
  margin-bottom: 25px;
}
.contact-us textarea{
  min-height: 150px;
}
.contact-us .et_pb_contact_select {
  box-sizing: border-box;
  width: 100%;
  padding: 16px 20px 16px 10px;
  border: 0;
  border-radius: 0;
  color: #999;
  background-color: #eee;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 3px;
}
.select-arrow {
  position: relative;
  display: block;
  margin-bottom: 25px;
}
.select-arrow:after {
  position: absolute;
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  margin-top: 3px;
  border: 6px solid;
  border-color: #666 transparent transparent transparent;
  content: "";
  transform: translateY(-50%);
  pointer-events: none;
}
.et_contact_bottom_container {
  float: right;
  margin-top: -1.5%;
  text-align: right;
}
.et_pb_contact_right {
  display: inline-block;
  min-width: 105px;
  margin: 0;
  text-align: right;
}
.et_pb_contact_submit{
  font-size: 18px;
  background: #03aac4;
  border-color: #03aac4;
  border-radius: 20px;
  padding: .3em 1em!important;
  color: white;
  font-weight: 600;
  cursor: pointer;
  min-height: 45px;
  margin-left: 10px;
  border: 2px solid transparent;
}
.et_pb_contact_submit:hover {
  background: #338cad!important;
  border-color: #338cad!important;
  border-radius: 20px;
}
.et_pb_contact_right p input {
max-width: 50px;
padding: 16px;
}
.contact-us input:focus, 
.contact-us textarea:focus,
.contact-us select:focus {
  outline: none;
}
.contact-us h5 {
  font-size: 16px;
}
.contact-us  .contact-heading h1 {
  font-size: 32px;
}
.contact-us code,
.contact-us  pre {
margin-bottom: 10px;
word-break: break-all;
}
////////////////////////global////////////////
a:hover {
  color: #03aac4;
}

.press-banner {
  background-image: linear-gradient(180deg,#03aac4 0%,#338cad 100%)!important;
  float: left;
  width: 100%;
  min-height: 280px;
  display: flex;
  align-items: center;
}
.inner-container {
  position: relative;
  z-index: 3;
  width: 80%;
  max-width: 1080px;
  margin-right: auto;
  margin-left: auto;
}
.inner-container h1{
  margin: 0 4%;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 26px;
  color: #ffffff !important;
}
.press-summary{
  padding: 40px 0;
  background-color: #f7f9f9!important;
  float: left;
  width: 100%;
}
.inner-summary{
  position: relative;
  width: 90%;
  max-width: 1920px;
  margin: auto;
}
.inner-summary h3{
  font-size: 32px;
  font-weight: 400;
  margin: 30px 0;
}
.light-text {
font-size: 16px;
color: rgba(59,59,60,0.8);
}
.press-coverage {
  margin-bottom: 25px;
  background-color: #fff !important;
}
.press-coverage h3 {
  font-size: 26px !important;
  font-weight: 400;
  margin-bottom: 30px;
  border-bottom: 1px solid #e6e9ea!important;
  padding: 15px 0;
}
.inner-summary .btn-early-access:before {
  margin-right: 10px;
}
.inner-summary a:hover{
  text-decoration: none;
}
.press-coverage-list ul li {
padding-bottom: 15px;
font-size: 16px;
color: rgba(59,59,60,0.8);
display: block;
}
// ================================================

// ===========================airdrop partial========================
.nice-fill p {
  display: block;
  float: left;
  width: 100%;
}
.nice-fill .mdText {
font-size: 20px;
line-height: 1.5;
opacity: 0.7;
margin-bottom: 10px;
text-align: center;
}
.nice-fill .smText {
  text-align: center;
  margin: 30px 0 15px 0;
}
.nice-fill .mc_optin_share {
  display: block;
  text-align: center;
}
.nice-fill .mc_optin_share li {
  display: inline-block;
}
.nice-fill .mc_optin_share li a i {
  font-size: 25px;
  margin: 10px;
}
.nice-fill .btn-green {
border: solid 2px;
border-color: #97C355;
border-radius: 20px;
font-weight: 600;
height: 45px;
padding: 0.3em 0.6em;
color: #ffffff;
background-color: #97C355;
}
.nice-fill .btn-green i {
  font-weight: 300;
  margin-right: 10px;
}
.nice-fill .btn-green:hover {
  color: #fff;
  background-color: #97C355;
  text-decoration: none; 
}
.nice-fill .share_link_title {
font-weight: 600;
}



// ===================================================================
  // ================================

  // ==============faq======================================

  .faqs-main{
    padding-bottom: 70px;
  }
  .faqs-main h2.similar-heading{
    margin-top: 30px;
    color: #03aac4;
  }
  .card-faqs{
    border-bottom: 1px solid #aaa;
  }
  .card-faqs h5 .btn{
    color: #3b3b3c;
    font-size: 19px;
    font-weight: 600;
    white-space: normal;
  }
  .card-faqs h5 .btn:hover,
  .card-faqs h5 .btn:focus{
    text-decoration: none;
  }
  .card-faqs .card-body{
    padding-left: 40px;
    padding-bottom: 10px;
  }
  .card-faqs .card-body p{
    color: #3b3b3c;
  }
  .card-faqs .card-body p a:hover,
  .card-faqs .card-body p a:focus,
  .card-faqs .card-collapse-icons a:hover,
  .card-faqs .card-collapse-icons a:focus{
    color: #03aac4;
    text-decoration: none;
  }
  .card-faqs .card-collapse-icons a{
    min-width: 24px;
    font-size: 22px;
  }
  .card-faqs h5.collapsed .card-collapse-minus,
  .card-faqs h5 .card-collapse-plus{
    display: none;
  }
  .card-faqs h5 .card-collapse-minus,
  .card-faqs h5.collapsed .card-collapse-plus{
    display: block;
  }
  .decimal-list li{
    line-height: 24px;
  }
  .faqs-main .faqs-main-block{
    padding-bottom: 20px;
  }
  
  // ==========================================================


  // ======Investment modal======
  .investment-modal {
    display: block !important;
    opacity: 1 !important;
    background: rgba(0, 0, 0, 0.5);
  }
  .modal.fade .modal-dialog {
    transform: translate(0);
  }
  .centered-modal {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
  }
  .investment-modal .modal-dialog{
      width: 60%;
      max-width: inherit !important;
  }
  .investment-modal .modal-content {
      border-radius: 6px;
      border: 8px none #000000;
      box-shadow: 0px 0px 30px 0px rgba( 2, 2, 2, 1.00 );
      background-color: rgba( 255, 255, 255, 1.00 );
  }
  .investment-modal .modal-dialog .modal-body {
      padding: 40px;
  }
  .investment-modal .pum-close {
      position: absolute;
   height: 35px;
   width: 35px;
   left: auto;
   right: -15px;
   bottom: auto;
   top: -15px;
   padding: 0px;
   color: #000000;
   font-family: inherit;
   font-size: 26px;
   line-height: 30px;
   border: 2px solid #ffffff;
   border-radius: 30px;
   box-shadow: 0px 0px 15px 1px rgba( 2, 2, 2, 0.75 );
   text-shadow: 0px 0px 0px rgba( 0, 0, 0, 0.23 );
   background-color: rgba( 255, 255, 255, 1.00 );
   position: absolute;
   opacity: 1;
   cursor: pointer;
   font-weight: 400;
   z-index: 5;
  }
  .investment-modal h2 {
   font-size: 30px;
   margin-bottom: 20px;
   margin-top: 15px;
   font-weight: 600;
   -webkit-font-smoothing: antialiased;
   text-align: center;
  }
  .investment-modal p {
   font-size: 20px;
   line-height: 1.5;
   opacity: 0.7;
   margin-bottom: 10px;
   text-align: center;
  }
  .investing-field{
      width: 60%;
      float: none;
      margin: 20px auto;
  }
  .investing-form .form-field {
    padding: 0 !important;
  }
  .mc_form_input {
      font-size: 16px !important;
      color: #3b3b3c !important;
      opacity: 1 !important;
      text-align: left !important;
      width: 60%;
      float: none;
      margin: auto;
  }
  .mc_form_input label {
      color: #3b3b3c;
      padding-right: 10px;
  }
  .mc_form_input span {
      padding-right: 10px;
      opacity: 1 !important
  }
  .mc_form_submit_subscription input{
      color: #ffffff;
      background-color: #97C355;
      font-weight: 600;
      padding: 0.3em 1em;
      transition: all 0.5s;
      font-size: 18px;
      text-align: center;
      border: 2px solid;
      border-radius: 20px;
      height: 45px;
      line-height: 1.7;
      cursor: pointer;
  }









  // =====================================

  
/*
======================================================
error
======================================================
*/

.error-content .container{
  padding-top: 40px;
  padding-bottom: 40px;
}
.error-content h1{
	font-size: 40px;
	font-weight: 600;
}
.error-content p{
	font-size: 1.4rem;
	line-height: 1.4em;
	color: #3b3b3c;
}
.error-img{
	max-width: 482px;
}
.go-home-btn{
	background-color: #97c355;
	font-weight: 600;
	padding: .3em 2em;
	transition: all .5s;
	font-size: 18px;
	text-align: center;
	border: 2px solid;
	border-radius: 8px;
	min-height: 45px;
}
.go-home-btn:hover,
.go-home-btn:focus{
	text-decoration: none;
	background-color: #71ab1d;
}




/*
======================================================
error
======================================================
*/


  /*
  ======================================================
  combine css
  ======================================================
  */
 @media(min-width: 992px){
	.revenue-sharing{
		height: 90vh;
    background-position: bottom center;
		background-size: cover;
	}
	.similar-heading{
		margin-bottom: 2.75%;
	}
	.benefits-block .benefits-detail-container{
		width: 86%;
	}
	.benefits-block .row .col:first-child:after{
		content: '';
		width: 2px;
		height: 100%;
		display: inline-block;
		position: absolute;
		top: 75px;
		right: 0;
	}
	.container-we-stack{
		margin-right: 10%;
		margin-left: 10%;
	}
}
@media(max-width: 991px){
  .card-faqs h5 .btn{
		font-size: 15px;
	}
	.faqs-contact .similar-heading{
		font-size: 22px;
	}
	.faqs-visit .container-wide,
	.faqs-main .container-wide,
	.faqs-contact .container-wide{
		width: 94%;
	}
	.six-columns{
		padding: 10px 50px;
	}
	.media-mention{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.media-et-module{
		width: auto;
		margin: 0 10px;
	}
	.choose-corl .choose-corl-block{
		margin-bottom: 30px;
	}
	.how-works .how-works-img img{
		max-width: 100% !important;
	}
	.container-inner-padd{
		margin-bottom: 30px;
	}
	.benefits-block-container{
		width: 100% !important;
	}
	.benefits-block .row .col:first-child .benefits-detail-container:after{
    content: '';
    height: 1px;
    background-color: #9a9a9a;
    width: 92%;
    display: inline-block;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
	}
	.benefits-block .row .col:first-child .benefits-detail-container{
		margin-bottom: 15px;
	}
	.benefits-block .row .col:first-child .benefits-detail{
		padding-bottom: 40px;
	}
	.view-faqs .row .col:first-child .view-faqs-detail{
		margin-bottom: 20px;
	}
	.financing-process .financing-process-top{
		padding-top: 8px;
	}
	.companies-content .container-wide{
		width: 96%;
	}
	.we-stack-desktop{
		display: none;
	}
	.we-stack-tablet{
		display: block;
	}
	.container-we-stack{
		width: 94%;
		padding-right: 15px;
    padding-left: 15px;
    
  }
  .revenue-sharing-content {
    margin-top: 10%;
 }
}
@media(max-width: 768px){
	.six-columns{
		padding: 10px 20px;
	}
	.revenue-sharing-content h1{
		font-size: 36px;
	}
	.media-et-module{
		margin-bottom: 10px;
	}
	.similar-heading{
		font-size: 24px;
	}
}

`;
