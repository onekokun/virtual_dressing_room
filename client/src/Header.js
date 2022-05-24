import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
        <Link to='/'>
          <img 
              className="header__logo"
              src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
          />
         </Link>
         <div className='header__search'>

            <input className='header__searchInput' type='text' placeholder='Search an item...' />
            <SearchIcon className='header__searchIcon' />
         </div>

         <div className='header__nav'>
            <div className='header__option'>
              <span className='header__optionLineOne'>
                Hello Guest
              </span>
              <span className='header__optionLineTwo'>
                <button>Sign Out</button>
              </span>
            </div>

            <div className='header__option'>
              <span className='header__optionLineOne'>
                Returns
              </span>
              <span className='header__optionLineTwo'>
                & Orders
              </span>
            </div>

            <div className='header__option'>
              <span className='header__optionLineOne'>
                Get
              </span>
              <span className='header__optionLineTwo'>
                Premium ⭐
              </span>
            </div>

            <div className='header__optionBasket'>
              <Link to='/checkout'>
                <ShoppingBasketIcon />
              </Link>
              <span className='header__optionLineTwo header__basketCount'>0</span>
            </div>
         </div>
    </div>
  )
}

export default Header