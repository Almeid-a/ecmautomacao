import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaEnvelope } from 'react-icons/fa';
import logo from '../../img/EcmLogo.png';
import logoDark from '../../img/EcmLogoDark.png';

const Footer = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <footer className={`w-full py-8 px-4 md:px-6 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-black text-white' : 'bg-gradient-to-r from-gray-100 to-teal-100 text-black'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <img src={darkMode ? logo : logoDark} alt="Logo" className="h-16 w-auto mb-4" /> {/* Adicione esta linha */}
        <ul className="flex flex-col md:flex-row items-center md:space-x-4 mb-4">
          <li>
            <Link to="/" className="text-lg hover:text-teal-500">{t('footer.home')}</Link>
          </li>
          <li>
            <Link to="/about" className="text-lg hover:text-teal-500">{t('footer.about')}</Link>
          </li>
          <li>
            <Link to="/clients" className="text-lg hover:text-teal-500">{t('footer.clients')}</Link>
          </li>
          <li>
            <Link to="/partners" className="text-lg hover:text-teal-500">{t('footer.partners')}</Link>
          </li>
          <li>
            <Link to="/gallery" className="text-lg hover:text-teal-500">{t('footer.gallery')}</Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg hover:text-teal-500">{t('footer.contact')}</Link>
          </li>
        </ul>

        <div className="flex items-center mb-4">
          <FaEnvelope className="mr-2 text-xl" />
          <span className="text-lg">contato@ecmautomacao.com.br</span>
        </div>

        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ECM Automação Industrial. {t('footer.rightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
