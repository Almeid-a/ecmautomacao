import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "header": {
            "logo": "Logo",
            "contact": "Contact",
            "partners": "Our Partners",
            "about": "About Us"
          },
          "main": {
            "title": "EMC Automation",
            "description": "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
          }
        }
      },
      pt: {
        translation: {
          "header": {
            "logo": "Logo",
            "contact": "Contato",
            "partners": "Nossos Parceiros",
            "about": "Quem Somos"
          },
          "main": {
            "title": "EMC Automação",
            "description": "Nosso template de página inicial funciona em todos os dispositivos, então você só precisa configurá-lo uma vez e obter resultados bonitos para sempre."
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
