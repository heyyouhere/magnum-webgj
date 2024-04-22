import './Services.css'
import circle from '../../img/circle.png'


function Services() {
    return (
      <div id='services' className="services">
        <img className='services__circle-decor' alt='circle' src={circle} loading="lazy"/>
        <p className='services__title text-big'>МЫ СОЗДАЕМ</p>
        <div className='services__container'>
            <div className='services__item services__item1'><p className='services__item-title'>РЕКЛАМА</p>
              <div className='services__item-overlay'>
                <ul className='services__list'>
                  <li className='services__list-item'>Создание графики</li>
                  <li>Тизеры и трейлеры</li>
                  <li>VFX контент для соцсетей</li>
                  <li>Разработка концепции</li>
                </ul>
              </div>
            </div>
            <div className='services__item services__item2'><p className='services__item-title'>MOTION</p>
              <div className='services__item-overlay'>
                <ul className='services__list'>
                  <li className='services__list-item'>Эфирная графика для ТВ</li>
                  <li className='services__list-item'>Медиадизайн для инсталляций</li>
                  <li className='services__list-item'>Контент для концертов и event</li>
                  <li className='services__list-item'>Интерактивный контент для expo</li>
                </ul>
              </div>
            </div>
            <div className='services__item services__item3'><p className='services__item-title'>АВАТАРЫ</p>
            <div className='services__item-overlay'>
                <ul className='services__list'>
                  <li className='services__list-item'>Digital ведущие</li>
                  <li className='services__list-item'>Маскоты</li>
                  <li className='services__list-item'>Игровые персонажи</li>
                  <li className='services__list-item'>Виртуальные инфлюенсеры</li>
                </ul>
              </div>
            </div>
            <div className='services__item services__item4'><p className='services__item-title'>METAVERSE</p>
              <div className='services__item-overlay'>
              <div className='services__item-overlay'>
                <ul className='services__list'>
                  <li className='services__list-item'>Roblox</li>
                  <li className='services__list-item'>webGL</li>
                  <li className='services__list-item'>Decentraland</li>
                  <li className='services__list-item'>Spatial</li>
                </ul>
              </div>
              </div>
            </div>
            <div className='services__item services__item5'><p className='services__item-title'>AR/VR/XR</p>
              <div className='services__item-overlay'>
              <div className='services__item-overlay'>
                <ul className='services__list'>
                  <li className='services__list-item'>Разработка приложений и web </li>
                  <li className='services__list-item'>Интерактивный AR и VR</li>
                  <li className='services__list-item'>Контент для XR студий</li>
                  <li className='services__list-item'>Разработка ПО для трекинга</li>
                </ul>
              </div>
              </div>
            </div>
            <div className='services__item services__item6'><p className='services__item-title'>НЕЙРОСЕТИ</p>
              <div className='services__item-overlay'>
              <div className='services__item-overlay'>
                <ul className='services__list'>
                  <li className='services__list-item'>Чат-боты на основе ИИ</li>
                  <li className='services__list-item'>Генерация ИИ видео</li>
                  <li className='services__list-item'>ПО с нейронными сетями</li>
                  <li className='services__list-item'>создание анимаций через ИИ</li>
                </ul>
              </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  