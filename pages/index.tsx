import type { NextPage } from "next";
import Head from "next/head";

const posts = [
  {
    title: "React Test",
    excerpt: "Learn React Testing",
  },
  {
    title: "React CSS",
    excerpt: "Learn Styled components",
  },
];
const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Student Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <p key={index}>{post.title}</p>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <p>test1</p>
            <p>test2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
