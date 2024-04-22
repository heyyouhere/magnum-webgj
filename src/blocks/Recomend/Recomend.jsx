import './Recomend.css'

import { useNavigate } from 'react-router-dom';


function Recomend() {
    let navigate = useNavigate();

    return (
        <div id='portfolio' className='recomend'>
            <p className='recomend__title text-big'>ПОСЛЕДНИЕ КЕЙСЫ</p>
            <div className='recomend__container' onClick={() => {
                navigate('/portfolio');
                // window.scrollTo(0, 0);
            }}>
                <div className='recomend__item recomend__first'>
                <div className='recomend__overlay'>
                    <p className='recoment__text' >ALFA Digital. Онлайн конференция Alfa Bank</p>
                    
                    </div>
                </div>
                <div className='recomend__item recomend__second'>
                <div className='recomend__overlay'>
                    <p className='recoment__text' >Moscow Urban Forum. Дополненная реальность в парке «Зарядье»</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Recomend;