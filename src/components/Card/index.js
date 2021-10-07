import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const imageUrl = article.image.url;
  return (
    <Link to={`/article/${article.slug}`}>
      <div className="w-full h-full p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <img
            src={imageUrl}
            alt={article.title}
            className="h-64 w-full rounded-t pb-6"
          />
          <p className="w-full text-gray-600 text-xs md:text-sm px-6">
            {article.category.name}
          </p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">
            {article.title}
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            {article.description}
          </p>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div className="flex items-center justify-between">
            <img
              className="w-8 h-8 rounded-full mr-4 avatar"
              data-tippy-content="Author name"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
          </div>
          <p className="w-full text-gray-600 text-xs md:text-sm px-6">
            {article.author.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
