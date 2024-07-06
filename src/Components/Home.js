import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = ({ darkMode }) => {
  const { t, i18n } = useTranslation();

  const segments = [
    { icon: '🌲', text: t('main.segmentWood') },
    { icon: '🍴', text: t('main.segmentFood') },
    { icon: '🚜', text: t('main.segmentAgroindustry') }
  ];

  const services = [
    { text: t('main.serviceManufacturing') },
    { text: t('main.serviceRepairComputers') },
    { text: t('main.serviceMaintenance') }
  ];

  return (
    <div className={`bg-gradient-to-r ${darkMode ? 'from-gray-800 to-black text-gray-200' : 'from-gray-100 to-teal-100 text-gray-800'} flex flex-col items-center transition-all duration-500 ease-in min-h-screen`}>
      <main className="flex flex-col md:flex-row items-center justify-center px-8 w-full mt-24">
        <div className={`flex-1 text-center md:mr-8`}>
          <h1 className="text-5xl font-bold mb-4">{t('main.hometitle')}</h1>
          <p className="mb-6">{t('main.homedescription')}</p>
          <div className="flex justify-center">
            <button className={`px-6 py-3 rounded ${darkMode ? 'bg-teal-600 text-white' : 'bg-teal-500 text-white'} mt-4`}>
              {t('main.contactus')}
            </button>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-7 flex justify-center">
          <img src="https://via.placeholder.com/300" alt="Phone" className="w-full h-auto max-w-md"/>
        </div>
      </main>
      <section className="w-full mt-20 mb-20 px-8 flex flex-col items-center">
        <div className="mt-8 px-4 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('main.segmentsTitle')}</h2>
          <div className="flex flex-wrap justify-center">
            {segments.map((segment, index) => (
              <div key={index} className="m-4 p-4 border rounded text-center w-60">
                <div className="text-5xl mb-2">{segment.icon}</div>
                <div>{segment.text}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 px-4 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('main.servicesTitle')}</h2>
          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <div key={index} className="m-4 p-4 border rounded text-center w-60">
                <div>{service.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
