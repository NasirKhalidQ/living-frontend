import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles(sort: "id:desc") {
      slug
      title
      description
      author {
        name
      }
      category {
        slug
        name
      }
      image {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;
