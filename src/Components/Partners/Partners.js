import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrow/Arrow';
import LenzeLogo from '../../img/LenzeLogo.png';
import WagoLogo from '../../img/WagoLogo.png';
import RockwellLogo from '../../img/RockwellLogo.png';
import SiemensLogo from '../../img/SiemensLogo.png';
import UniversalRobotsLogo from '../../img/UniversalRobotsLogo.png'

const Partners = ({ darkMode }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)'); // Tamanho de tela 'md' em Tailwind CSS

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
    { id: 1, name: "Lenze", logo: LenzeLogo, url: "https://www.lenze.com/en-br", description: t('partners.lenzeDescription') },
    { id: 2, name: "Wago", logo: WagoLogo, url: "https://www.wago.com/br/", description: t('partners.wagoDescription') },
    { id: 3, name: "Rockwell Automation", logo: RockwellLogo, url: "https://www.rockwellautomation.com/en-us.html", description: t('partners.rockwellDescription') },
    { id: 4, name: "Siemens", logo: SiemensLogo, url: "https://www.siemens.com/br/pt.html", description: t('partners.siemensDescription') },
    { id: 5, name: "Universal Robots", logo: UniversalRobotsLogo, url: "https://www.universal-robots.com", description: t('partners.universalDescription')}
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
      <div className="text-center w-full px-4 mb-20">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="block md:hidden">
            {partners.map((partner) => (
              <div key={partner.id} className="mb-8 bg-white shadow-md rounded-lg p-4 text-black mx-4">
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                  <img src={partner.logo} alt={partner.name} className="mx-auto mb-4 h-16" />
                  <h3 className="text-base font-bold">{partner.name}</h3>
                  <p className="mt-2 text-sm">{partner.description}</p>
                </a>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <Slider {...sliderSettings}>
              {partners.map((partner) => (
                <div key={partner.id} className="text-center">
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                    <img src={partner.logo} alt={partner.name} className="mx-auto mb-4 h-24 md:h-36" />
                    <h3 className="text-lg md:text-xl font-bold">{partner.name}</h3>
                    <p className="mt-2 text-base md:text-lg">{partner.description}</p>
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

