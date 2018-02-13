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
  img{
    max-width: 100%;
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
  .conatiner-wide{
    width: 92%;
    padding-right: 15px;
    padding-left: 15px;
    max-width: 1920px;
    margin: auto;
  }
  .btn-early-access{
    display: inline-block;
    margin-top: 20px;
    color: #fff;
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
  
  
  
  /*
  ======================================================
  combine css
  ======================================================
  */
 @media(min-width: 992px){
	.revenue-sharing{
		height: 90vh;
		background-position: bottom center;
		background-image: url('../images/header-illustration.png');
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
		background: url(../images/vertical-dotted-line.png) no-repeat;
		width: 2px;
		height: 100%;
		display: inline-block;
		position: absolute;
		top: 75px;
		right: 0;
	}
}
@media(max-width: 991px){
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
		max-width: 100%;
	}
	.container-inner-padd{
		margin-bottom: 30px;
	}
	.benefits-block-container{
		width: 100%;
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
}
`;
