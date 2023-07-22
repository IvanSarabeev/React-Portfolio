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

import Html from "../icons/Html"
import Css from "../icons/Css"
import Tailwind from "../icons/Tailwind"
import JavaScript from "../icons/JavaScript"
import ReactJS from "../icons/React"
import PHP from "../icons/PHP"
import MySQL from "../icons/MySQL"
import Firebase from "../icons/Firebase"
import Git from "../icons/Git"
import Motion from "../icons/Motion"
import NodeJS from "../icons/NodeJS"
import GitHub from "../icons/GitHub"
import VSCode from "../icons/vsCode"
import PowerBI from "../icons/PowerBI"
import Postman from "../icons/Postman"
import Swiper from "../icons/Swiper"
import API from "../icons/API"
// import IconCertificate from "../icons/Certificate";

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
            color: "#121212",
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
            icon: "../images/uni-logo.png",
            establishment: "University of Economics - Varna",
        },
        {
            title: "Bachelor's degree",
            year: "2018 - 2022",
            color: "bg-[#f3faff]",
            icon: "../images/uni-logo.png",
            establishment: "University of Economics - Varna"
        },
        {
            title: "High school",
            year: "2014 - 2018",
            color: "bg-[#fcf4ff]",
            icon: "../images/sports-school.jpg",
            establishment: 'Sports school - "G. Benkovsk", Varna'
        }
    ],
    experience: [
        {
            title: "Skates instructor",
            period: "2020 - present",
            location: "Varna",
            bgColor: "bg-[#f3faff]",
            icon: "../images/og-varna.jpg",
            company: "Municipality",
        },
        {
            title: "Ice hockey coach",
            period: "2021 - present",
            location: "Varna",
            bgColor: "bg-[#fcf4ff]",
            icon: "../images/avatar.jpg",
            company: "HC-Varna",
        },
        {
            title: "Currency Cashier",
            period: "2019 - 2020",
            location: "Varna",
            bgColor: "bg-[#f3faff]",
            icon: "../images/tourisum.jpg",
            company: "Briella",
        }
    ],
    personalSkills: [
        {
            num: 1,
            btnIndex: 1,
            btnVisibility: true,
            title: "Teamworker",
            description: "I have been working on a project for \"IT-Masterclass №10\", in collaboration with other fellow programmers, in particularly developing functional specifications, through APIs and other react libraries."
        },
        {
            num: 2,
            btnIndex: 2,
            btnVisibility: true,
            title: "Adaptable",
            description: "I have had to use new techs or libraries, according to the goals of the project. In addition I've worked with several people in developing in feature in the same branch and others..."
        },
        {
            num: 3,
            btnIndex: 3,
            btnVisibility: true,
            title: "Learner",
            description: "Since the beginning of 2023, I have been proatively engaged in learing new technologies such as: React.js, some advance Javascripts funcionalities & concepts and other UI libraries."
        },
        {
            num: 4,
            btnIndex: 4,
            btnVisibility: true,
            title: "Proactive",
            description: "I'am a person who is ready to take an initiative and to never give up. I would easily say that it's thanks to my sports career."
        },
        {
            num: 5,
            btnIndex: 5,
            btnVisibility: true,
            title: "Organized",
            description: "I'am organized person who is always prepared in advance, regardless of the occacion and the event.",
        },
    ],
    projects: [
        {
            title: "Hello-UE",
            description: "I was participaiting in a project for \"IT-Masterclass №10\", in collaboration with other fellow programmers, we were developing functional specifications, through many API request and react libraries and many more JavaScript functionalities.",
            usedTech: "React, Tailwind, Node",
            tech: [<ReactJS />, <Tailwind />, <API />, <NodeJS />],
            Imgs: [
                {
                    id: 1,
                    url: "../images/ue-one.png",
                },
                {
                    id: 2,
                    url: "../images/ue-two.png",
                },
                {
                    id: 3,
                    url: "../images/ue-three.png"
                }
            ],
            codeLink: "https://github.com/IvanSarabeev/hello-ue",
        },
        {
            title: "HC - Varna",
            description: "I am happy to share that I've developed the website - http://www.hcvarna.bg/. I have created it with a focus on interactive design and a friendly interface that makes it easy to navigate and use for any user. The website provides information about the club and its events, supporting communication between the fans. \n I'm planning on changing the entire website by using React, Tailwind and Flowbite for the UI.",
            usedTech: "HTML & CSS, Vanilla JS, AnimationCss, Swiper",
            tech: [<Html />, <Css />, <JavaScript />, <Swiper />,],
            codeLink: ".",
            Imgs: [
                {
                    id: 1,
                    url: "../images/hc-one.png",
                },
                {
                    id: 2,
                    url: "../images/hc-two.png",
                },
                {
                    id: 3,
                    url: "../images/hc-three.png"
                }
            ],
            href: "http://www.hcvarna.bg/",
        },
        {
            title: "Weather-Application",
            description: "I have developed \"React Weather Forecast Application\" which provides current weather information and weather forecasts. I've used React.js and fetched data from open weather API providers.",
            usedTech: "React, Tailwind, OpenWeatherMapApi",
            tech: [<ReactJS />, <Tailwind />, <API />],
            Imgs: [
                {
                    id: 1,
                    url: "../images/estate-one.png",
                },
                {
                    id: 2,
                    url: "../images/estate-two.png",
                },
                {
                    id: 3,
                    url: "../images/estate-three.png"
                }
            ],
            codeLink: "https://github.com/IvanSarabeev/React-Weather-Forecast-Application"
        },
        {
            title: "Real Estate",
            description: "I have developed this mockup template, because in near future I would like to try new tech languagues like - Node.js & MongoDB or Next.js.",
            usedTech: "React, Tailwind, Motion",
            tech: [<ReactJS />, <Tailwind />, <Motion />],
            Imgs: [
                {
                    id: 1,
                    url: "../images/estate-one.png",
                },
                {
                    id: 2,
                    url: "../images/estate-two.png",
                },
                {
                    id: 3,
                    url: "../images/estate-three.png"
                }
            ],
            codeLink: "https://github.com/IvanSarabeev/RealEstate-web-starterpack",
        }
    ],
    certificate: [
        {
            title: "IT Master Class №10",
            text: "Upcoming",
            icon: "../images/certificate.jpg",
        },
        {
            title: "Computer Literacy",
            text: "Mon - 2018",
            icon: "../images/mon-logo.png",
        },
        {
            title: "Tournament 22/23",
            text: "International Champ",
            icon: "../images/trophy.png",
        }
    ]
}
export default data;