import React from "react";
import { useParams } from "react-router";
import Articles from "../components/Articles/index";
import Nav from "../components/Nav";
import Query from "../components/Query/index";
import CATEGORY_ARTICLES_QUERY from "../queries/category/articles";

const Category = () => {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} slug={id}>
      {({ data: { categories } }) => {
        if (categories.length) {
          return (
            <>
              <Nav />
              <div className="grid">
                <h1 className="text-3xl uppercase mx-4 text-gray-700 mb-8">
                  {categories[0].name}
                </h1>
                <Articles articles={categories[0].articles} />
              </div>
            </>
          );
        }
      }}
    </Query>
  );
};

export default Category;
