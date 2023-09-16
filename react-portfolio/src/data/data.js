import {
    UilFacebookF,
    UilGithub,
    UilLinkedin,
    UilUser,
    UilEnvelopeAdd,
    UilMobileAndroid, UilFileShareAlt,
    UilSuitcase,
    UilLocationPinAlt,
    UilTrophy,
    UilBracketsCurly,
    UilSlidersVAlt,
    UilPagelines,

} from '@iconscout/react-unicons'
//Images
import UniLogo from "../assets/images/uni-logo.png"
import HighSchool from "../assets/images/sports-school.jpg"
import MunicipalityLogo from "../assets/images/og-varna.jpg"
import HockeyAvatar from "../assets/images/avatar.jpg"
import TourisumLogo from "../assets/images/tourisum.jpg"
//Project Images
import MishMashProject from "../assets/images/mish-mash-one.png"
import MishMashProject2 from "../assets/images/mish-mash-two.png"
import MishMashProject3 from "../assets/images/mish-mash-three.png"
import StoreProject from "../assets/images/e-store.png";
import StoreProject2 from "../assets/images/e-store-two.png";
import StoreProject3 from "../assets/images/e-store-three.png";
import UeVarnaProject from "../assets/images/ue-one.png"
import UeVarnaProject2 from "../assets/images/ue-two.png"
import UeVarnaProject3 from "../assets/images/ue-three.png"
import HcVarnaProject from "../assets/images/hc-one.png"
import HcVarnaProject2 from "../assets/images/hc-two.png"
import HcVarnaProject3 from "../assets/images/hc-three.png"
import EstateProject from "../assets/images/estate-one.png"
import EstateProject2 from "../assets/images/estate-two.png"
import EstateProject3 from "../assets/images/estate-three.png"
//Certificate Images
import Certificate from "../assets/images/certificate.jpg"
import MonCertificate from "../assets/images/mon-logo.png"
import Trophy from "../assets/images/trophy.png"

//Icons
import Html from "../assets/icons/Html"
import Css from "../assets/icons/Css"
import Tailwind from "../assets/icons/Tailwind"
import JavaScript from "../assets/icons/JavaScript"
import ReactJS from "../assets/icons/React"
import PHP from "../assets/icons/PHP"
import MySQL from "../assets/icons/MySQL"
import Firebase from "../assets/icons/Firebase"
import Git from "../assets/icons/Git"
import Vite from "../assets/icons/Vite"
import Motion from "../assets/icons/Motion"
import NodeJS from "../assets/icons/NodeJS"
import GitHub from "../assets/icons/GitHub"
import VSCode from "../assets/icons/vsCode"
import PowerBI from "../assets/icons/PowerBI"
import Postman from "../assets/icons/Postman"
import API from "../assets/icons/API"
import { ReactComponent as ReactRouter } from "../assets/svgs/react-router-stacked-color.svg"
import Redux from '../assets/icons/Redux'

