export default {
  global: {
    Name: 'Competencias emocionales y políticas públicas',
    Description:
      'Las competencias emocionales fortalecen habilidades como la empatía y la toma de decisiones responsables, mientras que las políticas públicas orientan acciones para el bienestar colectivo. En Colombia, su articulación favorece la formación de ciudadanos participativos y la construcción de una sociedad más justa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Inteligencia emocional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Resiliencia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procesos de resistencia',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Principios y valores éticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Valores universales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Constitución Política de Colombia y competencias ciudadanas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Normas ambientales y de convivencia',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Aspectos ecológicos a considerar en las normas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Contexto social',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Actitud',
      significado:
        'disposición aprendida que orienta la forma de pensar, sentir y actuar frente a diferentes situaciones.',
    },
    {
      termino: 'Autoconciencia',
      significado:
        'capacidad de reconocer y comprender las propias emociones, pensamientos y comportamientos.',
    },
    {
      termino: 'Ciudadanía',
      significado:
        'condición que implica derechos, deberes y participación activa en la sociedad.',
    },
    {
      termino: 'Competencias ciudadanas',
      significado:
        'conjunto de conocimientos, habilidades y actitudes que permiten convivir de manera pacífica y participar responsablemente en la sociedad.',
    },
    {
      termino: 'Convivencia',
      significado:
        'relación armónica entre personas basada en el respeto, la tolerancia y la cooperación.',
    },
    {
      termino: 'Cultura ciudadana',
      significado:
        'conjunto de valores, comportamientos y normas compartidas que favorecen la vida en comunidad.',
    },
    {
      termino: 'Empatía',
      significado:
        'capacidad de comprender y compartir los sentimientos de los demás.',
    },
    {
      termino: 'Ética',
      significado:
        'conjunto de principios que orientan el comportamiento humano hacia el bien.',
    },
    {
      termino: 'Normas',
      significado:
        'reglas establecidas que orientan el comportamiento dentro de una sociedad.',
    },
    {
      termino: 'Participación',
      significado:
        'involucramiento activo de las personas en la toma de decisiones que afectan su entorno.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'capacidad de afrontar y superar situaciones adversas, aprendiendo de ellas.',
    },
    {
      termino: 'Respeto',
      significado:
        'reconocimiento del valor propio y de los demás, así como de sus derechos.',
    },
    {
      termino: 'Responsabilidad',
      significado:
        'compromiso de asumir las consecuencias de los propios actos.',
    },
    {
      termino: 'Solidaridad',
      significado:
        'disposición para apoyar y colaborar con otros en situaciones de necesidad.',
    },
    {
      termino: 'Tolerancia',
      significado:
        'actitud de aceptación frente a las diferencias de opiniones, creencias o comportamientos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Constitución Política de Colombia. (1991). Constitución Política de Colombia - 1991 (2a edición). Legis.',
      link: '',
    },
    {
      referencia:
        'Herrera Cortés, M. C. (2008). Políticas públicas en educación ciudadana en Colombia y América Latina: La arena de lucha del campo intelectual en la historia reciente. Anuario de Historia de la Educación. Sociedad Argentina de Investigación y Enseñanza en Historia de la Educación.',
      link: '',
    },
    {
      referencia:
        'Generación Savia. (2020). Resiliencia: aprender a afrontar las crisis. Savia.',
      link: '',
    },
    {
      referencia:
        'González Piedra, E. (2012). El fenómeno de la resiliencia en el bienestar y el rendimiento laboral (Tesis de maestría). Universidad de Oviedo.',
      link: '',
    },
    {
      referencia:
        'Los Recursos Humanos. (s. f.). Importancia de la resiliencia en el ámbito laboral. LosRecursosHumanos.com.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2004). Estándares Básicos de Competencias Ciudadanas. Formar para la ciudadanía ¡sí es posible! MEN.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2011). Orientaciones para la institucionalización de las competencias ciudadanas. Cartilla 1.',
      link: '',
    },
    {
      referencia:
        'Southwick, S. M., & Charney, D. S. (2012). The science of resilience: Implications for the prevention and treatment of depression. Science, 338(6103), 79–82.',
      link: '',
    },
    {
      referencia:
        'Vico, A. (2019). Hábitos de las personas con alta inteligencia emocional. Befullness.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jenny Paola García Cárdenas',
          cargo: 'Experta temática',
          centro:
            'Equipo de Adecuación Gráfica y Didáctica de Recursos Educativos - Regional Risaralda',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
