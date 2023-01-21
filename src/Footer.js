import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
function Footer() {
  return (
    <div className="main__footer">
        <div className='footer' onClick={topFunction}>
            <button className='btn__back' onClick={topFunction}>Back to top</button>
        </div>  
        <div className="connect__details">
            <div className="inside__connect">
                <span className="connect__heading">Get to Know Us</span>
                <span className="connect__more">About Us</span>
                <span className="connect__more">Careers</span>
                <span className="connect__more">Press Realeases</span>
                <span className="connect__more">Amazon Science</span>
            </div>
            <div className="inside__connect">
                <span className="connect__heading">Connect with Us</span>
                <span className="connect__more">Facebook</span>
                <span className="connect__more">Twitter</span>
                <span className="connect__more">Instagram</span>
                <span className="connect__more">Github</span>
            </div>
            <div className="inside__connect">
                <span className="connect__heading">Make Money with Us</span>
                <span className="connect__more">Sell on Amazon</span>
                <span className="connect__more">Sell under Amazon Accelerator</span>
                <span className="connect__more">Protect and Build Your Band</span>
                <span className="connect__more">Amazon Global Selling</span>
            </div>
            <div className="inside__connect">
                <span className="connect__heading">Let Us Help You</span>
                <span className="connect__more">COVID-19 and Amazon</span>
                <span className="connect__more">Your Account</span>
                <span className="connect__more">Returns Centre</span>
                <span className="connect__more">100% Purchase Protection</span>
                <span className="connect__more">Help</span>
            </div>
        </div>
        <div className="amazon_city_list">
            <div className="logo_language">
                <div className="logo_Amazon">
                    <Link to="/">
                    <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon_logo" />
                    </Link>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle dropdown__button" type="button" data-bs-toggle="dropdown" aria-expanded="false">English</button>
                </div>
            </div>

            <div className="contries__name">
                <span className="name__country">Austraila</span>
                <span className="name__country">Brazil</span>
                <span className="name__country">Canada</span>
                <span className="name__country">China</span>
                <span className="name__country">France</span>
                <span className="name__country">Germany</span>
                <span className="name__country">Italy</span>
                <span className="name__country">Japan</span>
                <span className="name__country">Mexico</span>
                <span className="name__country">India</span>
                <span className="name__country">Poland</span>
                <span className="name__country">Singapore</span>
                <span className="name__country">Spain</span>
                <span className="name__country">United Arab Emirates</span>
            </div>
        </div>
        <div className="privacy__notice">
            <div className="privacy__details">
                <span>Condition of Use & Sale</span>
                <span>Privacy Note</span>
                <span>Interest Based-Ads</span>
            </div>
            <div className="conditions">
                <span>	&#169; 1996-2023, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    </div>

  )
}

export default Footer