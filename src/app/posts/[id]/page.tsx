interface PostPageDetailProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function PostPageDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const postDetailData: PostPageDetailProps = await response.json();

  return (
    <>
      <h1 className="text-red-600 font-bold text-4xl mt-6">
        Post ID: {postDetailData.id}
      </h1>
      <h3 className="text-amber-800 font-extralight text-2xl my-2">
        Post Title: {postDetailData.title}
      </h3>
      <p>Post Body: {postDetailData.body}</p>
    </>
  );
}
