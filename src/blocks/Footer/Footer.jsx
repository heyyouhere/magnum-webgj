import './Footer.css';
import magnumLogo from '../../img/M-letter.png';
import footer_decor from '../../img/decor-footer.png'

function Footer() {
  return (
    <div className="footer">
      {/* <img src={footer_decor} className='footer__decor' alt='decoration'/> */}
      <div className='footer__container'>
        <img className='footer__img-logo' src={magnumLogo} alt='буква М'/>
        <div className='footer__contacts'>
          <p className='footer__info '>КОНТАКТЫ</p>
          <p className='footer__info '><a className='footer__tel' href='tel:+74954927062'>8 495 492 70 62</a></p>
          <p className='footer__info'>MOSCOW</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
