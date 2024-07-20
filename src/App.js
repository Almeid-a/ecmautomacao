import './App.css'

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import About from './Components/About/About';
import Partners from './Components/Partners/Partners';
import Clients from './Components/Clients/Client'
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Chama a função de mudança de idioma do i18n
  };

  return (
    <Router>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} changeLanguage={changeLanguage} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} changeLanguage={changeLanguage} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/partners" element={<Partners darkMode={darkMode} />} />
          <Route path="/clients" element={<Clients darkMode={darkMode} />} />
          <Route path="/gallery" element={<Gallery darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
