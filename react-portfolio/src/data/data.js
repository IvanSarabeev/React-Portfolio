import {
    UilFacebookF,
    UilGithub,
    UilLinkedin,
    UilUser,
    UilEnvelopeAdd,
    UilMobileAndroid, UilFileShareAlt,
    UilSuitcase,
    UilLocationPinAlt,
    UilEnglishToChinese,
    UilVisualStudio,
    UilBracketsCurly,
    UilSlidersVAlt,
    UilPagelines,
    UilGraduationCap

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
import FramerMotion from "../icons/FrameMotion"
import GitHub from "../icons/GitHub"
import VSCode from "../icons/vsCode"
import PowerBI from "../icons/PowerBI"
import Postman from "../icons/Postman"

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
        {
            id: 5,
            title: "Achievments",
            href: "/achievments",
            icon: UilEnglishToChinese
        }
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
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. ",
            icon: UilPagelines,
            color: "bg-[#fcf4ff]",
            textColor: "text-[#6AB5B9]"
        },
        {
            title: "Hobbies",
            text: "I'm ice hockey coach & competative player.\n Have numerous awards & championships behind my back",
            icon: UilVisualStudio,
            color: "bg-[#fefaf0]",
            textColor: "text-[#C17CEB]"
        }, {
            title: "Management",
            text: "As an innovator, I bring a strategic mindset and hands-on approach to every project. I have experience leading small initiatives, ensuring seamless coordination and alignment with organizational goals.",
            icon: UilSlidersVAlt,
            color: "bg-[#fff0f8]",
            textColor: "text-[#E93B81]"
        },
        {
            title: "Web Development",
            text: "In today's world, I'm constatntly following the new tendentions on the web",
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
            color: "text-[#ff5733]"
        },
        {
            title: "CSS",
            icon: <Css />,
            area: "Front-end",
            color: "text-[#619be8]"
        },
        {
            title: "JavaScript",
            icon: <JavaScript />,
            area: "Front-end",
            color: "text-[#ead41c]"
        },
        {
            title: "React.JS",
            icon: <ReactJS />,
            area: "Front-end",
            color: "text-[#5ccfee]"
        },
        {
            title: "Tailwind",
            icon: <Tailwind />,
            area: "Front-end",
            color: "text-[#35b3eb]"
        },
        {
            title: "FrameMotion",
            icon: <FramerMotion />,
            area: "Front-end",
            color: "text-[#e742ed]"
        },
        {
            title: "PHP",
            icon: <PHP />,
            area: "Back-end",
            color: "text-[#7175aa]"
        },
        {
            title: "Firebase",
            icon: <Firebase />,
            area: "Back-end",
            color: "text-[#f29800]"
        },
        {
            title: "SQL",
            icon: <MySQL />,
            area: "Back-end",
            color: "text-[#005c83]"
        },
        {
            title: "Git",
            icon: <Git />,
            area: "Other",
            color: "text-[#e44c30]"
        },
        {
            title: "VS code",
            icon: <VSCode />,
            area: "Other",
            color: "text-[#3ba1e6]"
        },
        {
            title: "GitHub",
            icon: <GitHub />,
            area: "Other",
            color: "text-[#000000]"
        },
        {
            title: "Postman",
            icon: <Postman />,
            area: "Other",
            color: "text-[#f06732]"
        },
        {
            title: "Power BI",
            icon: <PowerBI />,
            area: "Other",
            color: "text-[#da9f08]"
        },
    ],
    education: [
        {
            title: "Master's degree",
            year: "2022 - present",
            color: "bg-[#fcf4ff]",
            icon: UilGraduationCap,
            establishment: "University of Economics - Varna",
        },
        {
            title: "Bachelor's degree",
            year: "2018 - 2022",
            color: "bg-[#fefaf0]",
            icon: UilGraduationCap,
            establishment: "University of Economics - Varna"
        },
        {
            title: "High school",
            year: "2014 - 2018",
            color: "bg-[#f3faff]",
            icon: UilGraduationCap,
            establishment: 'Sports school - "G. Benkovsk", Varna'
        }
    ],
    experience: [
        {
            title: "Skates instructor",
            period: "2020 - present",
            location: "Varna",
            bgColor: "bg-[#fefaf0]",
            icon: "",
            company: "Municipality",
        },
        {
            title: "Ice hockey coach",
            period: "2021 - present",
            location: "Varna",
            bgColor: "bg-[#f3faff]",
            icon: "../images/hc-varna.png",
            company: "HC-Varna",
        },
        {
            title: "Cook",
            period: "2019 - 2020",
            location: "Varna",
            bgColor: "bg-[#fcf4ff]",
            icon: "",
            company: "Stella ltd.",
        }
    ],
    personalSkills: [
        {
            num: 1,
            btnIndex: 1,
            btnVisibility: true,
            title: "Cooperation & teamworker",
            description: "I have been working on a project for 'IT-Masterclass #10', in collaboration with other fellow programmers, in particularly developing functional specifications, through APIs and other react libraries."
        },
        {
            num: 2,
            btnIndex: 2,
            btnVisibility: true,
            title: "Adaptability & flexibility",
            description: "I have had to use new techs or libraries, according to the goals of the project. In addition I've worked with several people in developing in feature in the same branch and others..."
        },
        {
            num: 3,
            btnIndex: 3,
            btnVisibility: true,
            title: "Interested in learning and self-improvment",
            description: "Since the beginning of 2023, I have been proatively engaged in learing new technologies such as: React.js, some advance Javascripts funcionalities & concepts and other UI libraries."
        },
        {
            num: 4,
            btnIndex: 4,
            btnVisibility: true,
            title: "Proactive & initiative",
            description: "I'am a person who is ready to take an initiative and to never give up. I would easily say that it's thanks to my sports career."
        },
        {
            num: 5,
            btnIndex: 5,
            btnVisibility: true,
            title: "Organization",
            description: "I'am organized person who is always prepared in advance, regardless of the occacion and the event.",
        },
    ],
    projects: [
        {
            title: "Hello-UE",
            description: "I was participaiting in a project for \"IT-Masterclass №10\", in collaboration with other fellow programmers, we were developing functional specifications, through many API request and react libraries and many more JavaScript functionalities.",
            usedTech: "React, Tailwind, Node",
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
            title: "Weather-Application",
            description: "I have developed \"React Weather Forecast Application\" which provides current weather information and weather forecasts. I've used React.js and fetched data from open weather API providers.",
            usedTech: "React, Tailwind, OpenWeatherMapApi",
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
            title: "HC - Varna",
            description: "I am happy to share that I've developed the website - http://www.hcvarna.bg/. I have created it with a focus on interactive design and a friendly interface that makes it easy to navigate and use for any user. The website provides information about the club and its events, supporting communication between the fans.",
            usedTech: "HTML & CSS, Vanilla JS, AnimationCss, Swiper",
            codeLink: "http://www.hcvarna.bg/",
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
            title: "Real Estate",
            description: "I have developed this mockup template, because in near future I would like to try new tech languagues with - Node.js & MongoDB.",
            usedTech: "React, Tailwind, Motion",
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
    ]
}
export default data;