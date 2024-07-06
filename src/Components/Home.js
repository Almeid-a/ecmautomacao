import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = ({ darkMode }) => {
  const { t, i18n } = useTranslation();

  const activities = [
    { id: 1, title: t('activities.activity1.title'), description: t('activities.activity1.description') },
    { id: 2, title: t('activities.activity2.title'), description: t('activities.activity2.description') },
    { id: 3, title: t('activities.activity3.title'), description: t('activities.activity3.description') },
    // Adicione mais atividades conforme necessário
  ];

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-gray-100 to-teal-100'} flex flex-col items-center transition-all duration-500 ease-in min-h-max`}>
      <main className="flex flex-col md:flex-row items-center justify-center px-8 w-full mt-24">
        <div className={`flex-1 text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'} md:mr-8`}>
          <h1 className="text-center text-5xl font-bold mb-4">{t('main.hometitle')}</h1>
          <p className="text-center mb-6">{t('main.homedescription')}</p>
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
      <section className="w-full mt-20 mb-20 px-8">
        <h2 className={`text-3xl font-bold text-center mb-16 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{t('main.activitiesTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map(activity => (
            <div key={activity.id} className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'}`}>
              <h3 className="text-2xl font-bold mb-6">{activity.title}</h3>
              <p className="text-base">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
