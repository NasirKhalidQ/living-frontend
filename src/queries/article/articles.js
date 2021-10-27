import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles($start: Int!, $limit: Int!) {
    articles(sort: "id:desc", start: $start, limit: $limit) {
      slug
      title
      created_at
      description
      author {
        name
        picture {
          url
        }
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
