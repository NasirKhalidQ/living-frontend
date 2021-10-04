import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : "http://localhost:1337" + article.image.url;
  return (
    <Link to={`/article/${article.slug}`}>
      <div className="">
        <img src={imageUrl} alt={article.image.url} height="100" />
      </div>
      <div className="">
        <p className="uppercase">{article.category.name}</p>
        <p className="text-lg">{article.title}</p>
      </div>
    </Link>
  );
};

export default Card;
