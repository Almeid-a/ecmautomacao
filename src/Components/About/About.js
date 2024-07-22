import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Vision from '../../img/Vision.png';
import Mission from '../../img/Mission.png';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)');

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

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black text-white' : 'bg-gradient-to-r from-gray-100 to-teal-100 text-black'} flex flex-col items-center justify-center min-h-screen`}>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-5 px-4 w-full max-w-7xl mb-5 xl:mb-14 md:mt-5"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-9">{t('about.abouttitle')}</h1>
        <p className="text-lg md:text-xl">{t('about.aboutdescription')}</p>
      </motion.div>

      <div className="text-center mt-5 px-4 w-full max-w-7xl mb-5 xl:mb-14 md:mt-5">
        <div className="flex flex-col md:flex-row items-center mb-14">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={Mission}
            alt="Our Mission"
            className="w-full rounded-lg mb-8 md:w-1/3 lg:w-1/4 md:mb-0 md:mr-8 hidden md:block"
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-9">{t('about.compromissetitle')}</h2>
            <p className="text-lg md:text-xl">{t('about.compromissedescription')}</p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-5 xl:mb-14">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">{t('about.missiontitle')}</h2>
            <p className="text-lg md:text-xl">{t('about.missiondescription')}</p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={Vision}
            alt="Our Vision"
            className="w-full rounded-lg mb-8 md:w-1/3 lg:w-1/4 md:mb-0 md:ml-8 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
