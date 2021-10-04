import React from "react";
import { useParams } from "react-router";
import Query from "../components/Query";
import Moment from "react-moment";

import ARTICLE_QUERY from "../queries/article/article";
import ReactMarkdown from "react-markdown";

const Article = () => {
  let { id } = useParams();

  return (
    <Query query={ARTICLE_QUERY} slug={id}>
      {({ data: { articles } }) => {
        if (articles.length) {
          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? articles[0].image.url
              : "http://localhost:1337" + articles[0].image.url;

          return (
            <div>
              <div className="grid justify-center">
                <img
                  src={imageUrl}
                  alt={articles[0].imageUrl}
                  width="700"
                  height="700"
                ></img>
              </div>

              <div>
                <div className="prose prose-sm md:prose-lg mx-2 md:mx-auto mt-10">
                  <ReactMarkdown children={articles[0].content} />
                  <p>By: {articles[0].author.name}</p>
                  <p>
                    <Moment format="MMM Do YYYY">
                      {articles[0].published_at}
                    </Moment>
                  </p>
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Article;
