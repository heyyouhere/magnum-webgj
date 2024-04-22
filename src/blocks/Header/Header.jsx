import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import burgerIcon from '../../img/menu-bar.png';
import magnumLogo from '../../img/M-letter.png'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import video2 from '../../videos/clyksanaverh.mp4'

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '20px',
    top: '80px',
    backgroundImage: `url(${burgerIcon})`,
    backgroundPosition: 'center', // Center the background image
    backgroundSize: 'cover', // Cover the entire area of the button
    backgroundRepeat: 'no-repeat' // Do not repeat the image
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    top: '80px',
    right: '36px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#8566FF',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    height: '90%',
    display: 'flex',
    marginTop: '50px',
    flexDirection: 'column',
    gap: '30px',
  },
  bmItem: {
    display: 'inline-block',
    textDecoration: 'none',
    color: 'white'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)'
  }
};

const Header = () => {
  let navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  
    const handleStateChange = (state) => {
      setMenuOpen(state.isOpen);
    };

    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth < 700);
      };
  
      // Listen for resize events
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <header className='header'>
        <div className='header__container'>
        {isMobileView && 
          <Menu className='menu'
            styles={styles} 
            right
            isOpen={menuOpen}
            onStateChange={handleStateChange}
          >
            <Link id="home" className="menu-item text-medium" to={'/'}>УСЛУГИ</Link>
            <Link id="home" className="menu-item text-medium" to={'/portfolio'}>ПОРТФОЛИО</Link>
          </Menu>}
          
          {/* <div className='header__title'>MAGNUM</div> */}
          <img className='header__img-logo' src={magnumLogo} alt='magnum digital studio' onClick={() => {
            navigate('/');
          }}/>
          {!isMobileView && (
          <ul className='header__list'>
            <li><a className='header__link text-medium' href='#services'>УСЛУГИ</a></li>
            <li><Link className='header__link text-medium' to={'/portfolio'}>ПОРТФОЛИО</Link></li>
            <li><a className='header__link text-medium' href='#cyber'>СЕНСАЦИЯ</a></li>
            <li><a className='header__link text-medium' href='#contacts'>КОНТАКТЫ</a></li>
          </ul>
        )}
        </div>
      </header>
    );
};
  
  export default Header;
