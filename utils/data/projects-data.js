import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'PersonalGPT',
        description: "PersonalGPT is an advanced AI assistant built using LangChain and Anthropic’s Claude models. It is a weekend project built to understand how RAGs work. This personal assistant understands your preferences, anticipates your needs, and provides accurate responses to your queries.",
        tools: ['Python', 'Vector Store', 'LangChain API', 'Anthropic API'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Collab Hub',
        description: 'Collaborative learning platform designed to enhance user engagement and knowledge sharing where users can seamlessly connect with each other to collaborate on projects and share resources in various formats, including audio, video, and notes.',
        tools: ['NodeJS', 'ReactJS', "MongoDB", "MySQL", "WebSockets", "OAuth/OIDC", "Github API"],
        role: 'Backend Developer',
        code: 'https://github.com/Jayesh-Borse/teamx-feed-service',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Stock Bot Plus',
        description: 'A Discord bot for instant, comprehensive stock market info: compare companies with real-time graphs, predict trends with charts, get automated EOD updates, and stay current with market news.',
        tools: ['NodeJS', 'Python', 'Finance API', 'Charts.js'],
        code: '',
        role: 'Backend Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Find Your Hostel',
        description: "A streamlined website that connects students with nearby hostels effortlessly. Key features include easy communication between students and hostel owners, detailed residence information, tour booking, user reviews, and map integration for location-based decisions.",
        tools: ['NodeJS', 'Material UI', 'HTML5', 'CSS', 'Bootstrap', 'MySQL', 'Express'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Backend Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },