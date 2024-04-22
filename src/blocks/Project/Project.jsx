import "./Project.css"
import { useEffect, useState } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import video1 from '../../videos/ar master.mp4'
import { useLocation } from 'react-router-dom';
import Recomend from '../Recomend/Recomend'
import thumbnail from '../../img/reel-thumbnail-min.png'

function Project() {
    const location = useLocation();
    const [projectProps, setProjectProps ] = useState(null);
    console.log(location.pathname)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        if (location.state && location.state.clickedImageProps) {
            setProjectProps(location.state.clickedImageProps);
        }
    }, [location.state]);

    return(
        <>
            <Header/>
            <main className="project">
                {/* <img className="project__mainImg" src={projectProps?.mainImg}/> */}
                <div className='project__overlay-container'>
                    <video
                        preload='auto'
                        className='project__reel'
                        src={`${projectProps?.mainImg}#t=5`}
                        autoPlay={true}
                        loop={true}
                        muted
                        controls={false}
                        playsInline
                    >
                        Your browser does not support the video tag.
                    </video>
                    <div className='project__overlay'>
                    </div>
                </div>
                <div className="section project__about">
                    <div className="project__about-container">
                        <p className="project__text project__about-title">{projectProps?.title.substring(1)}</p>
                        <p className="project__text project__about-text">{projectProps?.subtitle.substring(1)}</p>
                    </div>
                    <img className="project__about-image" src={projectProps?.aboutImg} loading="lazy"/>
                </div>
                {
                
                    location.pathname === '/portfolio/area5' ?
                    <div className="project__image-container">
                        <img className="project__image project__image-1" src={projectProps?.gallery[0]} style={{width: '100%', height: 'auto'}} loading="lazy"></img>
                    </div> :
                    <div className="project__image-container">
                        <img className={`project__image project__image-1}`} src={projectProps?.gallery[0]} loading="lazy"></img>
                        <img className="project__image project__image-2" src={projectProps?.gallery[1]} loading="lazy"></img>
                        <img className="project__image project__image-3" src={projectProps?.gallery[2]} loading="lazy"></img>
                        <img className="project__image project__image-4" src={projectProps?.gallery[3]} loading="lazy"></img>
                    </div>
                }
            </main>
            <Recomend/>
            <Footer/>
        </>
    )
}

export default Project

