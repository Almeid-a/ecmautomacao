import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrow/Arrow';
import LenzeLogo from '../../img/LenzeLogo.png';
import WagoLogo from '../../img/WagoLogo.png';
import RockwellLogo from '../../img/RockwellLogo.png';
import SiemensLogo from '../../img/SiemensLogo.png';

const Partners = ({ darkMode }) => {
  const { t } = useTranslation();

  const partners = [
    { id: 1, name: "Lenze", logo: LenzeLogo, url: "https://www.lenze.com/en-br", description: t('partners.lenzeDescription') },
    { id: 2, name: "Wago", logo: WagoLogo, url: "https://www.wago.com/br/", description: t('partners.wagoDescription') },
    { id: 3, name: "Rockwell Automation", logo: RockwellLogo, url: "https://www.rockwellautomation.com/en-us.html", description: t('partners.rockwellDescription') },
    { id: 4, name: "Siemens", logo: SiemensLogo, url: "https://www.siemens.com/br/pt.html", description: t('partners.siemensDescription') },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow darkMode={darkMode} />,
    prevArrow: <PrevArrow darkMode={darkMode} />
  };

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black text-white' : 'bg-gradient-to-r from-gray-100 to-teal-100 text-black'} min-h-max flex flex-col items-center justify-center transition-all duration-500 ease-in`}>
      <div className="text-center w-full mt-72 mb-96">
        <div className="relative w-full max-w-5xl mx-auto">
          <Slider {...sliderSettings}>
            {partners.map((partner) => (
              <div key={partner.id} className="text-center">
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                  <img src={partner.logo} alt={partner.name} className="mx-auto mb-8 h-36 md:h-48" />
                  <h3 className="text-xl md:text-2xl font-bold">{partner.name}</h3>
                  <p className="mt-2">{partner.description}</p>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners;
