import React from 'react';
import { useTranslation } from 'react-i18next';
import Vision from '../../img/Vision.png';
import Mission from '../../img/Mission.png';

const About = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black text-white' : 'bg-gradient-to-r from-gray-100 to-teal-100 text-black'} flex flex-col items-center justify-center min-h-screen`}>
      <div className="text-center mt-5 px-4 w-full max-w-7xl mb-14 md:mt-24 ">
        <h1 className="text-3xl md:text-5xl font-bold mb-9">{t('about.abouttitle')}</h1>
        <p className="text-lg md:text-xl mb-14">{t('about.aboutdescription')}</p>
        
        <div className="flex flex-col md:flex-row items-center mb-14">
          <img src={Mission} alt="Our Mission" className="w-full rounded-lg mb-8 md:w-1/3 lg:w-1/4 md:mb-0 md:mr-8 hidden md:block" />
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-9">{t('about.compromissetitle')}</h2>
            <p className="text-lg md:text-xl">{t('about.compromissedescription')}</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mb-14">
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">{t('about.missiontitle')}</h2>
            <p className="text-lg md:text-xl">{t('about.missiondescription')}</p>
          </div>
          <img src={Vision} alt="Our Vision" className="w-full rounded-lg mb-8 md:w-1/3 lg:w-1/4 md:mb-0 md:ml-8 hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default About;
