import React, { useState } from 'react';
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from 'react-flag-kit';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-white to-teal-100'} min-h-screen flex flex-col items-center`}>
      <header className="w-full py-4 flex justify-between items-center px-8">
        <div className="text-2xl font-bold">{t('header.logo')}</div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#" className={`text-${darkMode ? 'gray-200' : 'gray-600'} text-2xl`}>{t('header.contact')}</a></li>
            <li><a href="#" className={`text-${darkMode ? 'gray-200' : 'gray-600'} text-2xl`}>{t('header.partners')}</a></li>
            <li><a href="#" className={`text-${darkMode ? 'gray-200' : 'gray-600'} text-2xl`}>{t('header.about')}</a></li>
          </ul>
        </nav>
        <div className="flex justify-center items-center space-x-4">
          <Switch 
            onChange={toggleDarkMode} 
            checked={darkMode} 
            offColor="#ddd" 
            onColor="#333" 
            checkedIcon={<div className="flex justify-center items-center h-full"><FaSun className="text-yellow-500" size={20} /></div>} 
            uncheckedIcon={<div className="flex justify-center items-center h-full"><FaMoon className="text-blue-500" size={20} /></div>}
            handleDiameter={28}
            height={40}
            width={80}
            className="react-switch"
          />
          <button onClick={() => changeLanguage('en')} className={`text-${darkMode ? 'gray-200' : 'gray-600'} text-2xl`}>
            <FlagIcon code="US" size={20} />
          </button>
          <button onClick={() => changeLanguage('pt')} className={`text-${darkMode ? 'gray-200' : 'gray-600'} text-2xl`}>
            <FlagIcon code="BR" size={20} />
          </button>
        </div>
      </header>
      
      <main className="flex flex-col md:flex-row items-center mt-24 px-8 w-full max-w-screen-xl mx-auto">
        <div className={`flex-1 text-center md:text-left ${darkMode ? 'text-gray-200' : 'text-gray-800'} md:mr-8`}>
          <h1 className="text-5xl font-bold mb-4">{t('main.title')}</h1>
          <p className="mb-6">{t('main.description')}</p>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <img src="https://via.placeholder.com/300" alt="Phone" className="w-full h-auto max-w-md mx-auto"/>
        </div>
      </main>
    </div>
  );
}

export default Home;
