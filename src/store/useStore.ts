// src/store/useStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import POSTS from "../constants/posts.ts";

interface Post {
  id: number;
  author: string;
  content: string;
  image: string;
  liked: boolean;
  bookmarked: boolean;
}

interface StoreState {
  posts: Post[];
  toggleLike: (id: number) => void;
  toggleBookmark: (id: number) => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      posts: POSTS,
      toggleBookmark: (id: number) =>
        set((state: StoreState) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, bookmarked: !post.bookmarked } : post,
          ),
        })),
      toggleLike: (id: number) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, liked: !post.liked } : post,
          ),
        })),
    }),
    { name: "posts-storage" },
  ),
);

export default useStore;
