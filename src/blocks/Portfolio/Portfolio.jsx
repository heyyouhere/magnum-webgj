import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import { useNavigate } from 'react-router-dom';
import ImageWithVideoOnHover from '../VideoBlock/VideoBlock';
import area1_img from '../../img/гиф 10 сек 1400(смол).gif'
import area2_img from '../../img/portfolio/Томск_карта-min.png'
import area3_img from '../../img/portfolio/Альфабанк 2022-min.png'
import area4_img from '../../img/portfolio/iri.png'
import area5_img from '../../img/portfolio/MTC.png'
import area6_img from '../../img/portfolio/Золотые хиты Муз-ТВ 2022-min.png'
import area7_img from '../../img/portfolio/Московский URBAN FORUM  2023 (2).png'

import videoUrl1 from '../../img/гиф 10 сек 1400(смол).gif'
import videoUrl2 from '../../img/tomsk_1.gif'
import videoUrl3 from '../../img/alphaban_vertical.gif'
import videoUrl4 from '../../img/iri-big.gif'
import videoUrl5 from '../../img/mts.gif'
import videoUrl6 from '../../img/zolotye hity_small.gif'
import videoUrl7 from '../../img/ar_vertical.gif'

import mainImgTomsk from '../../videos/tomsk.mp4'
import aboutImgTomsk from '../../img/projects/tomsk/img4.png'
import img1 from '../../img/roblox_tomsk2.gif'
import img2 from '../../img/projects/tomsk/img2.png'
import img3 from '../../img/projects/tomsk/img1.png'
import img4 from '../../img/roblox_tomsk.gif'

import mainIriImg from '../../img/projects/ИРИ/image 13.png'

// картинки для портфолио
import mainAlpha  from '../../videos/alifa.mp4'
import mainIri  from '../../videos/iri_20s.mp4'
import mainMts  from '../../videos/mts 20 sec.mp4'
import mainHity  from '../../videos/zolotye hity 20s.mp4'
import mainUrban  from '../../videos/AR20 sec.mp4'
import mainPred  from '../../videos/den predprinemately.mp4'

// картинки под проект
import aboutPred from '../../img/portfolio-about-small/predprinimatel.png'
import aboutAlpha from '../../img/portfolio-about-small/alpha.png'
import aboutIri from '../../img/portfolio-about-small/iri.png'
import aboutMts from '../../img/portfolio-about-small/mts.png'
import aboutHity from '../../img/portfolio-about-small/muz.png'
import aboutUrban from '../../img/portfolio-about-small/urban.png'

import aboutGamzatov from '../../img/portfolio-about-small/gamzatov.png'
import aboutCreative100 from '../../img/portfolio-about-small/100-creative.png'
import aboutBasis from '../../img/portfolio-about-small/basis.png'
import aboutPyaterochka from '../../img/portfolio-about-small/pyaterochka.png'
import aboutDenZnaniy from '../../img/portfolio-about-small/den-znaniy.png'
import aboutSuperCity from '../../img/portfolio-about-small/super-city.png'
import aboutOstrovok from '../../img/portfolio-about-small/ostrovok.png'

// раскадровка проекта
import alphaFrame1 from '../../img/alphaFrame1.png'
import alphaFrame2 from '../../img/alphaFrame2.png'
import alphaFrame3 from '../../img/alphaFrame3.png'
import alphaFrame4 from '../../img/alphaFrame4.png'

import predFrame1 from '../../img/0408.jpg'
import predFrame2 from '../../img/ezgif.com-video-to-gif (7).gif'
import predFrame3 from '../../img/ezgif.com-video-to-gif (4).gif'
import predFrame4 from '../../img/гиф 10 сек 1400(смол).gif'

import urbanFrame1 from '../../img/urbanFrame1.JPG'
import urbanFrame2 from '../../img/urbanFrame2.gif'
import urbanFrame3 from '../../img/urbanFrame3.png'
import urbanFrame4 from '../../img/urbanFrame4.png'

import hityFrame1 from '../../img/frameHity1.png'
import hityFrame2 from '../../img/frameHity2.png'
import hityFrame3 from '../../img/frameHity3.png'
import hityFrame4 from '../../img/frameHity4.png'

import iriFrame1 from '../../img/iriFrame1.png'
import iriFrame2 from '../../img/iriFrame2.png'
import iriFrame3 from '../../img/iriFrame3.png'
import iriFrame4 from '../../img/iriFrame4.png'

import mtsFrame from '../../img/mtsFrame.png'

// section 2 portfolio


import area1_img_2 from '../../img/gamzatov_portfolio.jpg'
import area2_img_2 from '../../img/100_creative.png'
import area3_img_2 from '../../img/basis_portfolio.png'
import area4_img_2 from '../../img/pyaterochka_portfolio.jpg'
import area5_img_2 from '../../img/den_znaniy_portfolio.gif'
import area6_img_2 from '../../img/supercity_portfolio.png'
import area7_img_2 from '../../img/ostrovok_portfolio.png'

