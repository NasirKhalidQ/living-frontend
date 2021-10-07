import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category {
    categories(where: { slug: "Marketing" }, sort: "id:desc") {
      name
      articles {
        slug
        title
        content
        description
        author {
          name
        }
        image {
          url
        }
        category {
          slug
          name
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;
