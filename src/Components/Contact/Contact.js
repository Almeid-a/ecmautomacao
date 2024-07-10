import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ darkMode }) => {
  const { t } = useTranslation();


  // Estado para armazenar os dados do formulário e os erros de validação
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

  // Função para atualizar o estado do formulário ao digitar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: false, // Limpa o erro de validação ao começar a digitar novamente
    });
  };

  // Função para validar o formato do email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular simples para validar formato de email
    return re.test(String(email).toLowerCase());
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();// Evita o comportamento padrão de envio do formulário (recarregar a página)

    const requiredFields = ['name', 'email', 'phone', 'message'];
    let hasErrors = false;

    const updatedErrors = {};
    // Verifica se todos os campos obrigatórios foram preenchidos
    requiredFields.forEach(field => {
      if (!formData[field]) {
        updatedErrors[field] = true;
        hasErrors = true;
      } else {
        updatedErrors[field] = false;
      }
    });

    if (hasErrors) {
      setFormErrors(updatedErrors);
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    // Valida o formato do email usando a função validateEmail
    if (!validateEmail(formData.email)) {
      toast.error("Por favor, insira um email válido.");
      return;
    }

    // Envio do email usando o serviço de emailjs
    try {
      const response = await emailjs.send("service_xx96w7v", "template_aokg7dw", formData, "MVARxd9rxtBSLFxUF");
      // Limpa o estado do formulário após o envio bem-sucedido
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Exibir toast de sucesso
      toast.success("Email enviado com sucesso!");
    } catch (error) {
      // Exibir toast de erro
      toast.error("Erro ao enviar o email. Por favor, tente novamente mais tarde.");
    }
  };

  const googleMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4959593157327!2d-50.1524864490183!3d-25.08696264411426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef58869d6fcd91%3A0x1c03b7247e6c1e75!2sR.%20Alfazema%2C%20114%20-%20Contorno%2C%20Ponta%20Grossa%20-%20PR%2C%2084060-040%2C%20Brazil!5e0!3m2!1sen!2sus!4v1683210842651!5m2!1sen!2sus`;

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
            <div className={`mb-4 ${formErrors.name ? 'border-red-500' : ''}`}>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                {t('main.contact.name')}
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.name ? 'border-red-500' : ''}`}
                type="text"
                placeholder={t('main.contact.name')}
              />
            </div>
            <div className={`mb-4 ${formErrors.email ? 'border-red-500' : ''}`}>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                {t('main.contact.email')}
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.email ? 'border-red-500' : ''}`}
                type="email"
                placeholder={t('main.contact.email')}
              />
            </div>
            <div className={`mb-4 ${formErrors.phone ? 'border-red-500' : ''}`}>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                {t('main.contact.phone')}
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.phone ? 'border-red-500' : ''}`}
                type="text"
                placeholder={t('main.contact.phone')}
              />
            </div>
            <div className={`mb-6 ${formErrors.message ? 'border-red-500' : ''}`}>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                {t('main.contact.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.message ? 'border-red-500' : ''}`}
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
      <ToastContainer />
    </div>
  );
};

export default Contact;
