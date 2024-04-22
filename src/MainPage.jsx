import Header from './blocks/Header/Header';
import Main from './blocks/Main/Main';
import Services from './blocks/Services/Services';
import ContactForm from './blocks/ContactForm/ContactForm';
import Footer from './blocks/Footer/Footer';
import Recomend from './blocks/Recomend/Recomend';
import { CyberSecsation } from './blocks/CyberSensation/CyberSensation';



function MainPage() {
  return (
    <>
    <div className="main-page">
      <Header title={'MAGNUM'}/>
      <Main/>
      <Services/>
      <Recomend/>
      <CyberSecsation/>
      <ContactForm/>
      <Footer/>
    </div>
    </>
  );
}

export default MainPage;
