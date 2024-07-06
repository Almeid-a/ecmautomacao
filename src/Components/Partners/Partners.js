import React from 'react';
import { useTranslation } from 'react-i18next';
import LenzeLogo from '../../img/LenzeLogo.png';
import WagoLogo from '../../img/WagoLogo.png';
import RockwellLogo from '../../img/RockwellLogo.png'; // Importe o logo da Rockwell Automation aqui

const Partners = ({ darkMode }) => {
  const { t } = useTranslation();

  const partners = [
    { id: 1, name: "Lenze", logo: LenzeLogo, url: "https://www.lenze.com/en-br" },
    { id: 2, name: "Wago", logo: WagoLogo, url: "https://www.wago.com/br/" },
    { id: 3, name: "Rockwell Automation", logo: RockwellLogo, url: "https://www.rockwellautomation.com/en-us.html" },
    // Adicione outros parceiros conforme necessário
  ];

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-gray-100 to-teal-100'} min-h-screen flex flex-col items-center transition-all duration-500 ease-in`}>
      <div className="text-center mt-8 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {t('header.partners')}
        </h2>
        <div className="flex justify-center gap-8 mt-8 mx-auto"> {/* Adicione mx-auto para centralizar */}
          {partners.map(partner => (
            <div key={partner.id} className={`flex justify-center items-center p-4 bg-white shadow-md rounded-lg transition duration-300 ease-in transform hover:scale-110`}>
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <img src={partner.logo} alt={partner.name} className="h-16 md:h-24" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
