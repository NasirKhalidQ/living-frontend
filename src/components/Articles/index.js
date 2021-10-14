import React, { useState } from "react";
import Card from "../Card";

const Articles = ({ articles, offset, setOffset }) => {
  const handlePrev = () => {
    setOffset(offset - 6);
  };
  const handleNext = () => {
    setOffset(offset + 6);
  };
  console.log(offset > 0);
  return (
    <div className="grid">
      <div className="grid lg:grid-cols-3 gap-y-6 gap-x-6 mx-4">
        {articles.map((article) => {
          return <Card article={article} key={`article__${article.slug}`} />;
        })}
      </div>
      <div className="flex justify-evenly my-10">
        <button
          onClick={handlePrev}
          className="py-2 px-4 disabled:opacity-50 disabled:pointer-events-none shadow-md bg-living-red hover:opacity-80 text-white"
          disabled={offset <= 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="py-2 px-7 disabled:opacity-50 disabled:pointer-events-none shadow-md bg-living-red hover:opacity-80 text-white"
          disabled={articles.length < 6}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Articles;
