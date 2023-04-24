import React from 'react';
import Card from '../components/Card/Card';
import moviesImg from '../assets/movies.jpeg';
import gamesImg from '../assets/games.jpeg';
import mangaImg from '../assets/manga.jpeg';

const dashboardItems = [
  {
    image: moviesImg,
    title: 'Movies',
  },
  {
    image: gamesImg,
    title: 'Games',
  },
  {
    image: mangaImg,
    title: 'Manga',
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen">
      {dashboardItems.map((item, index) => (
        <div className="p-4 w-60" key={index}>
          <Card image={item.image} title={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
