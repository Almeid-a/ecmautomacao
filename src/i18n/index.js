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
        clients: "Clients",
        gallery: "Gallery"
      },
      main: {
        hometitle: "ECM Industrial Automation",
        homedescription: "With professionals boasting over 30 years of experience in various automation sectors, ECM Industrial Automation, based in Ponta Grossa, Paraná, offers innovative solutions for diverse industries. We have established our presence with services throughout Brazil and South American countries, such as Bolivia, Chile, and Peru.",
        contactus: "Contact Us",
        segmentsTitle: "Areas of Operation",
        segmentWood: "Wood (MDF, Paper and Pulp)",
        segmentFood: "Food",
        segmentAgroindustry: "Agroindustry",
        servicesTitle: "Services Provided",
        serviceManufacturing: "Manufacturing of measuring, testing, and control equipment.",
        serviceRepairComputers: "Repair of computers and peripheral equipment.",
        serviceMaintenance: "Maintenance and repair of measuring, testing, and control equipment.",
      },
      about: {
        abouttitle: "ECM Industrial Automation",
        aboutdescription: "Specializing in offering innovative solutions for a wide range of industrial sectors. With a solid history, we have accumulated vast experience in different areas of automation, expanding our operations throughout Brazil and extending our presence to South American countries such as Bolivia, Chile, and Peru.",
        compromissetitle: "Our Commitment",
        compromissedescription: "At ECM Automation, our commitment is to provide tailored and efficient automation solutions that meet the specific needs of our clients. We collaborate closely with leading technology partners worldwide, ensuring access to the latest innovations and maintaining excellence in our services.",
        missiontitle: "Your Trusted Automation Partner",
        missiondescription: "We are committed to driving the success of our clients by offering high-quality automation solutions and exceptional services. At ECM Automation, we aspire to be your trusted partner in automation, guiding you towards the future of the industry.",
      },
      partners: {
        lenzeDescription: "Lenze is a global manufacturer of electrical and mechanical drives, motion control and automation technology.",
        wagoDescription: "Wago is a manufacturer of components for electrical connection technology and electronic components for decentralized automation.",
        rockwellDescription: "Rockwell Automation, Inc. is an American provider of industrial automation and information technology.",
        siemensDescription: "Siemens is a global powerhouse focusing on the areas of electrification, automation, and digitalization.",
        universalDescription: "Universal Robots is a leading company in collaborative robots (cobots), designed to work alongside humans in a variety of industrial applications."
      },
      clients: {
        title: "Our Clients",
        adamiDescription: "Adami S/A is a company with a long tradition in the wood sector, specializing in the production of MDF, paper, and pulp products.",
        tresIrmaosDescription: "Tres Irmãos is a prominent player in the food industry, known for its high-quality products and commitment to excellence.",
        colacrilDescription: "Colacril is a leading manufacturer of adhesive solutions, providing innovative products for various industrial applications.",
        mendesDescription: "Mendes is a key player in the agroindustry, offering advanced solutions to enhance agricultural productivity.",
        boPackingDescription: "Bo Packing specializes in packaging solutions, delivering high-quality and sustainable packaging options for diverse industries.",
        aresPeruDescription: "Ares Perú is a dynamic company in the automation sector, providing state-of-the-art automation solutions in Peru.",
        sudatiDescription: "Sudati is a renowned company in the wood industry, focusing on the production of MDF and other wood-based products.",
      },
      contact: {
        contacttitle: "Contact Us",
        contactdescription: "Get in touch with ECM Industrial Automation for more information about our services, solutions, and how we can help you achieve your automation goals. Fill out the form below, and our team will get back to you as soon as possible.",
        formName: "Name",
        formEmail: "Email",
        formPhone: "Phone",
        formMessage: "Message",
        formSend: "Send",
      },
      gallery: {
        title: "Services Provided",
        description: "This section shows some images of the services provided by ECM Industrial Automation. Our work includes the installation of electrical panels, automation of industrial processes, and much more. Each image represents our commitment to quality and customer satisfaction.",
        image1Description: "Gallery Image 1",
        image2Description: "Gallery Image 2",
        image3Description: "Gallery Image 3",
        image4Description: "Gallery Image 4",
        image5Description: "Gallery Image 5",
        image6Description: "Gallery Image 6",
        image7Description: "Gallery Image 7",
        image8Description: "Gallery Image 8",
        image9Description: "Gallery Image 9",
        image10Description: "Gallery Image 10",
        image11Description: "Gallery Image 11",
        image12Description: "Gallery Image 12",
        image13Description: "Gallery Image 13",
        image14Description: "Gallery Image 14",
        image15Description: "Gallery Image 15",
        image16Description: "Gallery Image 16",
        image17Description: "Gallery Image 17",
        image18Description: "Gallery Image 18",
        image19Description: "Gallery Image 19",
      },
    }
  },
  pt: {
    translation: {
      header: {
        logo: "Logo",
        contact: "Contato",
        home: "Início",
        partners: "Nossos Parceiros",
        about: "Sobre Nós",
        clients: "Clientes",
        gallery: "Galeria"
      },
      main: {
        hometitle: "ECM Automação Industrial",
        homedescription: "Com profissionais com mais de 30 anos de experiência em diversos setores de automação, a ECM Automação Industrial, sediada em Ponta Grossa, Paraná, oferece soluções inovadoras para diversos setores industriais. Estabelecemos nossa presença com serviços em todo o Brasil e países da América do Sul, como Bolívia, Chile e Peru.",
        contactus: "Entre em Contato",
        segmentsTitle: "Áreas de Atuação",
        segmentWood: "Madeira (MDF, Papel e Celulose)",
        segmentFood: "Alimentação",
        segmentAgroindustry: "Agroindústria",
        servicesTitle: "Serviços Realizados",
        serviceManufacturing: "Fabricação de equipamentos de medição, teste e controle.",
        serviceRepairComputers: "Reparação de computadores e equipamentos periféricos.",
        serviceMaintenance: "Manutenção e reparo de equipamentos de medição, teste e controle.",
      },
      about: {
        abouttitle: "ECM Automação Industrial",
        aboutdescription: "Especializada em oferecer soluções inovadoras para uma ampla gama de setores industriais. Com uma história sólida, acumulamos vasta experiência em diferentes áreas da automação, expandindo nossas operações por todo o Brasil e estendendo nossa presença para países da América do Sul, como Bolívia, Chile e Peru.",
        compromissetitle: "Nosso Compromisso",
        compromissedescription: "Na ECM Automação, nosso compromisso é fornecer soluções de automação personalizadas e eficientes que atendam às necessidades específicas de nossos clientes. Colaboramos de perto com parceiros tecnológicos líderes mundiais, garantindo acesso às últimas inovações e mantendo a excelência em nossos serviços.",
        missiontitle: "Seu Parceiro de Confiança em Automação",
        missiondescription: "Estamos comprometidos em impulsionar o sucesso de nossos clientes, oferecendo soluções de automação de alta qualidade e serviços excepcionais. Na ECM Automação, aspiramos ser seu parceiro de confiança em automação, guiando-o rumo ao futuro da indústria.",
      },
      partners: {
        lenzeDescription: "A Lenze é um fabricante global de tecnologia de acionamentos elétricos e mecânicos, controle de movimento e automação.",
        wagoDescription: "A Wago é uma fabricante de componentes para tecnologia de conexão elétrica e componentes eletrônicos para automação descentralizada.",
        rockwellDescription: "A Rockwell Automation, Inc. é uma fornecedora americana de tecnologia de automação industrial e tecnologia da informação.",
        siemensDescription: "A Siemens é uma potência global focada nas áreas de eletrificação, automação e digitalização.",
        universalDescription: "A Universal Robots é uma empresa líder em robôs colaborativos (cobots), projetados para trabalhar ao lado de humanos em diversas aplicações industriais."
      },
      clients: {
        title: "Nossos Clientes",
        adamiDescription: "A Adami S/A é uma empresa com longa tradição no setor madeireiro, especializada na produção de produtos de MDF, papel e celulose.",
        tresIrmaosDescription: "A Três Irmãos é uma empresa de destaque no setor alimentício, conhecida por seus produtos de alta qualidade e compromisso com a excelência.",
        colacrilDescription: "A Colacril é uma fabricante líder de soluções adesivas, fornecendo produtos inovadores para diversas aplicações industriais.",
        mendesDescription: "A Mendes é uma empresa chave na agroindústria, oferecendo soluções avançadas para aumentar a produtividade agrícola.",
        boPackingDescription: "A Bo Packing é especializada em soluções de embalagem, oferecendo opções de embalagens de alta qualidade e sustentáveis para diversos setores.",
        aresPeruDescription: "A Ares Perú é uma empresa dinâmica no setor de automação, fornecendo soluções de automação de última geração no Peru.",
        sudatiDescription: "A Sudati é uma empresa renomada na indústria madeireira, focada na produção de MDF e outros produtos derivados da madeira.",
      },
      contact: {
        contacttitle: "Entre em Contato",
        contactdescription: "Entre em contato com a ECM Automação Industrial para mais informações sobre nossos serviços, soluções e como podemos ajudar a alcançar seus objetivos de automação. Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.",
        formName: "Nome",
        formEmail: "Email",
        formPhone: "Telefone",
        formMessage: "Mensagem",
        formSend: "Enviar",
      },
      gallery: {
        title: "Serviços Realizados",
        description: "Esta seção mostra algumas imagens dos serviços realizados pela ECM Automação Industrial. Nosso trabalho inclui a instalação de painéis elétricos, automação de processos industriais e muito mais. Cada imagem representa nosso compromisso com a qualidade e a satisfação do cliente.",
        image1Description: "Descrição para imagem 1",
        image2Description: "Descrição para imagem 2",
        image3Description: "Descrição para imagem 3",
        image4Description: "Descrição para imagem 4",
        image5Description: "Descrição para imagem 5",
        image6Description: "Descrição para imagem 6",
        image7Description: "Descrição para imagem 7",
        image8Description: "Descrição para imagem 8",
        image9Description: "Descrição para imagem 9",
        image10Description: "Descrição para imagem 10",
        image11Description: "Descrição para imagem 11",
        image12Description: "Descrição para imagem 12",
        image13Description: "Descrição para imagem 13",
        image14Description: "Descrição para imagem 14",
        image15Description: "Descrição para imagem 15",
        image16Description: "Descrição para imagem 16",
        image17Description: "Descrição para imagem 17",
        image18Description: "Descrição para imagem 18",
        image19Description: "Descrição para imagem 19",
      },
    }
  },
  es: {
    translation: {
      header: {
        logo: "Logo",
        contact: "Contacto",
        home: "Inicio",
        partners: "Nuestros Socios",
        about: "Sobre Nosotros",
        clients: "Clientes",
        gallery: "Galería"
      },
      main: {
        hometitle: "ECM Automatización Industrial",
        homedescription: "Con profesionales con más de 30 años de experiencia en diversos sectores de automatización, ECM Automatización Industrial, con sede en Ponta Grossa, Paraná, ofrece soluciones innovadoras para diversos sectores industriales. Hemos establecido nuestra presencia con servicios en todo Brasil y países de América del Sur, como Bolivia, Chile y Perú.",
        contactus: "Contáctenos",
        segmentsTitle: "Áreas de Actuación",
        segmentWood: "Madera (MDF, Papel y Celulosa)",
        segmentFood: "Alimentación",
        segmentAgroindustry: "Agroindustria",
        servicesTitle: "Servicios Prestados",
        serviceManufacturing: "Fabricación de equipos de medición, prueba y control.",
        serviceRepairComputers: "Reparación de computadoras y equipos periféricos.",
        serviceMaintenance: "Mantenimiento y reparación de equipos de medición, prueba y control.",
      },
      about: {
        abouttitle: "ECM Automatización Industrial",
        aboutdescription: "Especializada en ofrecer soluciones innovadoras para una amplia gama de sectores industriales. Con una sólida historia, hemos acumulado una vasta experiencia en diferentes áreas de automatización, expandiendo nuestras operaciones por todo Brasil y extendiendo nuestra presencia a países de América del Sur, como Bolivia, Chile y Perú.",
        compromissetitle: "Nuestro Compromiso",
        compromissedescription: "En ECM Automatización, nuestro compromiso es proporcionar soluciones de automatización personalizadas y eficientes que satisfagan las necesidades específicas de nuestros clientes. Colaboramos estrechamente con socios tecnológicos líderes a nivel mundial, asegurando el acceso a las últimas innovaciones y manteniendo la excelencia en nuestros servicios.",
        missiontitle: "Su Socio de Confianza en Automatización",
        missiondescription: "Estamos comprometidos a impulsar el éxito de nuestros clientes al ofrecer soluciones de automatización de alta calidad y servicios excepcionales. En ECM Automatización, aspiramos a ser su socio de confianza en automatización, guiándolo hacia el futuro de la industria.",
      },
      partners: {
        lenzeDescription: "Lenze es un fabricante global de tecnología de accionamientos eléctricos y mecánicos, control de movimiento y automatización.",
        wagoDescription: "Wago es un fabricante de componentes para tecnología de conexión eléctrica y componentes electrónicos para automatización descentralizada.",
        rockwellDescription: "Rockwell Automation, Inc. es un proveedor estadounidense de tecnología de automatización industrial y tecnología de la información.",
        siemensDescription: "Siemens es una potencia global centrada en las áreas de electrificación, automatización y digitalización.",
        universalDescription: "Universal Robots es una empresa líder en robots colaborativos (cobots), diseñados para trabajar junto a los humanos en diversas aplicaciones industriales."
      },
      clients: {
        title: "Nuestros Clientes",
        adamiDescription: "Adami S/A es una empresa con una larga tradición en el sector de la madera, especializada en la producción de productos de MDF, papel y celulosa.",
        tresIrmaosDescription: "Tres Irmãos es una empresa destacada en el sector alimentario, conocida por sus productos de alta calidad y compromiso con la excelencia.",
        colacrilDescription: "Colacril es un fabricante líder de soluciones adhesivas, que proporciona productos innovadores para diversas aplicaciones industriales.",
        mendesDescription: "Mendes es una empresa clave en la agroindustria, que ofrece soluciones avanzadas para mejorar la productividad agrícola.",
        boPackingDescription: "Bo Packing se especializa en soluciones de embalaje, ofreciendo opciones de embalaje de alta calidad y sostenibles para diversos sectores.",
        aresPeruDescription: "Ares Perú es una empresa dinámica en el sector de la automatización, que proporciona soluciones de automatización de última generación en Perú.",
        sudatiDescription: "Sudati es una empresa reconocida en la industria de la madera, centrada en la producción de MDF y otros productos derivados de la madera.",
      },
      contact: {
        contacttitle: "Contáctenos",
        contactdescription: "Póngase en contacto con ECM Automatización Industrial para obtener más información sobre nuestros servicios, soluciones y cómo podemos ayudarlo a alcanzar sus objetivos de automatización. Complete el formulario a continuación y nuestro equipo se pondrá en contacto con usted lo antes posible.",
        formName: "Nombre",
        formEmail: "Email",
        formPhone: "Teléfono",
        formMessage: "Mensaje",
        formSend: "Enviar",
      },
      gallery: {
        title: "Servicios Prestados",
        description: "Esta sección muestra algunas imágenes de los servicios prestados por ECM Automatización Industrial. Nuestro trabajo incluye la instalación de paneles eléctricos, la automatización de procesos industriales y mucho más. Cada imagen representa nuestro compromiso con la calidad y la satisfacción del cliente.",
        image1Description: "Descripción de la imagen 1",
        image2Description: "Descripción de la imagen 2",
        image3Description: "Descripción de la imagen 3",
        image4Description: "Descripción de la imagen 4",
        image5Description: "Descripción de la imagen 5",
        image6Description: "Descripción de la imagen 6",
        image7Description: "Descripción de la imagen 7",
        image8Description: "Descripción de la imagen 8",
        image9Description: "Descripción de la imagen 9",
        image10Description: "Descripción de la imagen 10",
        image11Description: "Descripción de la imagen 11",
        image12Description: "Descripción de la imagen 12",
        image13Description: "Descripción de la imagen 13",
        image14Description: "Descripción de la imagen 14",
        image15Description: "Descripción de la imagen 15",
        image16Description: "Descripción de la imagen 16",
        image17Description: "Descripción de la imagen 17",
        image18Description: "Descripción de la imagen 18",
        image19Description: "Descripción de la imagen 19",
      },
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
