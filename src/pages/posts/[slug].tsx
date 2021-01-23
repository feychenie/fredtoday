import * as React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { createClient } from "lib/api/createClient";
import { POST, LIST_POSTS } from "lib/api/posts";

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient();
  const { slug } = context.params;
  const response = await client.query({
    query: POST,
    variables: { slug },
  });
  return {
    props: {
      post: response.data.daily,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();
  const response = await client.query({ query: LIST_POSTS });
  return {
    paths: response.data.dailies.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export default function PostPage({ post }) {
  return (
    <main>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </main>
  );
}
