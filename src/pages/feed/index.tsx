import PostCard from "../../components/PostCard.tsx";
import useStore from "../../store/useStore.ts";
import { useMemo } from "react";

const FeedPage: React.FC = () => {
  const posts = useStore((state) => state.posts);
  const postCount = useMemo(() => posts.length, [posts]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts ({postCount})</h1>{" "}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          author={post.author}
          content={post.content}
          image={post.image}
          liked={post.liked}
          bookmarked={post.bookmarked}
        />
      ))}
    </div>
  );
};

export default FeedPage;
