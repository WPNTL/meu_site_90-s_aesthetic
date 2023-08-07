export default class DataService {
  _data = {
    projectRepo: 'https://github.com/WPNTL',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Olá, sou um programador full-stack iniciante com foco em front-end. Atualmente, estou envolvido em projetos independentes para aprimorar meus estudos e habilidades. ",
            "Além disso, tive a oportunidade de implementar sistemas próprios na empresa em que trabalho.",
            'Estou apaixonado pela arte de criar experiências web envolventes e estou ansioso para explorar novos desafios e contribuir para o mundo da tecnologia. Vamos juntos nessa jornada de inovação e crescimento!',
            
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://drive.google.com/file/d/1dQ7Bml34bwNikHq8U8wQiYDATIDJ2bPD/view?usp=sharing',
          workExperience: [
            {
              jobTitle: 'SysAdmin',
              company: 'Projelmec - RS',
              location: 'Sapucaia do Sul - RS',
              period: 'FEV 2014 – PRESENTE',
              accomplishments: [
                'Gerenciamento de servidores Linux',
                'Gerenciamento de servidores Windows (AD)',
                'Monitoramento e manutenção de rede',
                'Cabeamento estruturado',
                'Desenvolvimento de sistemas internos, tais como: Controle de portaria, nuvem interna, e intranet',
                'Tecnologias usadas: C#, JS, ASP.NET, SQL Server, PHP, HTML, CSS',
              ],
            },
          ],
          education: [
            {
              credit: 'Técnico em informática (com ênfase em programação)',
              place: 'ULBRA São Lucas',
              //gpa: '3.9/4.0 GPA',
              period: 'JAN 2014 – DEZ 2016',
            },
            {
              credit: 'Análise e desenvolvimento de sistemas',
              place: 'Unisinos',
              //gpa: '3.8/4.0 GPA',
              period: 'FEV 2023 – Dez 2025',
            },
            {
              credit: 'Ciência da Computação',
              place: 'UniLaSalle',
              //gpa: '3.9/4.0 GPA',
              period: 'JAN 2018 – Incompleto',
            },
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'Sistema de portaria',
              description:
                'Sistema de portaria que gerencia entrada e saída de veículos e pessoas da empresa, gerando log permanente de todas as visitas, e podendo serem consultadas.',
              myRole:
                'Herdei um sistema sem documentação, refiz todo o projeto usando como referência o código legado e o documentei.',
              techStack:
                'PHP, HTML, CSS, JS, ASP',
              url: 'https://github.com/WPNTL/Portaria_projel',
            },
            {
              title: 'ProjelCloud',
              description:
                'Sistema web de hospedagem e gerenciamento de arquivos em nuvem, que também conta com chat e visualização de documentos como PDF nativa na plataforma.',
              myRole: 'configuração PHP e implementação em VPS',
              techStack: 'Shell, PHP, CSS, JS, Python, Dockerfile, Makefile',
              url: 'http://projel.cloud/',
              
            },
            {
              title: 'Help Desk',
              description:
                "HelpDesk para abertura de tickets e listagem de demandas da empresa, incluirá chat para ser adicionado na intranet da empresa.",
              myRole:
                "Criar todo o projeto (ainda em fase de desenvolvimento).",
              techStack: 'Ruby, CoffeeScript, TypeScript, JS, Vue, HTML',
              
            },
            {
              title: 'Meu primeiro site portfolio',
              description:
                'Meu site pessoal contendo um portfolio',
              techStack: 'HTML, CSS, JS',
              url: 'https://github.com/WPNTL/Profile_card',
            },
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'Shell Script',
              progress: 100,
            },
            {
              name: 'SQL Server',
              progress: 100,
            },
            {
              name: 'React/Redux',
              progress: 70,
            },
            {
              name: 'Node.js',
              progress: 90,
            },
            {
              name: 'PHP',
              progress: 90,
            },
            {
              name: 'MongoDB',
              progress: 80,
            },
            {
              name: 'Typescript',
              progress: 70,
            },
            {
              name: 'Python',
              progress: 70,
            },
            {
              name: 'Kubernetes',
              progress: 40,
            },
            {
              name: 'ASP.NET',
              progress: 50,
            },
          ],
          soft: 'Pensamento analítico, Trabalho em equipe, Resolução criativa de problemas, Gerenciamento, Liderança, Proatividade, Inglês avançado',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'Se você quiser entrar em contato comigo, me envie um email em: ',
          email: 'contato@wesleypuntel.dev',
          socialText: 'Ou você pode me encontrar nos links abaixo:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/wesley-puntel-carvalho-719b7426a/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/WPNTL',
            },
            {
              name: 'FaInstagram',
              link: 'https://www.instagram.com/wesleypuntel/',
            },
            {
              name: 'FaTwitter',
              link: 'https://twitter.com/PuntelWesley',
            },
            
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
