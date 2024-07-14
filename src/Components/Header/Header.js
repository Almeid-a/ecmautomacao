import React, { useState, useRef, useEffect } from 'react';
import Switch from 'react-switch';
import { FaSun, FaMoon, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from 'react-flag-kit';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, toggleDarkMode, changeLanguage }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsMenuOpen(false); // Fechar o menu após selecionar o idioma
  };

  return (
    <>
      <header className={`w-full py-2 md:py-4 px-4 md:px-8 flex justify-between items-center ${darkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-gray-100 to-teal-100'} transition-colors duration-300`}>
        <div className="text-2xl font-bold">
          <Link to="/" className={`text-${darkMode ? 'gray-200' : 'gray-900'} hover:text-teal-500`}>
            {t('header.logo')}
          </Link>
        </div>
        <div className="lg:hidden">
          <button className={`text-${darkMode ? 'gray-200' : 'gray-900'} text-2xl focus:outline-none`} onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes /> : '☰'}
          </button>
        </div>
        <nav
          ref={menuRef}
          className={`fixed lg:static top-0 right-0 h-auto w-64 max-h-screen ${
            darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-900'
          } shadow-lg transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 z-20 rounded-bl-lg pb-8 lg:pb-0 lg:flex lg:items-center lg:bg-transparent lg:shadow-none lg:w-auto lg:h-auto lg:relative lg:top-0 lg:right-0`}>
          <ul className={`flex flex-col items-center lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 mt-4 lg:mt-0`}>
            {isMenuOpen && (
              <li className="self-end lg:hidden absolute top-4 right-4">
                <button className="text-2xl focus:outline-none" onClick={handleMenuToggle}>
                  <FaTimes />
                </button>
              </li>
            )}
            <li>
              <Link to="/" className={`text-2xl`} onClick={() => setIsMenuOpen(false)}>
                {t('header.home')}
              </Link>
            </li>
            <li>
              <Link to="/about" className={`text-2xl`} onClick={() => setIsMenuOpen(false)}>
                {t('header.about')}
              </Link>
            </li>
            <li>
              <Link to="/partners" className={`text-2xl`} onClick={() => setIsMenuOpen(false)}>
                {t('header.partners')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`text-2xl`} onClick={() => setIsMenuOpen(false)}>
                {t('header.contact')}
              </Link>
            </li>
            <li className="flex space-x-4">
              <button onClick={() => handleLanguageChange('en')} className={`text-2xl focus:outline-none`}>
                <FlagIcon code="US" size={20} />
              </button>
              <button onClick={() => handleLanguageChange('pt')} className={`text-2xl focus:outline-none`}>
                <FlagIcon code="BR" size={20} />
              </button>
              <button onClick={() => handleLanguageChange('es')} className={`text-2xl focus:outline-none`}>
                <FlagIcon code="ES" size={20} />
              </button>
            </li>
            <li className="mt-4 lg:mt-0">
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
                className="react-switch focus:outline-none"
              />
            </li>
          </ul>
        </nav>
      </header>
      {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden" onClick={handleMenuToggle}></div>}
    </>
  );
};

export default Header;
