import ReadingProgress from "@/components/ReadingProgress";

interface Post {
  id: number;
  title: string;
  body: string;
  reactions: number;
  tags: string[];
  userId: number;
}

interface Posts {
  posts: Post[];
  total: number;
  limit: number;
  skip: number;
}

async function getPosts(): Promise<Posts> {
  const res = await fetch("https://dummyjson.com/posts/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const data = await getPosts();

  return (
    <main className="mt-12">
      <ReadingProgress />
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-center justify-center"
          >
            <h2 className="my-4 text-2xl">{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
