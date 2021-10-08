import React from "react";
import Query from "../Query/index";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <nav className="flex px-12 py-10">
                <div className="uppercase text-2xl">
                  <Link to="/blog">Blog</Link>
                </div>
                {/* <div className="w-full items-center">
                  <ul className="flex justify-end gap-12 uppercase text-sm">
                    {categories.map((category, i) => {
                      return (
                        <li key={category.slug}>
                          <Link to={`/category/${category.slug}`} className="">
                            {category.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div> */}
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;
