import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contact = ({ darkMode }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      // Permitir apenas letras e espaços
      const regex = /^[a-zA-Z\s]*$/;
      if (!regex.test(value)) {
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: false,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
    setFormErrors({
      ...formErrors,
      phone: false,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requiredFields = ['name', 'email', 'phone', 'message'];
    let hasErrors = false;

    const updatedErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        updatedErrors[field] = true;
        hasErrors = true;
      } else {
        updatedErrors[field] = false;
      }
    });

    if (hasErrors) {
      setFormErrors(updatedErrors);
      toast.error(t('Por favor, preencha todos os campos.'));
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error(t('Por favor, insira um email válido.'));
      return;
    }

    try {
      const response = await emailjs.send(
        'service_rpvhw8z',
        //'service_xx96w7v',
        'template_bixlcy7',
        //'template_aokg7dw',
        formData,
        '-JGiN-XwpxTlK7mcY'
        //'MVARxd9rxtBSLFxUF'
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      toast.success(t('Email enviado com sucesso!'));
    } catch (error) {
      toast.error(
        t(
          'Erro ao enviar o email. Por favor, tente novamente mais tarde.'
        )
      );
    }
  };

  const googleMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4959593157327!2d-50.1524864490183!3d-25.08696264411426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef58869d6fcd91%3A0x1c03b7247e6c1e75!2sR.%20Alfazema%2C%20114%20-%20Contorno%2C%20Ponta%20Grossa%20-%20PR%2C%2084060-040%2C%20Brazil!5e0!3m2!1sen!2sus!4v1683210842651!5m2!1sen!2sus`;

  return (
    <div className={`bg-gradient-to-r ${darkMode ? 'from-gray-800 to-black text-gray-900': 'from-gray-100 to-teal-100 text-gray-800'} min-h-screen flex justify-center p-8 transition-all duration-500 ease-in overflow-hidden`}>
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg md:mb-20">
        <div className="md:w-1/3 p-8">
          <h2 className="text-3xl font-bold mb-4">{t('contact.formtitle')}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className={`mb-4 ${formErrors.name ? 'border-red-500' : ''}`}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${
                  formErrors.name ? 'border-red-500' : ''
                }`}
                type="text"
                placeholder={t('contact.name')}
              />
            </div>
            <div className={`mb-4 ${formErrors.email ? 'border-red-500' : ''}`}>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${
                  formErrors.email ? 'border-red-500' : ''
                }`}
                type="email"
                placeholder={t('contact.email')}
              />
            </div>
            <div className={`mb-4 ${formErrors.phone ? 'border-red-500' : ''}`}>
              <PhoneInput
                country={'br'}
                onlyCountries={['br']}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: '100%',
                  paddingLeft: '45px',
                }}
                containerStyle={{ border: formErrors.phone ? '1px solid red' : '1px solid #ced4da', borderRadius: '4px' }}
                inputClass={`w-full p-2 border rounded ${
                  formErrors.phone ? 'border-red-500' : ''
                }`}
                buttonStyle={{
                  borderTopLeftRadius: '4px',
                  borderBottomLeftRadius: '4px',
                  borderTopRightRadius: '0px',
                  borderBottomRightRadius: '0px',
                }}
              />
            </div>
            <div className={`mb-6 ${formErrors.message ? 'border-red-500' : ''}`}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${
                  formErrors.message ? 'border-red-500' : ''
                }`}
                rows="4"
                placeholder={t('contact.message')}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className={`${
                  darkMode ? 'bg-teal-600 text-white' : 'bg-teal-500 text-white'
                } font-bold py-2 px-4 rounded hover:bg-teal-700`}
              >
                {t('contact.send')}
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-2/3 bg-gray-100 p-8">
          <div className="mb-4">
            <FaMapMarkerAlt
              className={`inline-block mr-2 ${
                darkMode ? 'text-teal-600' : 'text-teal-500'
              }`}
            />
            <span>{t('contact.localizationtitle')}</span>
            <p className="mt-2 text-gray-600">
              R. Alfazema, 114 - Contorno, Ponta Grossa - PR, 84060-040, Brazil
            </p>
          </div>
          <div className="mb-4">
            <FaPhone
              className={`inline-block mr-2 ${
                darkMode ? 'text-teal-600' : 'text-teal-500'
              }`}
            />
            <span>{t('contact.contactus')}</span>
            <p className="mt-2 text-gray-600">
              +55 (42) 9 9998-0311
              <br />
              +55 (42) 9 9976-2511
            </p>
          </div>
          <div className="mb-4">
            <FaEnvelope
              className={`inline-block mr-2 ${
                darkMode ? 'text-teal-600' : 'text-teal-500'
              }`}
            />
            <span>Email</span>
            <p className="mt-2 text-gray-600">ecrema@elautomacao.com.br</p>
          </div>
          <iframe
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            src={googleMapSrc}
            allowFullScreen
            title="Google Maps"
          ></iframe>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