const data = {
    headerLinks: [
        {
            id: 1,
            title: "About",
            href: "/",
            icon: UilUser
        },
        {
            id: 2,
            title: "Resume",
            href: "/resume",
            icon: UilFileShareAlt

        },
        {
            id: 3,
            title: "Projects",
            href: "/projects",
            icon: UilSuitcase
        },
        {
            id: 4,
            title: "Contacts",
            href: "/contacts",
            icon: UilMobileAndroid
        },
    ],
    socialLinks: [
        {
            icon: UilFacebookF,
            color: "text-[#1773EA]",
            href: "https://www.facebook.com/ivan.sarabeev",
        },
        {
            icon: UilGithub,
            color: "text-[#010409]",
            href: "https://github.com/IvanSarabeev",
        },
        {
            icon: UilLinkedin,
            color: "text-[#0072b1]",
            href: "https://www.linkedin.com/in/ivansarabeev/",
        }
    ],
    personalInfo: [
        {
            title: "Birthday",
            text: "Dec 08, 1999",
            color: "text-[#C17CEB]",
            icon: UilUser
        },
        {
            title: "Location",
            text: "Varna, Bulgaria",
            color: "text-[#FD7590]",
            icon: UilLocationPinAlt
        },
        {
            title: "Phone",
            text: "+359 894 415 621",
            href: "tel:+359894415621",
            color: "text-[#E93B81]",
            icon: UilMobileAndroid
        },
        {
            title: "Email",
            href: "mailto:ivan.sarabeev99@gmail.com",
            text: "ivan.sarabeev99@gmail.com",
            color: "text-[#6AB5B9]",
            icon: UilEnvelopeAdd
        },
    ],
    mainOccupations: [
        {
            title: "UI/UX Design",
            text: "I am drawn to the art of creating visually captivating interfaces that not only look beautiful but also enhance usability, making technology more intuitive and accessible for users. This is the main reason why I decided to pursue web development, rather than software engineering.",
            icon: UilPagelines,
            color: "bg-[#fcf4ff]",
            textColor: "text-[#6AB5B9]"
        },
        {
            title: "Hobbies",
            text: "Ever since I was young, I have been drawn to the fast-paced and dynamic nature of the sport. Spending time on the ice, honing my skills and strategizing with teammates, brings me immense joy and fulfillment. It has taught me valuable lessons in teamwork, perseverance, and discipline, which I apply both on and off the ice.",
            icon: UilTrophy,
            color: "bg-[#fefaf0]",
            textColor: "text-[#C17CEB]"
        }, {
            title: "Time Management",
            text: "I am striving in optimizing productivity and achieving goals by organizing tasks, setting priorities, and maintaining a balanced schedule to ensure efficient use of time.",
            icon: UilSlidersVAlt,
            color: "bg-[#fff0f8]",
            textColor: "text-[#E93B81]"
        },
        {
            title: "Web Development",
            text: "Web development allows me to combine my creativity and technical skills to build visually appealing and functional websites that enhance user experiences.",
            icon: UilBracketsCurly,
            color: "bg-[#f3faff]",
            textColor: "text-[#1773EA]"
        },

    ],
    tech: [
        {
            title: "HTML",
            icon: <Html />,
            area: "Front-end",
        },
        {
            title: "CSS",
            icon: <Css />,
            area: "Front-end",
        },
        {
            title: "Tailwind",
            icon: <Tailwind />,
            area: "Front-end",
        },
        {
            title: "JavaScript",
            icon: <JavaScript />,
            area: "Front-end",
        },
        {
            title: "React",
            icon: <ReactJS />,
            area: "Front-end",
        },
        {
            title: "Redux",
            icon: <Redux />,
            area: "Front-end",
        },
        {
            title: "Motion",
            icon: <Motion />,
            area: "Front-end",
        },
        {
            title: "PHP",
            icon: <PHP />,
            area: "Back-end",
        },
        {
            title: "Firebase",
            icon: <Firebase />,
            area: "Back-end",
        },
        {
            title: "MySQL",
            icon: <MySQL />,
            area: "Back-end",
        },
        {
            title: "Git",
            icon: <Git />,
            area: "Other",
        },
        {
            title: "GitHub",
            icon: <GitHub />,
            area: "Other",
        },
        {
            title: "Postman",
            icon: <Postman />,
            area: "Other",
        },
        {
            title: "VScode",
            icon: <VSCode />,
            area: "Other",
        },
        {
            title: "Power BI",
            icon: <PowerBI />,
            area: "Other",
        },
    ],
    education: [
        {
            title: "Master's degree",
            year: "2022 - present",
            color: "bg-[#fcf4ff]",
            icon: UniLogo,
            establishment: "University of Economics - Varna",
        },
        {
            title: "Bachelor's degree",
            year: "2018 - 2022",
            color: "bg-[#f3faff]",
            icon: UniLogo,
            establishment: "University of Economics - Varna"
        },
        {
            title: "High school",
            year: "2014 - 2018",
            color: "bg-[#fcf4ff]",
            icon: HighSchool,
            establishment: 'Sport school - "G. Benkovski"'
        }
    ],
    experience: [
        {
            title: "Skates instructor",
            period: "2020 - present",
            location: "Varna",
            bgColor: "bg-[#f3faff]",
            icon: MunicipalityLogo,
            company: "Municipality",
        },
        {
            title: "Ice hockey coach",
            period: "2021 - present",
            location: "Varna",
            bgColor: "bg-[#fcf4ff]",
            icon: HockeyAvatar,
            company: "HC-Varna",
        },
        {
            title: "Currency Cashier",
            period: "2019 - 2020",
            location: "Varna",
            bgColor: "bg-[#f3faff]",
            icon: TourisumLogo,
            company: "Briella",
        }
    ],
    personalSkills: [
        {
            title: "Collaborative Project Experience",
            description: "I have been working on a project for \"IT-Masterclass №10\", in collaboration with other fellow programmers, in particularly developing functional specifications, through APIs and other react libraries."
        },
        {
            title: "Adaptation to Technologies and Collaborative Development",
            description: "I have had to use new techs or libraries, according to the goals of the project. In addition I've worked with several people in developing in feature in the same branch and others."
        },
        {
            title: "My Journey into the Tech and React.js",
            description: "Since the beginning of 2023, I have been proactively engaged in learing new technologies such as: React.js, Javascripts funcionalities, concepts and UI libraries like Tailwind."
        },
        {
            title: "Proactive and Tenacious",
            description: "I'm a person who is ready to take an initiative and to never give up. I would easily say that it's thanks to my sports career."
        },
        {
            title: "Organizational skills and preparedness",
            description: "I'm organized person who is always prepared in advance, regardless of the occacion and the event.",
        },
    ],
    projects: [
        {
            title: "Mish-Mash",
            description: "I was contacted by a client from the UK, ho expressed interest in my developments. After extensive discussions and communication with the customer, we have finally reached this result.",
            demoLink: "https://mishmashgrillmeal.com/",
            codeLink: "https://github.com/IvanSarabeev/Mish-Mash",
            tech: [<ReactJS />, <ReactRouter />, <Tailwind />, <Motion />],
            Imgs: [
                { id: 1, url: MishMashProject },
                { id: 2, url: MishMashProject2 },
                { id: 3, url: MishMashProject3 },
            ],
        },
        {
            title: "E-Commerce",
            description: "I created the project with the goal of being able to practice without the usage of state managment libraries. This is a project that I would like to re-write by using a diffrent API and at the same time, I would apply state managment library like (MobX or Redux Toolkit). ",
            demoLink: "https://mishmashgrillmeal.com/",
            codeLink: "https://github.com/IvanSarabeev/E-Commerce",
            tech: [<ReactJS />, <Tailwind />, <API />, <ReactRouter />],
            Imgs: [
                { id: 1, url: StoreProject },
                { id: 2, url: StoreProject2 },
                { id: 3, url: StoreProject3 },
            ],
        },
        {
            title: "Hello-UE",
            description: "I was participaiting in a project for \"IT-Masterclass №10\", in collaboration with other fellow programmers, we were developing functional specifications, through many API request and react libraries and many more JavaScript functionalities.",
            demoLink: "not avaible due to MIT License & Permissions",
            codeLink: "https://github.com/IvanSarabeev/hello-ue",
            tech: [<ReactJS />, <Tailwind />, <API />, <ReactRouter />, <NodeJS />],
            Imgs: [
                { id: 1, url: UeVarnaProject },
                { id: 2, url: UeVarnaProject2 },
                { id: 3, url: UeVarnaProject3 }
            ],
        },
        {
            title: "HC - Varna",
            description: "I am happy to share that I've developed the website of our hockey club. I had the idea to focus on interactive design and a friendly interface that makes it easy to navigate and use for any user. The website provides information about the club and its events, supporting communication between the fans. \n I'm planning on changing the entire website by using React, Tailwind and Flowbite for the UI.",
            demoLink: "http://www.hcvarna.bg/",
            codeLink: "https://github.com/IvanSarabeev/Hockey-Club-Varna",
            tech: [<Html />, <Css />, <JavaScript />,],
            Imgs: [
                { id: 1, url: HcVarnaProject },
                { id: 2, url: HcVarnaProject2 },
                { id: 3, url: HcVarnaProject3 }
            ],
        },
        // {
        //     title: "Weather-Application",
        //     description: "I have developed \"React Weather Forecast Application\" which provides current weather information and weather forecasts. I've used React.js and fetched data from open weather API provider.",
        //     tech: [<ReactJS />, <Tailwind />, <API />],
        //     Imgs: [
        //         {
        //             id: 1,
        //             url: "../images/estate-one.png",
        //         },
        //         {
        //             id: 2,
        //             url: "../images/estate-two.png",
        //         },
        //         {
        //             id: 3,
        //             url: "../images/estate-three.png"
        //         }
        //     ],
        //     demoLink: "not avaible",
        //     codeLink: "https://github.com/IvanSarabeev/React-Weather-Forecast-Application"
        // },
        {
            title: "Real Estate",
            description: "I have developed this mockup template, because in near future I would like to try new tech languagues like - Node.js & MongoDB or Next.js.",
            demoLink: "https://real-estates-ood.netlify.app/",
            codeLink: "https://github.com/IvanSarabeev/RealEstate-web-starterpack",
            tech: [<ReactJS />, <Css />, <Motion />, <Vite />],
            Imgs: [
                { id: 1, url: EstateProject },
                { id: 2, url: EstateProject2 },
                { id: 3, url: EstateProject3 }
            ],
        }
    ],
    certificate: [
        {
            title: "IT Master Class №10",
            text: "Upcoming ...",
            icon: Certificate,
        },
        {
            title: "Computer Literacy",
            text: "Mon - 2018",
            icon: MonCertificate,
        },
        {
            title: "Tournament 22/23",
            text: "International Champ",
            icon: Trophy,
        }
    ]
}
export default data;