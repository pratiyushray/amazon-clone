import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Header() {
    const [{basket},dispatch]=useStateValue();

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }


  return (
    <div className='header'>
        <Link to="/">
        <img className="header__logo" onClick={topFunction} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon_logo" />
        </Link>
        <div className="location__icon">
            <LocationOnIcon/>
        </div>
        <div className="header__option">
                <span className="header__optionLineOne">Hello</span>
                <span className="header__optionLineTwo">Select your address</span>
        </div>
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle dropdown__button" type="button" data-bs-toggle="dropdown" aria-expanded="false">EN</button>
        </div>
        <div className="header__nav">
            <Link to="/login">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello, sign in</span>
                    <span className="header__optionLineTwo">Account & Lists</span>
                </div>
            </Link>

            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>                
            </div>

            <Link to="/checkout">
                <div className="header__optionBasket" onClick={topFunction}>
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>


        </div>
    </div>
  )
}

export default Header