import gamzatovFrame1 from '../../img/gif/взрыв гамзатов.gif'
import gamzatovFrame2 from '../../img/gif/дым гамзатов.gif'
import gamzatovFrame3 from '../../img/gif/ковер гамзатов.gif'
import gamzatovFrame4 from '../../img/gif/луп гамзатов.gif'

const alphaTitle = 'ALFA Digital. Онлайн конференция Alfa Bank'
const alphaSubtitle = 'Видели одежду эфира от которой все ахнули? Скорее всего нет, мероприятие было внутренним, для сотрудников компании. Им рассказали о топовых продуктах банка.А мы показали это и доказали, с помощью множества графики, видеороликов и инфографики. Заставки, титры, оформление выступлений спикеров, интерактивная графика, презентационные ролики'

const mtsTitle = 'Cyber Sation. Конференция по кибербозапосности от MTC'
const mtsSubtitle = 'Сотни умных тезисов от спикеров МТС заполнили площадку «Кибердом». Контент, разработанный нами, заполнил все экраны.  Интро ролики, видеовизитки спикеров, инфографика, тематические блоки и расписание - теперь команде художников есть о чем рассказать внукам. '

const tomskTitle = 'Brainstorm. Локация в метавселенной Roblox для Paraweb'
const tomskSubtitle = 'В Томске столько университетов, что им уже тесно. Мы поместили топовые университеты города в безграничную метавселенную. Теперь любой абитуриент может познакомиться с их историей, фишками, пообщаться с ректором. Заодно набрать баллы и обменять их на призы'

const urbanTitle = 'Moscow Urban Forum. Дополненная реальность в парке «Зарядье»'
const urbanSubtitle = 'Любой посетитель парка через свой телефон увидел гигантские 3В объекты. Показ мод на парящем подиуме, digital спектакль с историей дружбы между роботом и девочкой, интерактивный AR в небе. Пока птицы думали, что их все фотографируют, люди любовались дополненной реальностью над парком.'

const iriTitle = 'ВФМ 2024. Проект ИРИ «Digital Берёзы»'
const iriSubtitle = 'Медиаинсталляция в Олимпийском парке Сочи «Сириус».Разработка дизайна, застройка, техническое сопровождение от Brothers Production. 5 тематических дней, 3 концерта, более 100 позиций созданного  контента. Все это под присмотром тысяч студентов из разных стран на Всемирном Фестивале Молодежи.'

const hityTitle = '«Золотые хиты». Муз-тв'
const hitySubtitle = 'Концерт с ТВ трансляцией. Сделали контент на сценические экраны, сделали эфирную графику, даже ведущего сделали. Не живого, а 3D аватара, который повторял движения и мимику реального диктора.'

const predTitle = 'День Предпринимателя. Правительство Москвы.'
const predSubtitle = 'Ежегодное мероприятие стало уникальным. Благодаря контенту. Части сценических экранов включались только для отображения элементов «выходящих» за пределы контента. Создавалась иллюзия дополнительного объема и ощущение, что элементы парят в воздухе.'

const blankTitle = 'Название проекта'
const blantSubtitle = 'Абзац текста о проекте. Немного подробной информации для человека, который зашел на сайт magum.Немного подробной информации для человека, который зашел на сайт magum.'


