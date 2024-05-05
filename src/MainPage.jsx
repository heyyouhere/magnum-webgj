import Header from './blocks/Header/Header';
import Main from './blocks/Main/Main';
import Services from './blocks/Services/Services';
import ContactForm from './blocks/ContactForm/ContactForm';
import Footer from './blocks/Footer/Footer';
import Recomend from './blocks/Recomend/Recomend';
//import ThreeBackground from './blocks/ThreeBackground/ThreeBackground';
import { CyberSecsation } from './blocks/CyberSensation/CyberSensation';
import ModelWrapper from './blocks/ThreeBackground/Model';



function MainPage() {
  return (
    <>
    <div className="main-page">
      <Header title={'Test Magnum Page'}/>
      <Main/>
      <Services/>
      <Recomend/>
      <CyberSecsation/>
      <ContactForm/>

      <ModelWrapper />
      <Footer/>
    </div>
    </>
  );
}

export default MainPage;
