import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrow/Arrow';
import AdamiLogo from '../../img/AdamiLogo.png';
import TresIrmaosLogo from '../../img/TresIrmaosLogo.png';
import ColacrilLogo from '../../img/ColacrilLogo.png';
//import MendesLogo from '../../img/MendesLogo.png';
import BoPackingLogo from '../../img/BoPackingLogo.png';
import AresPeruLogo from '../../img/AresLogo.png';
import SudatiLogo from '../../img/SudatiLogo.svg';

const Clients = ({ darkMode }) => {
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

  const clients = [
    { id: 1, name: "Adami S/A", logo: AdamiLogo, url: "https://www.adami.com.br", description: t('clients.adamiDescription') },
    { id: 2, name: "Tres Irmãos", logo: TresIrmaosLogo, url: "https://www.tresirmaos.com.br", description: t('clients.tresIrmaosDescription') },
    { id: 3, name: "Colacril", logo: ColacrilLogo, url: "https://www.colacril.com.br", description: t('clients.colacrilDescription') },
    //{ id: 4, name: "Mendes", logo: MendesLogo, url: "https://www.mendes.com.br", description: t('clients.mendesDescription') },
    { id: 5, name: "Bo Packing", logo: BoPackingLogo, url: "https://www.bopacking.com", description: t('clients.boPackingDescription') },
    { id: 6, name: "Ares Perú", logo: AresPeruLogo, url: "https://www.aresperu.com", description: t('clients.aresPeruDescription') },
    { id: 7, name: "Sudati", logo: SudatiLogo, url: "https://www.sudati.com.br", description: t('clients.sudatiDescription') }
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
      <div className="mt-5 text-center w-full px-4 xl:mb-20">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="block md:hidden">
            {clients.map((client) => (
              <div key={client.id} className="mb-8 bg-white shadow-md rounded-lg p-4 text-black mx-4">
                <a href={client.url} target="_blank" rel="noopener noreferrer" className="block">
                  <img src={client.logo} alt={client.name} className="mx-auto mb-4 h-16" />
                  <p className="mt-2 text-sm">{client.description}</p>
                </a>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <Slider {...sliderSettings}>
              {clients.map((client) => (
                <div key={client.id} className="text-center">
                  <a href={client.url} target="_blank" rel="noopener noreferrer" className="block">
                    <img src={client.logo} alt={client.name} className="mx-auto mb-4 h-24 md:h-36" />
                    <p className="mt-2 text-base md:text-lg">{client.description}</p>
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

export default Clients;
