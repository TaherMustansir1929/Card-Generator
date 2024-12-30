import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="w-1/3 max-w-[500px] min-w-[300px] mx-2 rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-40 object-cover" src={image} alt={title} />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-1">{title}</div>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;