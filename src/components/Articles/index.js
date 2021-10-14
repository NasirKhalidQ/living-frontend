import React from "react";
import Card from "../Card";
import ReactPaginate from "react-paginate";

const Articles = ({ articles, setPageNumber }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  const limit = 6;
  const pageCount = Math.ceil(articles.length / limit);

  return (
    <div className="grid">
      <div className="grid lg:grid-cols-3 gap-y-6 gap-x-6 mx-4">
        {articles.map((article, i) => {
          return <Card article={article} key={`article__${article.slug}`} />;
        })}
      </div>
      <div className="grid justify-center">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={pageChange}
          containerClassName={"paginateBtns"}
          previousLinkClassName={
            "px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
          }
          nextLinkClassName={
            "px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
          }
          disabledClassName={"bg-gray-300"}
        />
      </div>
    </div>
  );
};

export default Articles;
