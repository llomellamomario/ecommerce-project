import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutWithGoogle } from '../../firebase/firebase.utils';

const Header = (props) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {
        props.currentUser ?
        <div className='option' onClick={() => signOutWithGoogle()}>
          SIGN OUT
        </div>
        : 
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      }

    </div>
  </div>
)

export default Header;