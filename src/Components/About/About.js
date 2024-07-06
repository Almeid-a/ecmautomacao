import React from 'react';
import { useTranslation } from 'react-i18next';

const About = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-gray-100 to-teal-100'} min-h-screen flex flex-col items-center`}>
      <div className="text-center mt-8 px-4">
        <h1 className="text-5xl font-bold mb-4">{t('main.hometitle')}</h1>
        <p className="text-lg md:text-xl">
          {t('main.aboutdescription')}
        </p>
        <h1 className="text-5xl font-bold mb-4">{t('main.compromissetitle')}</h1>
        <p className="text-lg md:text-xl">
          {t('main.compromissedescription')}
        </p>
        <h1 className="text-5xl font-bold mb-4">{t('main.missiontitle')}</h1>
        <p className="text-lg md:text-xl">
          {t('main.missiondescription')}
        </p>
      </div>
    </div>
  );
};

export default About;
