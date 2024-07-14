import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      header: {
        logo: "Logo",
        contact: "Contact",
        home: "Home",
        partners: "Our Partners",
        about: "About Us",
      },
      main: {
        hometitle: "ECM Automation",
        homedescription: "For over 30 years, ECM Automation has been dedicated to industrial automation in Ponta Grossa, Paraná, offering innovative solutions for various sectors. We have expanded our presence throughout Brazil and Mercosur countries such as Bolivia and Peru.",
        contactus: "Contact Us",
        segmentsTitle: "Segments We Operate In",
        segmentWood: "Wood (MDF, Paper and Pulp)",
        segmentFood: "Food",
        segmentAgroindustry: "Agroindustry",
        servicesTitle: "Services Provided",
        serviceManufacturing: "Manufacturing of measuring, testing, and control equipment.",
        serviceRepairComputers: "Repair of computers and peripheral equipment.",
        serviceMaintenance: "Maintenance and repair of measuring, testing, and control equipment.",
      },
      about: {
        abouttitle: "ECM Automation",
        aboutdescription: "For over 30 years, ECM Automation has been a leader in industrial automation, based in Ponta Grossa, Paraná. We specialize in offering innovative solutions for a wide range of industrial sectors. With a consolidated history, we have accumulated extensive experience in different areas of automation, expanding our operations throughout Brazil and extending our presence to Mercosur countries such as Bolivia and Peru.",
        compromissetitle: "Our Commitment",
        compromissedescription: "At ECM Automação, our commitment is to provide tailored and efficient automation solutions that meet the specific needs of our clients. We collaborate closely with leading technology partners worldwide, ensuring access to the latest innovations and maintaining excellence in our services.",
        missiontitle: "Your Trusted Automation Partner",
        missiondescription: "We are dedicated to driving our clients' success by delivering high-quality automation solutions and exceptional service. At ECM Automação, we strive to be your reliable automation partner, guiding you towards the future of the industry.",
      },
      partners: {
        lenzeDescription: "Lenze is a global manufacturer of electrical and mechanical drives, motion control and automation technology.",
        wagoDescription: "Wago is a manufacturer of components for electrical connection technology and electronic components for decentralized automation.",
        rockwellDescription: "Rockwell Automation, Inc. is an American provider of industrial automation and information technology.",
        siemensDescription: "Siemens is a global powerhouse focusing on the areas of electrification, automation, and digitalization."
      },
      contact: {
        formtitle: "Get in Touch",
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        send: "Send",
        contactus: "Contact Us",
        localizationtitle: "Our Location",
      }
    }
  },
  pt: {
    translation: {
      header: {
        logo: "Logo",
        home: "Página Inicial",
        contact: "Contato",
        partners: "Nossos Parceiros",
        about: "Quem Somos"
      },
      main: {
        hometitle: "ECM Automação",
        homedescription: "Há mais de 30 anos, a ECM Automação se dedica à automação industrial em Ponta Grossa, Paraná, oferecendo soluções inovadoras para diversos setores. Expandimos nossa presença por todo o Brasil e países do Mercosul, como Bolívia e Peru.",
        contactus: "Contate-nos",
        segmentsTitle: "Segmentos que Atuamos",
        segmentWood: "Madeira (MDF, Papel e Celulose)",
        segmentFood: "Alimentos",
        segmentAgroindustry: "Agroindústria",
        servicesTitle: "Serviços Prestados",
        serviceManufacturing: "Fabricação de aparelhos e equipamentos de medida, teste e controle.",
        serviceRepairComputers: "Reparação de computadores e de equipamentos periféricos.",
        serviceMaintenance: "Manutenção e reparação de aparelhos e instrumentos de medida, teste e controle.",
      },
      about: {
        abouttitle: "ECM Automação",
        aboutdescription: "Há mais de 30 anos, a ECM Automação tem sido líder em automação industrial, com sede em Ponta Grossa, Paraná. Especializamo-nos em oferecer soluções inovadoras para uma ampla gama de setores industriais. Com uma história consolidada, acumulamos uma vasta experiência em diferentes áreas da automação, expandindo nossa atuação por todo o território brasileiro e estendendo nossa presença para países do Mercosul, como Bolívia e Peru.",
        compromissetitle: "Nosso Compromisso",
        compromissedescription: "Na ECM Automação, nosso compromisso é fornecer soluções de automação personalizadas e eficientes, adaptadas às necessidades específicas dos nossos clientes. Trabalhamos em estreita colaboração com os principais parceiros tecnológicos ao redor do mundo, garantindo acesso às últimas inovações e mantendo a excelência nos nossos serviços.",
        missiontitle: "Seu Parceiro Confiança em Automação",
        missiondescription: "Estamos empenhados em impulsionar o sucesso dos nossos clientes, oferecendo soluções de automação de alta qualidade e serviços excepcionais. Na ECM Automação, aspiramos ser o seu parceiro confiável em automação, orientando-o em direção ao futuro da indústria.",
      },
      partners: {
        lenzeDescription: "A Lenze é um fabricante global de tecnologia de acionamentos elétricos e mecânicos, controle de movimento e automação.",
        wagoDescription: "A Wago é um fabricante de componentes para tecnologia de conexão elétrica e componentes eletrônicos para automação descentralizada.",
        rockwellDescription: "A Rockwell Automation, Inc. é uma fornecedora americana de automação industrial e tecnologia da informação.",
        siemensDescription: "A Siemens é uma potência global focada nas áreas de eletrificação, automação e digitalização."
      },
      contact: {
        formtitle: "Entre em Contato",
        name: "Nome",
        email: "Email",
        phone: "Telefone",
        message: "Mensagem",
        send: "Enviar",
        contactus: "Contate-nos",
        localizationtitle: "Nossa Localização",
      }
    }
  },
  es: {
    translation: {
      header: {
        logo: "Logo",
        contact: "Contacto",
        home: "Inicio",
        partners: "Nuestros Socios",
        about: "Nosotros"
      },
      main: {
        hometitle: "Automatización ECM",
        homedescription: "Durante más de 30 años, ECM Automatización se ha dedicado a la automatización industrial en Ponta Grossa, Paraná, ofreciendo soluciones innovadoras para diversos sectores. Hemos expandido nuestra presencia en todo Brasil y países del Mercosur como Bolivia y Perú.",
        contactus: "Contáctenos",
        segmentsTitle: "Segmentos en los que Operamos",
        segmentWood: "Madera (MDF, Papel y Pulpa)",
        segmentFood: "Alimentos",
        segmentAgroindustry: "Agroindustria",
        servicesTitle: "Servicios Prestados",
        serviceManufacturing: "Fabricación de equipos de medición, prueba y control.",
        serviceRepairComputers: "Reparación de computadoras y equipos periféricos.",
        serviceMaintenance: "Mantenimiento y reparación de equipos de medición, prueba y control.",
      },
      about: {
        abouttitle: "Automatización ECM",
        aboutdescription: "Durante más de 30 años, ECM Automatización ha sido líder en automatización industrial, con sede en Ponta Grossa, Paraná. Nos especializamos en ofrecer soluciones innovadoras para una amplia gama de sectores industriales. Con una historia consolidada, hemos acumulado una vasta experiencia en diferentes áreas de automatización, expandiendo nuestras operaciones en todo Brasil y extendiendo nuestra presencia a países del Mercosur como Bolivia y Perú.",
        compromissetitle: "Nuestro Compromiso",
        compromissedescription: "En ECM Automatización, nuestro compromiso es proporcionar soluciones de automatización personalizadas y eficientes que satisfagan las necesidades específicas de nuestros clientes. Colaboramos estrechamente con los principales socios tecnológicos a nivel mundial, asegurando acceso a las últimas innovaciones y manteniendo la excelencia en nuestros servicios.",
        missiontitle: "Su Socio Confiable en Automatización",
        missiondescription: "Nos dedicamos a impulsar el éxito de nuestros clientes entregando soluciones de automatización de alta calidad y servicio excepcional. En ECM Automatización, nos esforzamos por ser su socio confiable en automatización, guiándolo hacia el futuro de la industria.",
      },
      partners: {
        lenzeDescription: "Lenze es un fabricante global de accionamientos eléctricos y mecánicos, control de movimiento y tecnología de automatización.",
        wagoDescription: "Wago es un fabricante de componentes para tecnología de conexión eléctrica y componentes electrónicos para automatización descentralizada.",
        rockwellDescription: "Rockwell Automation, Inc. es un proveedor estadounidense de automatización industrial y tecnología de la información.",
        siemensDescription: "Siemens es una potencia global centrada en áreas de electrificación, automatización y digitalización."
      },
      contact: {
        formtitle: "Póngase en Contacto",
        name: "Nombre",
        email: "Correo Electrónico",
        phone: "Teléfono",
        message: "Mensaje",
        send: "Enviar",
        contactus: "Contáctenos",
        localizationtitle: "Nuestra Ubicación",
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
