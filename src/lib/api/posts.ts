import { gql } from "@apollo/client";

export const LIST_POSTS = gql`
  query allDailies {
    dailies {
      id
      title
      slug
      today
      summary
    }
  }
`;

export const POST = gql`
  query daily($slug: String!) {
    daily(where: { slug: $slug }) {
      id
      title
      slug
      today
      summary
      body
    }
  }
`;
