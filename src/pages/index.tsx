import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { createClient } from "lib/api/createClient";
import { GetStaticProps } from "next";

import { LIST_POSTS } from "lib/api/posts";

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();
  const data = await client.query({ query: LIST_POSTS });
  return {
    props: {
      posts: data.data.dailies,
    },
  };
};

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fred Today</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://fred.today">fred.today! with TS</a>
        </h1>
        <ul>
          {posts.map((p) => (
            <li key={p.id}>
              <Link href={`/posts/${p.slug}`}>
                <a>{p.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
