import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
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
