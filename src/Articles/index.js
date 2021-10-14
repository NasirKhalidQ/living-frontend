import React from "react";
import Articles from "../components/Articles/index";
import Query from "../components/Query/index";
import ARTICLES_QUERY from "../queries/article/articles";
import { useState } from "react";

const Home = () => {
  const limit = 6;
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * limit;
  const offset = pagesVisited + limit;
  return (
    <div>
      <div className="">
        <div className="">
          <Query query={ARTICLES_QUERY} limit={6} start={0}>
            {({ data: { articles } }) => {
              console.log(articles);
              return (
                <Articles articles={articles} setPageNumber={setPageNumber} />
              );
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
