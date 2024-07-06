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
            "home": "Home",
            "partners": "Our Partners",
            "about": "About Us",
          },
          "main": {
            "hometitle": "ECM Automation",
            "homedescription": "For over 30 years, ECM Automation has been dedicated to industrial automation in Ponta Grossa, Paraná, offering innovative solutions for various sectors. We have expanded our presence throughout Brazil and Mercosur countries such as Bolivia and Peru.",
            "aboutdescription": "For over 30 years, ECM Automation has been a leader in industrial automation, based in Ponta Grossa, Paraná. We specialize in offering innovative solutions for a wide range of industrial sectors. With a consolidated history, we have accumulated extensive experience in different areas of automation, expanding our operations throughout Brazil and extending our presence to Mercosur countries such as Bolivia and Peru.",
            "compromissetitle": "Our Commitment",
            "compromissedescription": "At ECM Automação, our commitment is to provide tailored and efficient automation solutions that meet the specific needs of our clients. We collaborate closely with leading technology partners worldwide, ensuring access to the latest innovations and maintaining excellence in our services.",
            "missiontitle": "Your Trusted Automation Partner",
            "missiondescription": "We are dedicated to driving our clients' success by delivering high-quality automation solutions and exceptional service. At ECM Automação, we strive to be your reliable automation partner, guiding you towards the future of the industry.",
            "localizationtitle": "Our Location",
            "formtitle": "Get in Touch",
            "contact.name": "Name",
            "contact.email": "Email",
            "contact.phone": "Phone",
            "contact.message": "Message",
            "contact.send": "Send",
            "contactus": "Contact Us"
          }
        }
      },
      pt: {
        translation: {
          "header": {
            "logo": "Logo",
            "home": "Página Inicial",
            "contact": "Contato",
            "partners": "Nossos Parceiros",
            "about": "Quem Somos"
          },
          "main": {
            "hometitle": "EMC Automação",
            "homedescription": "Há mais de 30 anos, a ECM Automação se dedica à automação industrial em Ponta Grossa, Paraná, oferecendo soluções inovadoras para diversos setores. Expandimos nossa presença por todo o Brasil e países do Mercosul, como Bolívia e Peru.",
            "aboutdescription": "Há mais de 30 anos, a ECM Automação tem sido líder em automação industrial, com sede em Ponta Grossa, Paraná. Especializamo-nos em oferecer soluções inovadoras para uma ampla gama de setores industriais. Com uma história consolidada, acumulamos uma vasta experiência em diferentes áreas da automação, expandindo nossa atuação por todo o território brasileiro e estendendo nossa presença para países do Mercosul, como Bolívia e Peru.",
            "compromissetitle": "Nosso Compromisso",
            "compromissedescription": "Na ECM Automação, nosso compromisso é fornecer soluções de automação personalizadas e eficientes, adaptadas às necessidades específicas dos nossos clientes. Trabalhamos em estreita colaboração com os principais parceiros tecnológicos ao redor do mundo, garantindo acesso às últimas inovações e mantendo a excelência nos nossos serviços.",
            "missiontitle": "Seu Parceiro Confiança em Automação",
            "missiondescription": "Estamos empenhados em impulsionar o sucesso dos nossos clientes, oferecendo soluções de automação de alta qualidade e serviços excepcionais. Na ECM Automação, aspiramos ser o seu parceiro confiável em automação, orientando-o em direção ao futuro da indústria.",
            "localizationtitle": "Nossa Localização",
            "formtitle": "Entre em Contato",
            "contact.name": "Nome",
            "contact.email": "Email",
            "contact.phone": "Telefone",
            "contact.message": "Mensagem",
            "contact.send": "Enviar",
            "contactus": "Contate-nos"
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
