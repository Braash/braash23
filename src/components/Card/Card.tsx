import React from 'react';

type CardProps = {
  title: string;
  image: string;
};

const Card = ({ title, image }: CardProps) => {
  return (
    <div
      className="relative bg-cover bg-center h-64 rounded-md overflow-hidden shadow-md"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute bg-transparent top-0 left-0 p-4 text-white font-bold text-lg">{title}</div>
    </div>
  );
};

export default Card;
