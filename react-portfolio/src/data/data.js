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
import vsCode from "../icons/vsCode"
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
            href: "/Resume.jsx",
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
        },
        {
            title: "CSS",
            icon: <Css />,
            area: "Front-end",
        },
        {
            title: "JavaScript",
            icon: <JavaScript />,
            area: "Front-end",
        },
        {
            title: "React.JS",
            icon: <ReactJS />,
            area: "Front-end",
        },
        {
            title: "Tailwind",
            icon: <Tailwind />,
            area: "Front-end",
        },
        {
            title: "FrameMotion",
            icon: <FramerMotion />,
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
            title: "SQL",
            icon: <MySQL />,
            area: "Back-end",
        },
        {
            title: "Git",
            icon: <Git />,
            area: "Other",
        },
        {
            title: "VS code",
            icon: <vsCode />,
            area: "Other",
        },
        {
            title: "GitHub",
            icon: UilGithub,
            area: "Other",
        },
        {
            title: "Postman",
            icon: <Postman />,
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
            establishment: "University of Economics - Varna",
        },
        {
            title: "Bachelor's degree",
            year: "2018 - 2022",
            color: "bg-[#fefaf0]",
            establishment: "University of Economics - Varna"
        },
        {
            title: "High school",
            year: "2014 - 2018",
            color: "bg-[#f3faff]",
            establishment: 'Sports school - "G. Benkovsk", Varna'
        }
    ],
    experience: [
        {
            title: "Ice skates instructor",
            period: "2020 - present",
            location: "Varna",
            bgColor: "bg-[#fefaf0]",
            company: "Municipality",
        },
        {
            title: "Ice hockey coach",
            period: "2021 - present",
            location: "Varna",
            bgColor: "bg-[#f3faff]",
            company: "HC-Varna",
        },
        {
            title: "Cook",
            period: "2019 - 2020",
            location: "Varna",
            bgColor: "bg-[#fcf4ff]",
            company: "Stella ltd.",
        }
    ]
}
export default data;