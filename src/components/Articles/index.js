import React from "react";
import Card from "../Card";

const Articles = ({ articles }) => {
  return (
    <div className="grid">
      <div className="grid lg:grid-cols-3 gap-y-6 gap-x-6 mx-4">
        {articles.map((article, i) => {
          return <Card article={article} key={`article__${article.slug}`} />;
        })}
      </div>
      <div className="grid justify-center"></div>
    </div>
  );
};

export default Articles;
