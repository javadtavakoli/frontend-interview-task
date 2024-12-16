import useStore from "../../store/useStore.ts";
import { useMemo } from "react";
import PostCard from "../../components/PostCard.tsx";

const MarkedPostsPage = () => {
  const posts = useStore((state) => state.posts);
  const markedPosts = useMemo(
    () => posts.filter((post) => post.bookmarked),
    [posts],
  );
  return (
    <div className="container mx-auto p-4">
      {markedPosts.map((post) => (
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
export default MarkedPostsPage;
