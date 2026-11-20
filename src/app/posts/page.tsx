export default async function PostsPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await response.json();

  return (
    <main>
      <h1>All Posts</h1>

      {posts.slice(0, 5).map((post: {
        id: number;
        title: string;
      }) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </main>
  );
}