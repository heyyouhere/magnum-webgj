import Header from './blocks/Header/Header';
import Portfolio from './blocks/Portfolio/Portfolio'
import Services from './blocks/Services/Services';
import ContactForm from './blocks/ContactForm/ContactForm';
import Footer from './blocks/Footer/Footer';
import { useEffect } from 'react';

function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="main-page">
      <Header title={'MAGNUM'}/>
      <Portfolio/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default MainPage;
