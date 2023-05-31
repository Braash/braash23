import aboutImg from '../../assets/about.png';
import homeImg from '../../assets/home.png';
import gamesImg from '../../assets/games.png';
import booksImg from '../../assets/books.png';
import dashboardImg from '../../assets/dashboard.png';

const navigationItems = [
    {
        path: '/',
        name: 'Dashboard',
        icon: homeImg,

    },
    {
        path: '/about',
        name: 'About',
        icon: aboutImg,

    },
    {
        path: '/about',
        name: 'Games',
        icon: gamesImg,

    },
    {
        path: '/about',
        name: 'Books',
        icon: booksImg,

    },
    {
        path: '/about',
        name: 'Random',
        icon: dashboardImg,

    },
]

export default navigationItems;