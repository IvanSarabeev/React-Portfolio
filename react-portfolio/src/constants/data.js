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
import VanLife from "../assets/images/van-one.png"
import VanLifeTwo from "../assets/images/van-two.png"
import VanLifeThree from "../assets/images/van-three.png"
import Watchlist from "../assets/images/watchlist-one.png"
import WatchlistTwo from "../assets/images/watchlist-two.png"
import WatchlistThree from "../assets/images/watchlist-three.png"
import Todo from "../assets/images/todo-one.png"
import TodoTwo from "../assets/images/todo-two.png"
import TodoThree from "../assets/images/todo-three.png"
import MishMashProject from "../assets/images/mish-mash-one.png"
import MishMashProject2 from "../assets/images/mish-mash-two.png"
import MishMashProject3 from "../assets/images/mish-mash-three.png"
import UeVarnaProject from "../assets/images/ue-one.png"
import UeVarnaProject2 from "../assets/images/ue-two.png"
import UeVarnaProject3 from "../assets/images/ue-three.png"
import HcVarnaProject from "../assets/images/hc-one.png"
import HcVarnaProject2 from "../assets/images/hc-two.png"
import HcVarnaProject3 from "../assets/images/hc-three.png"
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
import Motion from "../assets/icons/Motion"
import NodeJS from "../assets/icons/NodeJS"
import GitHub from "../assets/icons/GitHub"
import VSCode from "../assets/icons/vsCode"
import Postman from "../assets/icons/Postman"
import IconLogoVercel from '../assets/icons/Vercel'
import { ReactComponent as Lodash } from "../assets/svgs/lodash-svgrepo-com.svg";
import { ReactComponent as Netlify } from "../assets/svgs/netlify-svgrepo-com.svg";
import { ReactComponent as MirageJs } from "../assets/svgs/mirage.svg";
import { ReactComponent as ReactRouter } from "../assets/svgs/react-router-stacked-color.svg"
import IconTypescript from '../assets/icons/TypeScript'

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
            hoverBg: "bg-[#1d8cf8]",
            color: "text-[#1773EA]",
            href: "https://www.facebook.com/ivan.sarabeev",
        },
        {
            icon: UilGithub,
            hoverBg: "bg-[#111111]",
            color: "text-[#010409]",
            href: "https://github.com/IvanSarabeev",
        },
        {
            icon: UilLinkedin,
            hoverBg: "bg-[#1d8cf8]",
            color: "text-[#0072b1]",
            href: "https://www.linkedin.com/in/ivansarabeev/",
        }
    ],
    personalInfo: [
        {
            title: "Birthday",
            text: "Born: 08/12/1999",
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
            svgColor: "text-[#3D2E9E]"
        },
        {
            title: "Hobbies",
            text: "Ever since I was young, I have been drawn to the fast-paced and dynamic nature of the sport. Spending time on the ice, honing my skills and strategizing with teammates, brings me immense joy and fulfillment. It has taught me valuable lessons in teamwork, perseverance, and discipline, which I apply both on and off the ice.",
            icon: UilTrophy,
            svgColor: "text-[#E93B81]"
        }, {
            title: "Time Management",
            text: "I am striving in optimizing productivity and achieving goals by organizing tasks, setting priorities, and maintaining a balanced schedule to ensure efficient use of time.",
            icon: UilSlidersVAlt,
            svgColor: "text-[#E93B81]"
        },
        {
            title: "Web Development",
            text: "Web development allows me to combine my creativity and technical skills to build visually appealing and functional websites that enhance user experiences.",
            icon: UilBracketsCurly,
            svgColor: "text-[#1773EA]"
        },
    ],
    certificate: [
        {
            title: "IT Master Class №10",
            text: "Upcoming ...",
            icon: Certificate,
        },
        {
            title: "Computer Literacy",
            text: "Mon - 2019",
            icon: MonCertificate,
        },
        {
            title: "Tournament 22/23",
            text: "Newest Trophies",
            icon: Trophy,
        }
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
            title: "TypeScript",
            icon: <IconTypescript />,
            area: "Front-end",
        },
        {
            title: "React",
            icon: <ReactJS />,
            area: "Front-end",
        },
        {
            title: "Lodash",
            icon: <Lodash />,
            area: "Front-end",
        },
        {
            title: "Motion",
            icon: <Motion />,
            area: "Front-end",
        },
        {
            title: "Mirage",
            icon: <MirageJs />,
            area: "Back-end",
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
            title: "Vercel",
            icon: <IconLogoVercel />,
            area: "Other",
        },
        {
            title: "Netlify",
            icon: <Netlify />,
            area: "Other",
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
    ],
    education: [
        {
            title: "Master's degree",
            year: "2022 - present",
            bgColor: "bg-slate-300/40",
            icon: UniLogo,
            establishment: "University of Economics - Varna",
        },
        {
            title: "Bachelor's degree",
            year: "2018 - 2022",
            bgColor: "bg-white/40",
            icon: UniLogo,
            establishment: "University of Economics - Varna"
        },
        {
            title: "High school",
            year: "2014 - 2018",
            bgColor: "bg-slate-300/40",
            icon: HighSchool,
            establishment: 'Sport school - "G. Benkovski"'
        }
    ],
    experience: [
        {
            title: "Ice hockey coach",
            period: "2021 - present",
            location: "Varna",
            bgColor: "bg-white/40",
            icon: HockeyAvatar,
            company: "HC-Varna",
        },
        {
            title: "Skates instructor",
            period: "2020 - present",
            location: "Varna",
            bgColor: "bg-slate-300/40",
            icon: MunicipalityLogo,
            company: "Municipality",
        },
        {
            title: "Currency Cashier",
            period: "2019 - 2020",
            location: "Varna",
            bgColor: "bg-white/40",
            icon: TourisumLogo,
            company: "Briella",
        }
    ],
    personalSkills: [
        {
            title: "Collaborative Experience",
            description: "I have been working on a project for \"IT-Masterclass №10\", in collaboration with other fellow programmers, in particularly developing functional specifications, through APIs and other react libraries."
        },
        {
            title: "Technologies and Development",
            description: "I have had to use new techs or libraries, according to the goals of the project. In addition I've worked with several people in developing in feature in the same branch and others."
        },
        {
            title: "Journey into the Web",
            description: "Since the beginning of 2023, I have been proactively engaged in learing new technologies such as: React.js, Javascripts funcionalities, concepts and UI libraries like Tailwind."
        },
        {
            title: "Proactive & Tenacious",
            description: "I'm a person who is ready to take an initiative and to never give up. I would easily say that it's thanks to my sports career."
        },
        {
            title: "Organizational Skills",
            description: "I'm organized person who is always prepared in advance, regardless of the occacion and the event.",
        },
    ],
    projects: [
        {
            title: "VanLife",
            description: "Welcome to VanLife, your go-to platform for renting vans and exploring the open road. This React-based website offers a seamless experience for both renters and hosts. Users can navigate through the Home, About, Vans, and Host sections that requiress authentication process to ensures a secure environment.",
            demoLink: "https://rent-vanlife.netlify.app/",
            codeLink: "https://github.com/IvanSarabeev/VanLife",
            tech: [<ReactJS />, <ReactRouter />, <Tailwind />, <IconTypescript />, <Lodash />, <Netlify />],
            Imgs: [
                { id: 1, url: VanLife },
                { id: 2, url: VanLifeTwo },
                { id: 3, url: VanLifeThree },
            ],
        },
        {
            title: "Movie Watchlist",
            description: "Searching app with minamalystic design, where you can find your favourite movie, also you get to search seemlessly and flawlessly, accross a collection of movies and if you don't have time, you can save them for later by adding them to your collection.",
            demoLink: "https://movie-watchlist-delta-pied.vercel.app/",
            codeLink: "https://github.com/IvanSarabeev/Movie-Watchlist",
            tech: [<ReactJS />, <ReactRouter />, <Tailwind />, <IconTypescript />, <IconLogoVercel />],
            Imgs: [
                { id: 1, url: Watchlist },
                { id: 2, url: WatchlistTwo },
                { id: 3, url: WatchlistThree },
            ],
        },
        {
            title: "To-Do App",
            description: "I have developed this mockup template, because in near future I would like to try new tech languagues like - Node.js & MongoDB or Next.js.",
            demoLink: "https://real-estates-ood.netlify.app/",
            codeLink: "https://github.com/IvanSarabeev/RealEstate-web-starterpack",
            tech: [<ReactJS />, <IconTypescript />, <Tailwind />, <IconLogoVercel />,],
            Imgs: [
                { id: 1, url: Todo },
                { id: 2, url: TodoTwo },
                { id: 3, url: TodoThree }
            ],
        },
        {
            title: "Mish-Mash",
            description: "Mish Mash Fast Food**: Elevating Fast Food through Innovation 🚀 - 🍟 A UK-based online fast-food platform designed for convenience and flavor. - 💻 Tech Stack: React and Tailwind for a responsive UI. - 🌍 Leveraging Netlify for lightning-fast hosting.",
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
            title: "Hello-UE",
            description: "I was participaiting in a project for \"IT-Masterclass №10\", in collaboration with other fellow programmers, we were developing functional specifications, through many API request and react libraries and many more JavaScript functionalities.",
            demoLink: "not avaible due to MIT License & Permissions",
            codeLink: "https://github.com/IvanSarabeev/hello-ue",
            tech: [<ReactJS />, <Tailwind />, <ReactRouter />, <NodeJS />],
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
    ],
}
export default data;