function Portfolio() {
  const navigate = useNavigate();

  const [imageURLs, setImageURLs] = useState({
    'area1': [area1_img, videoUrl1, 'ДЕНЬ ПРЕДПРЕНИМАТЕЛЯ', '#concert #opening #motion',  { mainImg: mainPred, aboutImg: aboutPred, title: predTitle, subtitle: predSubtitle, gallery: [predFrame1, predFrame2, predFrame3, predFrame4]}], 
    'area2': [area2_img, videoUrl2, 'ROBLOX BRAIN STORM', '#game #modeling #university', { mainImg: mainImgTomsk, aboutImg: aboutImgTomsk, title: tomskTitle, subtitle: tomskSubtitle, gallery: [img1, img2, img3, img4]}],
    'area3': [area3_img, videoUrl3, 'ALFA DIGITAL', '#conf #motion #3D', { mainImg: mainAlpha, aboutImg: aboutAlpha, title: alphaTitle, subtitle: alphaSubtitle, gallery: [alphaFrame1, alphaFrame2, alphaFrame3, alphaFrame4]}],
    'area4': [area4_img, videoUrl4, 'ART PERFOMANCE ИРИ', '#3D #motion #concert', { mainImg: mainIri, aboutImg: aboutIri, title: iriTitle, subtitle: iriSubtitle, gallery: [iriFrame1, iriFrame2, iriFrame3, iriFrame4]}],
    'area5': [area5_img, videoUrl5, 'MTC CYBERSATION', '#online #conf #CGI', { mainImg: mainMts, aboutImg: aboutMts, title: mtsTitle, subtitle: mtsSubtitle, gallery: [mtsFrame]}],
    'area6': [area6_img, videoUrl6, 'ЗОЛОТЫЕ ХИТЫ МУЗ-ТВ', '#stage #motion #avatar', { mainImg: mainHity , aboutImg: aboutHity, title: hityTitle, subtitle: hitySubtitle, gallery: [hityFrame1, hityFrame2, hityFrame3, hityFrame4]}],
    'area7': [area7_img, videoUrl7, 'AR MUF', '#forum #modeling #Moscow', { mainImg: mainUrban, aboutImg: aboutUrban, title: urbanTitle, subtitle: urbanSubtitle, gallery: [urbanFrame1, urbanFrame2, urbanFrame3, urbanFrame4]}]
  })
  const [imageURLs2, setImageURLs2] = useState({
    'area1': [area1_img_2, area1_img_2, '100 ЛЕТ. РАССУЛ ГАМЗАТОВ', '#концерт #контент',  { mainImg: mainPred, aboutImg: aboutGamzatov, title: blankTitle, subtitle: blantSubtitle, gallery: [gamzatovFrame1, gamzatovFrame2, gamzatovFrame3, gamzatovFrame4]}], 
    'area2': [area2_img_2, area2_img_2, 'MOST CREATIVE AWARDS', '#conf #awards #content', { mainImg: mainImgTomsk, aboutImg: aboutCreative100, title: blankTitle, subtitle: blantSubtitle, gallery: [img1, img2, img3, img4]}],
    'area3': [area3_img_2, area3_img_2, 'BASIS DEVOPS CONF', '#expo #content #AR #gaming #bot', { mainImg: mainAlpha, aboutImg: aboutBasis, title: blankTitle, subtitle: blantSubtitle, gallery: [alphaFrame1, alphaFrame2, alphaFrame3, alphaFrame4]}],
    'area4': [area4_img_2, area4_img_2, 'ПЯТЕРОЧКА ROBLOX', '#metaverse #game design #modelling', { mainImg: mainIri, aboutImg: aboutPyaterochka, title: blankTitle, subtitle: blantSubtitle, gallery: [iriFrame1, iriFrame2, iriFrame3, iriFrame4]}],
    'area5': [area5_img_2, area5_img_2, 'SUPER CITY ROBLOX ', '#metaverse #game design #modeling #3D', { mainImg: mainMts, aboutImg: aboutDenZnaniy, title: blankTitle, subtitle: blantSubtitle, gallery: [mtsFrame]}],
    'area6': [area6_img_2, area6_img_2, 'ДЕНЬ ЗНАНИЙ В КРЕМЛЕ', '#концерт #эфирная графика #телеканал Россия', { mainImg: mainHity , aboutImg: aboutSuperCity, title: blankTitle, subtitle: blantSubtitle, gallery: [hityFrame1, hityFrame2, hityFrame3, hityFrame4]}],
    'area7': [area7_img_2, area7_img_2, 'OSTROVOK & HI-LOAD ', '#expo #content  #gaming #App', { mainImg: mainUrban, aboutImg: aboutOstrovok, title: blankTitle, subtitle: blantSubtitle, gallery: [urbanFrame1, urbanFrame2, urbanFrame3, urbanFrame4]}]
  })

  const handleClick = (area) => {
    const imageUrl = imageURLs[area];
    const props = { ...imageUrl[4] };

    Object.keys(props).forEach(key => {
      if (typeof props[key] === 'string' && !props[key].startsWith('http')) {
        props[key] = process.env.PUBLIC_URL + props[key];
      } else if (Array.isArray(props[key])) {
        props[key] = props[key].map(img => img.startsWith('http') ? img : process.env.PUBLIC_URL + img);
      }
    });
  
    localStorage.setItem('clickedImageProps', JSON.stringify(props));
    navigate(`/portfolio/${area}`, { state: { clickedImageProps: props } });
  }

  const handleClick2 = (area) => {
    const imageUrl = imageURLs2[area];
    const props = { ...imageUrl[4] };

    Object.keys(props).forEach(key => {
      if (typeof props[key] === 'string' && !props[key].startsWith('http')) {
        props[key] = process.env.PUBLIC_URL + props[key];
      } else if (Array.isArray(props[key])) {
        props[key] = props[key].map(img => img.startsWith('http') ? img : process.env.PUBLIC_URL + img);
      }
    });
  
    localStorage.setItem('clickedImageProps', JSON.stringify(props));
    navigate(`/portfolio/${area}`, { state: { clickedImageProps: props } });
  }

  return (
    <div className="portfolio">
      <div className="container">
        {Object.entries(imageURLs).map(([area, imageUrl]) => {
          return(<div  key={area} className={`portfolio__item ${area} area`} onClick={() => handleClick(area)}>
            <ImageWithVideoOnHover imageUrl={imageUrl[0]} videoUrl={imageUrl[1]} title={imageUrl[2]} subtitle={imageUrl[3]} />
          </div>)
        }
        )}
      </div>
      <div className="container2">
        {Object.entries(imageURLs2).map(([area, imageUrl]) => {
          return(<div  key={area} className={`portfolio__item ${area} area`} onClick={() => handleClick2(area)}>
            <ImageWithVideoOnHover imageUrl={imageUrl[0]} videoUrl={imageUrl[1]} title={imageUrl[2]} subtitle={imageUrl[3]} />
          </div>)
        }
        )}
      </div>
    </div>
  );
}

export default Portfolio;