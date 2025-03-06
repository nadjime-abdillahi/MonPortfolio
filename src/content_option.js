import photo from "./assets/images/Nadjime.jpg";
import ohmyfood from "./assets/images/ohmyfood.png";
import kasa from "./assets/images/kasa.png";
import print from "./assets/images/print.png"

const logotext = "NADJIME";
const meta = {
    title: "Nadjime ABDILLAHI DAROUSSI",
    description: "Je suis développeur Front End et je suis sur Mayotte."
};

const introdata = {
    title: "Je suis Nadjime ABDILLAHI DAROUSSI",
    animated: {
        first: "J'aime le code",
        second: "Je développe des applications web",
        third: "j'apprécie l'utilisation de REACTJS",
    },
    description: "Passionné par le code, je cherche constament à me développer",
    your_img_url: photo,
};

const dataabout = {
    title: "Un petit bout de mon éxperience",
    aboutme: "je cherche à participer à un maximum de projets qui pourrait me permettre de m'améliorer dans la pratique du code",
};
const worktimeline = [{
        jobtitle: "Formateur développeur web",
        where: "Mayotte",
        date: "2024",
    },
    {
        jobtitle: "Formateur ecosystème Apple",
        where: "Paris",
        date: "2024",
    },
    {
        jobtitle: "Développeur web",
        where: "Paris",
        date: "2023",
    },
];

const skills = [{
        name: "React",
        value: 80,
    },
    {
        name: "Saas",
        value: 90,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "Redux",
        value: 70,
    },
    {
        name: "HTML",
        value: 90,
    },
    {
        name: "CSS",
        value: 90,
    },
    {
        name: "Github",
        value: 90,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "CSS, SAAS, Bootstrap",
    },
    {
        title: "Application Web",
        description: "REACT, MONGODB, SWAGGER",
    },
];

const dataportfolio = [{
        img: ohmyfood,
        description: "C'est une application web qui permet de commander desplats dans un restaurant. J' ai utilisé SAAS pour le design de ce projet",
        link: "https://nadjime-abdillahi.github.io/ohmyfood/",
    },
    {
        img: kasa,
        description: "C'est une application web qui permet de voir la liste des logments que l'on peut réserver, j'ai REACTJS dans ce projet.",
        link: "https://kasa-lake-iota.vercel.app/",
    },
    {
        img: print,
        description: "Voici une application web d'imprimperie familiale, J'ai utilisé les langages tels que HTML, CSS, JAVASCRIPT",
        link: "https://nadjime-abdillahi.github.io/Print-It-JS/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "nadjimeabdillahi@gmail.com",
    YOUR_FONE: "+262639651623",
    description: "Développeur FrontEnd",
    YOUR_SERVICE_ID: "service_o0h8c27",
    YOUR_TEMPLATE_ID: "template_70jjl3b",
    YOUR_USER_ID: "U3SesOI1nu-x04Mo3",
};

const socialprofils = {
    github: "http://github.com/nadjime-abdillahi/",
    linkedin: "https://www.linkedin.com/in/nadjime-abdillahi-daroussi-067b70112/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};