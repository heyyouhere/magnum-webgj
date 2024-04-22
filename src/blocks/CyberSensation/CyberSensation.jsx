import './CyberSensation.css'
import magicBall from '../../videos/magic-ball-footage-2023-11-27-05-32-28-utc_1.mp4'

const CyberSecsation = () => {
    return(
        <div id='cyber' className='cyber'>
            <div className='cyber__container'>
                <div className='cyber__overlay-container'>
                    <video className='cyber__video'
                        autoPlay={true}
                        loop={true}
                        muted
                        controls={false}
                        playsInline
                        >
                        <source src = {magicBall} type = 'video/mp4' />
                    </video>
                    <div className='cyber__overlay'></div>
                </div>
                <div className='cyber__about'>
                    <p className='cyber__title text-big'>КИБЕР СЕНСАЦИЯ</p>
                    <p className='cyber__subtitle text-medium'>попробуй сделать кастомный проект за пару минут</p>
                    <button className='cyber__button' onClick={() => {
                        window.location.href = 'https://t.me/MagnumCyber_bot';
                    }}>ПОПРОБОВАТЬ</button>
                </div>
            </div>
        </div>
    )
}

export {CyberSecsation}