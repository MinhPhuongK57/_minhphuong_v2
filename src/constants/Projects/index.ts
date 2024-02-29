import { figma, minhphuongPortfolio, minhphuongk57, spotify } from '../../assets'

const projects = [
  {
    slug: 'minhphuong-website',
    preArr: ['minh', 'phuong', 'personal', 'site'],
    name: 'MinhPhuong Personal Site',
    statusWebsite: 'deployment',
    description: 'A website to introduce myself. About those projects and experiences.',
    color: '#000000',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'reacthooks',
        color: 'green-text-gradient',
      },
      {
        name: 'threejs',
        color: 'pink-text-gradient',
      },
      {
        name: 'vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'rtilt-maath',
        color: 'green-text-gradient',
      },
      {
        name: 'emailjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: minhphuongPortfolio,
    source_code_linkGithub: '',
    source_code_linkGitlab: '',
    website_deploy_link: 'https://minhphuong.netlify.app',
  },
  {
    slug: 'minhphuong-ecommerce',
    preArr: ['minh', 'phuong', 'ecommerce'],
    name: 'E-commerce App System',
    statusWebsite: 'source',
    description: 'System management with 2 web platforms: (admin, user) and app almost like shopee,...',
    color: '#7a7a7a',
    tags: [
      {
        name: 'laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'flutter',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'jquery',
        color: 'green-text-gradient',
      },
      {
        name: 'socket.io',
        color: 'pink-text-gradient',
      },
      {
        name: 'firebase',
        color: 'blue-text-gradient',
      },
      {
        name: 'mailtrap',
        color: 'green-text-gradient',
      },
    ],
    image: minhphuongPortfolio,
    source_code_linkGithub: '',
    source_code_linkGitlab: 'https://gitlab.com/phamtantai0901/repo-ptpstore-v.2',
    website_deploy_link: '',
  },
  {
    slug: 'minhphuong-figma-design',
    preArr: ['minh', 'phuong', 'figma', 'design'],
    name: 'Figma Design',
    statusWebsite: 'deployment',
    description: 'E-commerce application interface design with application platform.',
    color: '#c57a7a',
    tags: [
      {
        name: 'Figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'cskid',
        color: 'green-text-gradient',
      },
      {
        name: 'smartanimate',
        color: 'pink-text-gradient',
      },
      {
        name: 'widgetscustom',
        color: 'blue-text-gradient',
      },
    ],
    image: figma,
    source_code_linkGithub: '',
    website_deploy_link: 'https://www.figma.com/file/L1aiYETsIgEXESJsVAnbSi/PTPStore?node-id=1203%3A10',
  },
  {
    slug: 'minhphuong-portfolio-website',
    preArr: ['minh', 'phuong', 'portfolio', 'website'],
    name: 'Portfolio Website',
    statusWebsite: 'deployment',
    description: 'A website to introduce myself. include personal information, completed projects.',
    color: '#5a5a5a',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'reacthooks',
        color: 'green-text-gradient',
      },
      {
        name: 'wowjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'materialui',
        color: 'blue-text-gradient',
      },
      {
        name: 'frameremotion',
        color: 'green-text-gradient',
      },
      {
        name: 'emailjs',
        color: 'pink-text-gradient',
      },
    ],
    image: minhphuongk57,
    source_code_linkGithub: 'https://github.com/MinhPhuongK57/MinhPhuongK57-Portfolio.git',
    source_code_linkGitlab: '',
    website_deploy_link: 'https://minhphuongk57.github.io/MinhPhuongK57-Portfolio',
  },
  {
    slug: 'minhphuong-spotify-app',
    preArr: ['minh', 'phuong', 'spotify', 'app'],
    name: 'Spotify App',
    statusWebsite: 'deployment',
    description: 'As a music player application with basic features.',
    color: '#6a7c7a',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'reacthooks',
        color: 'green-text-gradient',
      },
      {
        name: 'rh5audiop',
        color: 'pink-text-gradient',
      },
      {
        name: 'scomponents',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
    ],
    image: spotify,
    source_code_linkGithub: 'https://github.com/MinhPhuongK57/KenSpotify',
    website_deploy_link: 'https://minhphuongk57-spotify.vercel.app/',
    source_code_linkGitlab: '',
  },
]
export default projects
