import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = ({ darkMode }) => {
  const { t } = useTranslation();

  return (
    <footer className={`w-full py-8 px-4 md:px-6 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-black text-white' : 'bg-gradient-to-r from-gray-100 to-teal-100 text-black'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Redes Sociais */}
        <div className="flex space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Links de Navegação */}
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

        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ECM Automação Industrial. {t('footer.rightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
