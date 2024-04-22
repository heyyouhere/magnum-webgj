import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import PortfolioPage from './PortfolioPage';
import Project from './blocks/Project/Project';
import video2 from './videos/clyksanaverh.mp4'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    function removeElementsByClass(root, className) {
      const elements = root.querySelectorAll('.' + className);
      elements.forEach(element => {
        element.remove();
      });
    }

    removeElementsByClass(document, 'media-controls-container');

    const possibleShadowHosts = document.querySelectorAll('*');
    possibleShadowHosts.forEach(host => {
      if (host.shadowRoot) {
        removeElementsByClass(host.shadowRoot, 'media-controls-container');
      }
    });
  }, [])
  return (
    <div className="App">
      {/* <div className='App__overlay-container'>
          <video className='App__bgVideo'
          autoPlay={true}
          muted
          loop={true}
          controls={false}
          playsInline
          
          style={{
          width: '100%',
          // height: 'auto',
          height: '700px',
          overflow: 'hidden',
          position: 'fixed',
          left: '0',
          top: '0',
          zIndex: '-100',
        }}>
            <source src = {video2} type = 'video/mp4' />
        </video>
        <div className='App__overlay'></div>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:area" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
