import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = ({ darkMode }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  const googleMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4959593157327!2d-50.1524864490183!3d-25.08696264411426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef58869d6fcd91%3A0x1c03b7247e6c1e75!2sR.%20Alfazema%2C%20114%20-%20Contorno%2C%20Ponta%20Grossa%20-%20PR%2C%2084060-040%2C%20Brazil!5e0!3m2!1sen!2sus!4v1683210842651!5m2!1sen!2sus`;

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=R.%20Alfazema%2C%20114%20-%20Contorno%2C%20Ponta%20Grossa%20-%20PR%2C%2084060-040%2C%20Brazil', '_blank');
  };

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-gray-100 to-teal-100'} flex items-start justify-center transition-all duration-500 ease-in min-h-max`}>
      <div className="flex flex-col md:flex-row w-full p-4 md:p-8 overflow-auto mb-28 mt-2">
        <div className="w-full md:w-3/4 md:p-4 cursor-pointer flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2">{t('main.localizationtitle')}</h2>
          <iframe
            width="100%"
            height="700"
            frameBorder="0"
            style={{ border: 0 }}
            src={googleMapSrc}
            allowFullScreen
            title="Google Maps"
          ></iframe>
        </div>

        <div className="w-full md:w-1/4 md:p-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">{t('main.formtitle')}</h2>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4 w-full md:w-96">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                {t('main.contact.name')}
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder={t('main.contact.name')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                {t('main.contact.email')}
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder={t('main.contact.email')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                {t('main.contact.phone')}
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder={t('main.contact.phone')}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                {t('main.contact.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t('main.contact.message')}
                rows="8"
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {t('main.contact.send')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
