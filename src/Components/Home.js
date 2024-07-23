import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import imageslider1 from '../img/industria.jpg';
import imageslider2 from '../img/industria2.jpg';
import imageslider3 from '../img/industria3.jpg';
import ShowRoom1 from '../img/ShowRoom/ShowRoom1.webp';
import ShowRoom2 from '../img/ShowRoom/ShowRoom2.webp';
import ShowRoom3 from '../img/ShowRoom/ShowRoom3.webp';
import ShowRoom4 from '../img/ShowRoom/ShowRoom4.webp';
import ShowRoom5 from '../img/ShowRoom/ShowRoom5.webp';
import ShowRoom6 from '../img/ShowRoom/ShowRoom6.webp';
import ShowRoom7 from '../img/ShowRoom/ShowRoom7.webp';
import ShowRoom8 from '../img/ShowRoom/ShowRoom8.webp';
import ShowRoom9 from '../img/ShowRoom/ShowRoom9.webp';
import ShowRoom10 from '../img/ShowRoom/ShowRoom10.webp';
import ShowRoom11 from '../img/ShowRoom/ShowRoom11.webp';
import ShowRoom12 from '../img/ShowRoom/ShowRoom12.webp';
import ShowRoom13 from '../img/ShowRoom/ShowRoom13.webp';
import ShowRoom14 from '../img/ShowRoom/ShowRoom14.webp';
import ShowRoom15 from '../img/ShowRoom/ShowRoom15.webp';
import ShowRoom16 from '../img/ShowRoom/ShowRoom16.webp';
import ShowRoom17 from '../img/ShowRoom/ShowRoom17.webp';
import ShowRoom18 from '../img/ShowRoom/ShowRoom18.webp';
import ShowRoom19 from '../img/ShowRoom/ShowRoom19.webp';
import { preloadImages } from '../utils/preloadImages';

const Home = ({ darkMode }) => {
  const { t } = useTranslation();

  const segments = [
    { icon: '🌲', text: t('main.segmentWood') },
    { icon: '🍴', text: t('main.segmentFood') },
    { icon: '🚜', text: t('main.segmentAgroindustry') }
  ];

  const services = [
    { text: t('main.serviceManufacturing') },
    { text: t('main.serviceRepairComputers') },
    { text: t('main.serviceMaintenance') }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  const images = [imageslider1, imageslider2, imageslider3];
  const galleryImages = [ShowRoom1, ShowRoom2, ShowRoom3, ShowRoom4, ShowRoom5, ShowRoom6, ShowRoom7, ShowRoom8, ShowRoom9, ShowRoom10, ShowRoom11, ShowRoom12, ShowRoom13, ShowRoom14, ShowRoom15, ShowRoom16, ShowRoom17, ShowRoom18, ShowRoom19];

  useEffect(() => {
    preloadImages(galleryImages);
  }, []);

  return (
    <div className={`bg-gradient-to-r ${darkMode ? 'from-gray-800 to-black text-gray-200' : 'from-gray-100 to-teal-100 text-gray-800'} min-h-screen flex flex-col items-center transition-all duration-500 ease-in`}>
      <main className="flex flex-col xl:flex-row items-center justify-center px-8 w-full mt-5">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex-1 text-center md:mr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">{t('main.hometitle')}</h1>
          <p className="mb-5 text-xl">{t('main.homedescription')}</p>
          <div className="flex justify-center">
            <Link to="/contact">
              <button className={`px-6 py-3 rounded ${darkMode ? 'bg-teal-600 text-white' : 'bg-teal-500 text-white'} mt-4`}>
                {t('main.contactus')}
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex-1 mt-10 md:mt-7 flex md:justify-center">
          <Slider {...sliderSettings} className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[800px]">
            {images.map((src, index) => (
              <motion.div key={index} initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[350px] md:h-[450px] object-cover rounded-lg shadow-md"/>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </main>

      <section className="w-full mt-5 mb-5 xl:mb-20 px-8 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mt-8 px-4 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('main.segmentsTitle')}</h2>
          <div className="flex flex-wrap justify-center">
            {segments.map((segment, index) => (
              <motion.div key={index} initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`m-4 p-4 border ${darkMode ? 'border-gray-400' : 'border-teal-500'} rounded text-center w-60`}>
                <div className="text-5xl mb-2">{segment.icon}</div>
                <div>{segment.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mt-8 px-4 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('main.servicesTitle')}</h2>
          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`m-4 p-4 border ${darkMode ? 'border-gray-400' : 'border-teal-500'} rounded text-center w-60`}>
                <div>{service.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
