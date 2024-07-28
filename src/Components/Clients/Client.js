import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrow/Arrow';
import AdamiLogo from '../../img/Clients/AdamiLogo.png';
import AdamiLogoDark from '../../img/Clients/AdamiLogoDark.png';
import TresIrmaosLogo from '../../img/Clients/TresIrmaosLogo.png';
import TresIrmaosLogoDark from '../../img/Clients/TresIrmaosLogoDark.png';
import ColacrilLogo from '../../img/Clients/ColacrilLogo.png';
import ColacrilLogoDark from '../../img/Clients/ColacrilLogoDark.png';
import MendesMaquinasLogo from '../../img/Clients/MendesMaquinasLogo.png'
import MendesMaquinasLogoDark from '../../img/Clients/MendesMaquinasLogoDark.png'
import BoPackingLogo from '../../img/Clients/BoPackingLogo.png';
import BoPackingLogoDark from '../../img/Clients/BoPackingLogoDark.png';
import AresPeruLogoDark from '../../img/Clients/AresLogo.png';
import AresPeruLogo from '../../img/Clients/AresPeruLogo.png';
import SudatiLogo from '../../img/Clients/SudatiLogo.png';
import SudatiLogoDark from '../../img/Clients/SudatiLogoDark.png';

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
    { id: 1, name: "Adami S/A", logo: darkMode ? AdamiLogoDark : AdamiLogo, url: "https://adami.com.br", description: t('clients.adamiDescription') },
    { id: 2, name: "Tres Irmãos", logo: darkMode ? TresIrmaosLogoDark : TresIrmaosLogo, url: "https://tresirmaos.net", description: t('clients.tresIrmaosDescription') },
    { id: 3, name: "Colacril", logo: darkMode ? ColacrilLogoDark : ColacrilLogo, url: "https://www.colacril.com.br", description: t('clients.colacrilDescription') },
    { id: 4, name: "Mendes", logo: darkMode? MendesMaquinasLogoDark : MendesMaquinasLogo, url: "https://mendesmaquinas.com.br", description: t('clients.mendesDescription') },
    { id: 5, name: "Bo Packing", logo: darkMode ? BoPackingLogoDark : BoPackingLogo, url: "https://bopackaging.com.br/en/", description: t('clients.boPackingDescription') },
    { id: 6, name: "Ares Perú", logo: darkMode ? AresPeruLogoDark : AresPeruLogo, url: "https://aresperu.com.pe", description: t('clients.aresPeruDescription') },
    { id: 7, name: "Sudati", logo: darkMode ? SudatiLogoDark : SudatiLogo, url: "https://www.sudatimdf.com.br", description: t('clients.sudatiDescription') }
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
            {clients.map((client) => (
              <div key={client.id} className={`mb-8 p-4 border ${darkMode ? 'border-gray-400 text-gray-200' : 'border-teal-500 text-black'} rounded-lg mx-4`}>
                <a href={client.url} target="_blank" rel="noopener noreferrer" className="block">
                  <img src={client.logo} alt={client.name} className="mx-auto mb-4 h-16" />
                  <p className="mt-5 text-sm">{client.description}</p>
                </a>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <Slider {...sliderSettings}>
              {clients.map((client) => (
                <div key={client.id} className="text-center">
                  <a href={client.url} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg">
                    <img src={client.logo} alt={client.name} className="mx-auto mb-4 h-24 md:h-36" />
                    <p className="mt-10 text-lg md:text-xl">{client.description}</p>
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
