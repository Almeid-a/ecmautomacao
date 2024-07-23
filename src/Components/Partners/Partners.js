import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrow/Arrow';
import LenzeLogo from '../../img/Partners/LenzeLogo.png';
import WagoLogo from '../../img/Partners/WagoLogo.png';
import RockwellLogo from '../../img/Partners/RockwellLogo.png';
import SiemensLogo from '../../img/Partners/SiemensLogo.png';
import UniversalRobotsLogo from '../../img/Partners/UniversalRobotsLogo.png';
import UniversalRobotsLogoDark from '../../img/Partners/UniversalRobotsLogoDark.png';

const Partners = ({ darkMode }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    };

    if (mediaQuery.matches) {
      document.body.classList.add('no-scroll');
    }

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      document.body.classList.remove('no-scroll');
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const partners = [
    { id: 1, name: 'Lenze', logo: LenzeLogo, url: "https://www.lenze.com/en-br", description: t('partners.lenzeDescription') },
    { id: 2, name: 'Wago', logo: WagoLogo, url: "https://www.wago.com/br/", description: t('partners.wagoDescription') },
    { id: 3, name: 'Rockwell Automation', logo: RockwellLogo, url: "https://www.rockwellautomation.com/en-us.html", description: t('partners.rockwellDescription') },
    { id: 4, name: 'Siemens', logo: SiemensLogo, url: "https://www.siemens.com/br/pt.html", description: t('partners.siemensDescription') },
    { id: 5, name: 'Universal Robots', logo: darkMode ? UniversalRobotsLogoDark : UniversalRobotsLogo, url: "https://www.universal-robots.com", description: t('partners.universalDescription')}
  ];

  const sliderSettings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow darkMode={darkMode} />,
    prevArrow: <PrevArrow darkMode={darkMode} />
  };

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black text-white' : 'bg-gradient-to-r from-gray-100 to-teal-100 text-black'} min-h-screen flex flex-col items-center justify-center transition-all duration-500 ease-in md:overflow-hidden`}>
      <div className="mt-5 text-center w-full px-4 md:mb-20">
        <div className="relative w-full max-w-3xl lg:max-w-5xl mx-auto">
          <div className="block md:hidden">
            {partners.map((partner) => (
              <div key={partner.id} className={`mb-8 p-4 border ${darkMode ? 'border-gray-400 text-gray-200' : 'border-teal-500 text-black'} rounded-lg mx-4`}>
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                  <img src={partner.logo} alt={partner.name} className="mx-auto mb-4 h-16" />
                  <p className="mt-5 text-sm">{partner.description}</p>
                </a>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <Slider {...sliderSettings}>
              {partners.map((partner) => (
                <div key={partner.id} className="text-center">
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className={`block p-4 ${darkMode ? 'border-gray-400 md:border-none' : 'border-teal-500 md:border-none'} rounded-lg`}>
                    <img src={partner.logo} alt={partner.name} className="mx-auto mb-4 h-24 md:h-36" />
                    <p className="mt-10 text-lg md:text-xl">{partner.description}</p>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
