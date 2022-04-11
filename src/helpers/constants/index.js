export const pages = [
  {
    id: 'home',
    name: 'Home',
    pathname: '/home'
  },
  {
    id: 'about',
    name: 'About',
    pathname: '/about'
  },
  {
    id: 'projects',
    name: 'Projects',
    pathname: '/projects'
  },
  {
    id: 'contact',
    name: 'Contact',
    pathname: '/contact'
  }
];

export const about = [
  {
    id: 0,
    title: 'Professional experience',
    items: [
      {
        id: 0,
        title: 'Frontend developer',
        subtitle: 'Infokarta d.o.o.',
        date: 'December 2020 - January 2021',
        bullets: [
          {
            id: 0,
            text: 'Worked on maintaining a smaller project'
          },
          {
            id: 1,
            text: 'Used GeoServer for uploading images'
          },
          {
            id: 2,
            text: 'Basics of working with React.js and Redux'
          }
        ]
      },
      {
        id: 1,
        title: 'Frontend developer',
        subtitle: 'Fuel Software d.o.o.',
        date: 'February 2020 - March 2021',
        bullets: [
          {
            id: 0,
            text: 'Started as junior developer'
          },
          {
            id: 1,
            text: 'Worked on existing projects which led to new projects I worked on from scratch'
          },
          {
            id: 2,
            text: 'Worked on internal and client projects which included features such as real-time event driven technologies'
          },
          {
            id: 3,
            text: 'Maintained frontend for SaaS products'
          },
          {
            id: 4,
            text: 'Engaged in project guidelines in brainstorming and discussing task-oriented work'
          },
          {
            id: 5,
            text: 'Understanding the requirements of the tasks and working on them exclusively independently'
          },
          {
            id: 6,
            text: 'Consulting and collaborating with design team'
          }
        ]
      }
    ]
  },
  {
    id: 1,
    title: 'Professional qualifications',
    items: [
      {
        id: 0,
        title: 'University of Split, Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture',
        subtitle: 'Master´s degree',
        date: 'July 2021',
        bullets: null
      },
      {
        id: 1,
        title: 'University of Split, Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture',
        subtitle: 'Bachelor of Science in Electrical Engineering and Information Technology',
        date: 'September 2019',
        bullets: null
      }
    ]
  },
  {
    id: 2,
    title: 'Key skills and experience',
    items: [
      {
        id: 0,
        title: null,
        subtitle: null,
        date: null,
        bullets: [
          {
            id: 0,
            text: '2 years of industrial experiance'
          },
          {
            id: 1,
            text: 'Skilled with React.js'
          },
          {
            id: 2,
            text: 'Seniority: mid'
          },
          {
            id: 3,
            text: 'Effective in writing code'
          },
          {
            id: 4,
            text: 'Proficient with HTML and CSS'
          },
          {
            id: 5,
            text: 'Cultural fit guy'
          },
          {
            id: 6,
            text: 'Eager for professional progress and learning new technologies'
          },
          {
            id: 7,
            text: 'Team player'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Education and volunteering',
    items: [
      {
        id: 0,
        title: 'Profico - Internship',
        subtitle: null,
        date: 'July 2020',
        bullets: [
          {
            id: 0,
            text: 'frontend developer'
          },
          {
            id: 1,
            text: '"Smart marina" app'
          },
          {
            id: 2,
            text: 'first practical experience with frontend technologies'
          }
        ]
      },
      {
        id: 1,
        title: 'Ocean Hackathon',
        subtitle: null,
        date: 'October 2020',
        bullets: [
          {
            id: 0,
            text: 'frontend developer'
          },
          {
            id: 1,
            text: '"Dock.me" app - smart ship docking'
          }
        ]
      }
    ]
  }
];

export const projects = [
  {
    id: 0,
    title: 'Dalmatiko osiguranje',
    items: [
      {
        id: 0,
        title: null,
        subtitle: null,
        date: null,
        bullets: [
          {
            id: 0,
            text: 'agency project, worked on it from scratch with focus on learning ReactJS, HTML and CSS, GatsbyJS'
          },
          {
            id: 1,
            text: 'integrated REST API calls with Strapi as CMS'
          },
          {
            id: 2,
            text: 'custom UI/UX design conversion to HTML, CSS and JSX'
          }
        ]
      }
    ]
  },
  {
    id: 1,
    title: 'Gembet',
    items: [
      {
        id: 0,
        title: null,
        subtitle: null,
        date: null,
        bullets: [
          {
            id: 0,
            text: 'maintained frontend code (ReactJS, HTML, CSS, Redux, WebSockets, webpack)'
          },
          {
            id: 1,
            text: 'worked on complex user interface for sportsbook with a lot of reactive elements and functional components'
          },
          {
            id: 2,
            text: 'client WebSocket real-time event driven communication with API'
          },
          {
            id: 3,
            text: 'created email templates'
          },
          {
            id: 4,
            text: 'created smaller affiliate standalone pages (HTML, CSS)'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Stadium',
    items: [
      {
        id: 0,
        title: null,
        subtitle: null,
        date: null,
        bullets: [
          {
            id: 0,
            text: 'created backoffice application (admin panel) for Stadium product in ReactJS, webpack, HTML, CSS, Redux, WebSocket, WebWorkers'
          },
          {
            id: 1,
            text: 'worked on some of the parts of integratable iframe widget of Stadium'
          },
          {
            id: 2,
            text: 'project contains very dynamic, content rich user experience which includes big set of problems regarding the rendering of the app, collecting and processing the data from API and overall the project had complex custom visual components which needed to be decoupled and fast for rendering with a lot of dependent functionalities on them'
          },
          {
            id: 3,
            text: 'backoffice feature stuff like dual real-time chat windows for multiple dynamically created chatrooms with option for hotkeys (shortcuts), command inputs in the message send box, polls, raffles and banner announcements. The backoffice also has realtime newsfeed for admins and personal notifications for admin using the backoffice. It also contains multiple types of messages that could be sent over platform like casino win share or pending betslip share which can be reused by other players to try out their luck via stadium widget integrated on client´s website'
          },
          {
            id: 4,
            text: 'other known pages includes dynamic settings page with script origin control (custom CORS), standalone pages (tables) for displaying players, shares, messages, announcements etc.'
          },
          {
            id: 5,
            text: 'complex statistics page render using ChartJS'
          },
          {
            id: 6,
            text: 'biggest challenge on client script (iframe) was to make it smaller in bundle size and that every functionality is still available'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Knowledge',
    items: [
      {
        id: 0,
        title: null,
        subtitle: null,
        date: null,
        bullets: [
          {
            id: 0,
            text: 'product like stadium but is running on microservices on backend, it is a knowledge base product aimed for our clients integration with our other products like Stadium'
          },
          {
            id: 1,
            text: 'created an admin panel for the application from scratch and integratable website from scratch using ReactJS'
          },
          {
            id: 2,
            text: 'created custom rich text editor using DraftJS with all toolbar functionalities such as changing inline styles (bold, italic, underline), custom styles (links, highlights) and block types (header styles from 1 to 6, unordered and ordered lists, blockquotes, images) '
          },
          {
            id: 3,
            text: 'we used one build of the application for multiple users with config for each coming from REST API'
          },
          {
            id: 4,
            text: 'the application would look for subdomain prefix and with the subdomain value which could be dynamically changed from backoffice, the REST API would be used properly to fetch correct set of data for each of our customers'
          }
        ]
      }
    ]
  }
];
