import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import imageslider1 from '../img/industria.png';
import imageslider2 from '../img/industria2.jpeg';
import imageslider3 from '../img/industria3.jpg';

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

  return (
    <div className={`bg-gradient-to-r ${darkMode ? 'from-gray-800 to-black text-gray-200' : 'from-gray-100 to-teal-100 text-gray-800'} min-h-screen flex flex-col items-center transition-all duration-500 ease-in`}>
      <main className="flex flex-col xl:flex-row items-center justify-center px-8 w-full mt-5">
        <div className="flex-1 text-center md:mr-8">
          <h1 className="text-5xl font-bold mb-4">{t('main.hometitle')}</h1>
          <p className="mb-6 text-xl">{t('main.homedescription')}</p>
          <div className="flex justify-center">
            <Link to="/contact">
              <button className={`px-6 py-3 rounded ${darkMode ? 'bg-teal-600 text-white' : 'bg-teal-500 text-white'} mt-4`}>
                {t('main.contactus')}
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-7 flex md:justify-center">
          <Slider {...sliderSettings} className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[800px]">
            {images.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[350px] md:h-[450px] object-cover rounded-lg shadow-md"/>
              </div>
            ))}
          </Slider>
        </div>
      </main>

      <section className="w-full mt-10 mb-20 px-8 flex flex-col items-center">
        <div className="mt-8 px-4 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('main.segmentsTitle')}</h2>
          <div className="flex flex-wrap justify-center">
            {segments.map((segment, index) => (
              <div key={index} className="m-4 p-4 border rounded text-center w-60">
                <div className="text-5xl mb-2">{segment.icon}</div>
                <div>{segment.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 px-4 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('main.servicesTitle')}</h2>
          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <div key={index} className="m-4 p-4 border rounded text-center w-60">
                <div>{service.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
