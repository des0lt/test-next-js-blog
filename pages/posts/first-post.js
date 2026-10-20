import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Fisrt post</h1>
      <Link href="/">Homepage</Link>
      {/* <Link href="/posts/first-post">1-st Post</Link> */}
    </Layout>
  );
}
