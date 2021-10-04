import React from "react";
import Card from "../Card";

const Articles = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div className="grid">
      <div className="grid lg:grid-cols-3 gap-y-6 gap-x-6 mx-4">
        {articles.map((article, i) => {
          return <Card article={article} key={`article__${article.slug}`} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
