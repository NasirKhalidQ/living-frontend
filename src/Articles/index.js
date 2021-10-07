import React from "react";
import Articles from "../components/Articles/index";
import Query from "../components/Query/index";
import ARTICLES_QUERY from "../queries/article/articles";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;