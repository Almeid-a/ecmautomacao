import React from 'react';
import { useTranslation } from 'react-i18next';

const About = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-gray-100 to-teal-100'} flex flex-col items-center justify-center min-h-max`}>
      <div className="text-center mt-24 px-4 w-full max-w-7xl mb-28">
        <h1 className="text-5xl font-bold mb-8">{t('main.hometitle')}</h1>
        <p className="text-xl md:text-2xl mb-14">{t('main.aboutdescription')}</p>
        <h1 className="text-5xl font-bold mb-8">{t('main.compromissetitle')}</h1>
        <p className="text-xl md:text-2xl mb-14">{t('main.compromissedescription')}</p>
        <h1 className="text-5xl font-bold mb-8">{t('main.missiontitle')}</h1>
        <p className="text-xl md:text-2xl mb-14">{t('main.missiondescription')}</p>
      </div>
    </div>
  );
};

export default About;
