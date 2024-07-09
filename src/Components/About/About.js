import React from 'react';
import { useTranslation } from 'react-i18next';
import Vision from '../../img/Vision.png';
import Mission from '../../img/Mission.png';

const About = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black text-white' : 'bg-gradient-to-r from-gray-100 to-teal-100 text-black'} flex flex-col items-center justify-center min-h-max`}>
      <div className="text-center mt-24 px-4 w-full max-w-7xl mb-24">
        <h1 className="text-5xl font-bold mb-9">{t('main.hometitle')}</h1>
        <p className="text-xl md:text-2xl mb-14">{t('main.aboutdescription')}</p>
        
        <div className="flex flex-col md:flex-row items-center mb-14">
          <img src={Mission} alt="Our Mission" className="w-full md:w-1/4 rounded-lg mb-8 md:mb-0 md:mr-8" />
          <div className="w-full md:w-3/4">
            <h1 className="text-5xl font-bold mb-9">{t('main.compromissetitle')}</h1>
            <p className="text-xl md:text-2xl">{t('main.compromissedescription')}</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mb-14">
          <div className="w-full md:w-3/4">
            <h1 className="text-5xl font-bold mb-8">{t('main.missiontitle')}</h1>
            <p className="text-xl md:text-2xl">{t('main.missiondescription')}</p>
          </div>
          <img src={Vision} alt="Our Vision" className="w-full md:w-1/4 rounded-lg mb-8 md:mb-0 md:ml-8" />
        </div>
      </div>
    </div>
  );
};

export default About;
