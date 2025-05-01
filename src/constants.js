// Skills Section Logo's
import htmlLogo from './assets/skills_logo/html.png';
import cssLogo from './assets/skills_logo/css.png';
import sassLogo from './assets/skills_logo/sass.png';
import javascriptLogo from './assets/skills_logo/javascript.png';
import reactjsLogo from './assets/skills_logo/reactjs.png';
import reduxLogo from './assets/skills_logo/reduc.png';
import tailwindcssLogo from './assets/skills_logo/tailwindcss.png';
import materialuiLogo from './assets/skills_logo/materialui.png';
import bootstrapLogo from './assets/skills_logo/bootstrap.png';
import nodejsLogo from './assets/skills_logo/nodejs.png';
import expressjsLogo from './assets/skills_logo/express.png';
import mysqlLogo from './assets/skills_logo/mysql.png';
import eclipseLogo from './assets/skills_logo/eclipselogo.jpg';
import cLogo from './assets/skills_logo/c.png';
import cppLogo from './assets/skills_logo/cpp.png';
import javaLogo from './assets/skills_logo/java.png';
import pythonLogo from './assets/skills_logo/python.png';
import wordpressLogo from './assets/skills_logo/wordpress.png';
import gitLogo from './assets/skills_logo/git.png';
import githubLogo from './assets/skills_logo/github.png';
import vscodeLogo from './assets/skills_logo/vscode.png';
import postmanLogo from './assets/skills_logo/postman.png';
import mcLogo from './assets/skills_logo/mc.png';
import renderLogo from './assets/skills_logo/render.jpg';
import netlifyLogo from './assets/skills_logo/netlify.png';
import vercelLogo from './assets/skills_logo/vercel.png';
import thunderClientlogo from './assets/skills_logo/thunderclientlogo.png';

// Experience Section Logo's
import saivaLogo from './assets/company_logo/saiva.jpg';
import internshipLogo from './assets/company_logo/ibm_aicte.png';
import trainingLogo from './assets/company_logo/honeywellazure.jpg';

// Education Section Logo's
import cpsLogo from './assets/education_logo/cps.jpg';
import knmietLogo from './assets/education_logo/knmiet.jpg';
import srmLogo from './assets/education_logo/srm_logo.png';

// Project Section Logo's
import JobHuntLogo from './assets/projects_logo/job_hunt.png';
import FoodExpressLogo from './assets/projects_logo/food_express.png';
import EagleEyeLogo from './assets/projects_logo/eagle_eye.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'WordPress', logo: wordpressLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mcLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Thunder \nClient', logo: thunderClientlogo },
      { name: 'Eclipse', logo: eclipseLogo },
      { name: 'Render', logo: renderLogo }
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: saivaLogo,
      role: "HR IT Recruiter Intern",
      company: "SaiVa SysTem – a CMMI Level III Company",
      date: "March 2025 - April 2025",
      desc: "Handled and managed candidate data and recruitment files efficiently in HR operations within the IT industry, ensuring accurate and organized records. Scheduled interviews, coordinated candidate communications, and assisted with onboarding and joining formalities, contributing to a smooth hiring experience. ",
      skills: [
        "IT Recruitment",
        "Data Management",
        "HR Operations",
        "Onboaring & Joining Candidates",
        "CRM",
        "Scheduled interviews",
      ],
    },
    {
      id: 1,
      img: internshipLogo,
      role: "AI & Cloud Learning",
      company: "IBM with Edunet (AICTE)",
      date: "June 2024 - July 2024",
      desc: "Gained hands-on experience with AI concepts, Cloud computing fundamentals, and practical applications on the IBM Cloud Platform. Explored real-world use cases, enhancing understanding of cloud services, AI integration, and digital innovation strategies. ",
      skills: [
        "AI",
        "Cloud",
      ],
    },
    {
        id: 2,
        img: trainingLogo,
        role: "Microsoft Azure AI Engineer Associate\n(AI-102) Training",
        company: "Honeywell (Microsoft)",
        date: "Nov 2022 - Dec 2022",
        desc: "The Microsoft Azure AI Engineer Associate\n(AI-102) course under the Honeywell Student Empowerment Program, achieving Grade A. Applied skills learned in Microsoft Azure for AI development, cloud solutions, and data analysis, gaining hands-on experience in cloud technologies",
        skills: [
          "Azure",
          "AI",
          "Power BI",
          "IBM Cloud",
          "Data Analysis",
        ],
      },
  ];
  
  export const education = [
    {
      id: 0,
      img: srmLogo,
      school: "SRM University, Modinagar",
      date: "July 2023 - May 2025",
      grade: "8.69 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from SRM University, Modinagar. During my time at SRM, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at SRM University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master's of Computer Applications - MCA",
    },
    {
      id: 1,
      img: knmietLogo,
      school: "Dr. K.N Modi Institute of Engineering & Technology, Modinagar",
      date: "Sept 2020 - June 2023",
      grade: "7.0 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science (BCA) from Dr. K.N Modi Institute of Engineering & Technology, Modinagar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Dr. K.N Modi Institute of Engineering & Technology allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor's of Computer Applications' - BCA (Computer Applications)",
    },
    {
      id: 2,
      img: cpsLogo,
      school: "Chhaya Public School, Modinagar\nUttar Pradesh",
      date: "Apr 2019 - July 2020",
      desc: "I completed my class 12th education from Chhaya Public School, Modinagar under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "CBSE(XII)- PCM",
    },
    {
      id: 3,
      img: cpsLogo,
      school: "Chhaya Public School, Modinagar\nUttar Pradesh",
      date: "Apr 2017 - May 2018",
      desc: "I completed my class 10th education from Chhaya Public School, Modinagar under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "JobHunt\nA Job Portal App",
      description:
        "JobHunt is a MERN Stack dynamic and user-friendly React.js application designed to streamline the job search process. It fetches and displays comprehensive GitHub profile data, including repositories, followers, and contribution stats, offering an intuitive experience for developers, recruiters, and tech enthusiasts alike.",
      image: JobHuntLogo,
      tags: ["HTML", "CSS", "JavaScript" , "MongoDB" , "Express.js", "Node.js" , "React.js"],
      github: "https://github.com/Kshitijkr31/JobHunt",
      webapp: "https://jobhunt-s3b6.onrender.com/",
    },
    {
      id: 1,
      title: "Food Express\nA Food Delivery Platform",
      description:
         "Food Express is a Full Stack food ordering platform built with the MERN stack and Stripe integration. It enables users to browse restaurants, place orders, and make secure online payments. The platform offers a seamless user experience, ensuring efficiency for both customers and vendors.",
      image: FoodExpressLogo,
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "HTML", "CSS", "JavaScript", "Stripe"],
      github: "https://github.com/Kshitijkr31/FoodExpress",
      webapp: "https://foodexpress-frontend-wlks.onrender.com/",
    },
    {
      id: 2,
      title: "EagleEye\n News Aggregator App",
      description:
      "EagleEye is a MERN Stack React-based web application that delivers real-time news updates from various categories such as technology, sports, entertainment, and business. Featuring a clean UI and smooth navigation, the platform offers an engaging news reading experience with up-to-date articles from reliable sources.",
      image: EagleEyeLogo,
      tags: ["React.js", "MongoDB", "Node.js", "Express.js" , "HTML", "CSS", "JavaScript", "NewsAPI"],
      github: "https://github.com/Kshitijkr31/EagleEYE-News-website",
      webapp: "https://eagleeyenews.netlify.app/",
    }
  ];  