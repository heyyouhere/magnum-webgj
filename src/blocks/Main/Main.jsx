import './Main.css'
import magnumTitle from '../../img/magnum-logo.png'
import reel from '../../videos/reeel92mb.mp4'
// import reel from '../../videos/reel 1m16s new.mp4'
import thumbnail from '../../img/reel-thumbnail-min.png'

function Main() {
    return (
        <main className='main'>
            <div className='main__container'>
                <div>
                    <img loading="lazy" className='main__title-img' src={magnumTitle} alt='magnum digital studio'/>
                    <p className='main__subtitle text-medium'>Это тестовый сайт, тут много всего нового</p>
                </div>
                {/* <div className='main__grid'>
                    <div className='main__grid-item main__grid-item1'></div>
                    <div className='main__grid-item main__grid-item2'></div>
                    <div className='main__grid-item main__grid-item3'></div>
                    <div className='main__grid-item main__grid-item4'></div>
                </div> */}
                <div className='main__overlay-container'>
                    <video
                        preload='auto'
                        className='main__reel'
                        src={reel}
                        autoPlay={false}
                        loop={true}
                        muted
                        controls={true}
                        playsInline
                        poster={thumbnail}
                    >
                        Your browser does not support the video tag.
                    </video>
                    {/* <div className='main__overlay'>
                    </div> */}
                </div>
            </div>
        </main>
    );
}

export default Main;