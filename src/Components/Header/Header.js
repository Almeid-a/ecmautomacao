import React from 'react';
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from 'react-flag-kit';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, toggleDarkMode, changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <header className={`w-full py-2 md:py-4 flex justify-between items-center px-4 md:px-8 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-gray-100 to-teal-100'} transition-colors duration-300`}>
      <div className="text-2xl font-bold">{t('header.logo')}</div>
      <nav>
        <ul className="flex space-x-4 md:space-x-8">
          <li>
            <Link to="/" className={`text-${darkMode ? 'gray-200' : 'gray-600'} text-2xl`}>
              {t('header.home')}
            </Link>
          </li>
          <li>
            <Link to="/about" className={`text-${darkMode ? 'gray-200' : 'gray-600'} text-2xl`}>
              {t('header.about')}
            </Link>
          </li>
          <li>
            <Link to="/partners" className={`text-${darkMode ? 'gray-200' : 'gray-600'} text-2xl`}>
              {t('header.partners')}
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`text-${darkMode ? 'gray-200' : 'gray-600'} text-2xl`}>
              {t('header.contact')}
            </Link>
          </li>
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
  );
};

export default Header;