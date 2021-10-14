import React from "react";
import Articles from "../components/Articles/index";
import Query from "../components/Query/index";
import ARTICLES_QUERY from "../queries/article/articles";
import { useState } from "react";

const Home = () => {
  const [offset, setOffset] = useState(0);

  return (
    <div>
      <div className="">
        <div className="">
          <Query query={ARTICLES_QUERY} limit={6} start={offset}>
            {({ data: { articles } }) => {
              return (
                <Articles
                  articles={articles}
                  offset={offset}
                  setOffset={setOffset}
                />
              );
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
