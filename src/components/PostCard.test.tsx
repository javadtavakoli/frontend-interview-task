import PostCard from "./PostCard";
import { act, render, screen } from "@testing-library/react";

import { ToastProvider } from "./Toast";
import useStore from "../store/useStore.ts";
const mockPost = {
  id: 1,
  author: "Author Name",
  content: "Sample content",
  image: "",
  liked: false,
  bookmarked: false,
};

describe("PostCard Like Button", () => {
  test("renders the like button correctly", () => {
    render(
      <ToastProvider>
        <PostCard
          id={mockPost.id}
          author={mockPost.author}
          content={mockPost.content}
          image={mockPost.image}
          liked={mockPost.liked}
          bookmarked={mockPost.bookmarked}
        />
      </ToastProvider>,
    );

    const likeButton = screen.getByRole("button", { name: /like/i });
    expect(likeButton).toBeInTheDocument();
    expect(likeButton).toHaveTextContent("Like");
  });

  test("shows unmark text when it's marked", () => {
    render(
      <ToastProvider>
        <PostCard
          id={mockPost.id}
          author={mockPost.author}
          content={mockPost.content}
          image={mockPost.image}
          liked={mockPost.liked}
          bookmarked={true}
        />
      </ToastProvider>,
    );

    const unlikeButton = screen.getByRole("button", { name: /unmark/i });
    expect(unlikeButton).toBeInTheDocument();
    expect(unlikeButton).toHaveTextContent("Unmark");
  });
});

describe("PostCard Bookmark Button", () => {
  test("renders the like button correctly", () => {
    render(
      <ToastProvider>
        <PostCard
          id={mockPost.id}
          author={mockPost.author}
          content={mockPost.content}
          image={mockPost.image}
          liked={mockPost.liked}
          bookmarked={mockPost.bookmarked}
        />
      </ToastProvider>,
    );

    const likeButton = screen.getByRole("button", { name: /mark/i });
    expect(likeButton).toBeInTheDocument();
    expect(likeButton).toHaveTextContent("Mark");
  });

  test("shows unlike text when it's liked", () => {
    render(
      <ToastProvider>
        <PostCard
          id={mockPost.id}
          author={mockPost.author}
          content={mockPost.content}
          image={mockPost.image}
          liked={true}
          bookmarked={mockPost.bookmarked}
        />
      </ToastProvider>,
    );

    const unlikeButton = screen.getByRole("button", { name: /unlike/i });
    expect(unlikeButton).toBeInTheDocument();
    expect(unlikeButton).toHaveTextContent("Unlike");
  });
});

describe("Like Store", () => {
  let toggleLike: (id: number) => void;

  beforeEach(() => {
    const state = useStore.getState();
    state.posts = [];

    toggleLike = useStore.getState().toggleLike;
  });

  test("toggles like state of a post correctly", () => {
    useStore.setState({ posts: [mockPost] });

    const post = useStore.getState().posts[0];
    expect(post.liked).toBe(false);

    act(() => {
      toggleLike(1);
    });

    const updatedPost = useStore.getState().posts[0];
    expect(updatedPost.liked).toBe(true);
  });
});

describe("Bookmark Store", () => {
  let toggleBookmark: (id: number) => void;

  beforeEach(() => {
    const state = useStore.getState();
    state.posts = [];
    toggleBookmark = useStore.getState().toggleBookmark;
  });

  test("toggles bookmark state of a post correctly", () => {
    useStore.setState({ posts: [mockPost] });

    const post = useStore.getState().posts[0];
    expect(post.bookmarked).toBe(false);

    act(() => {
      toggleBookmark(1);
    });

    const updatedPost = useStore.getState().posts[0];
    expect(updatedPost.bookmarked).toBe(true);
  });
});
