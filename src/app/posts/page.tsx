import Link from "next/link";
import React from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const POST_URL = BASE_URL + "/posts";

interface getPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<getPostProps[]> {
  const response = await fetch(POST_URL);
  const postData = await response.json();
  return postData;
}

export default async function PostPage() {
  const posts = await getPosts();

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mx-10 p-2 m-2 border-2 ">
            <Link href={`/posts/${post.id}`}>
              <div className=" text-blue-800 font-extrabold">{post.title}</div>
              <div>{post.body}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
