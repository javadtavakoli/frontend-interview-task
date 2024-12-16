import { Route, Routes } from "react-router";
import FeedPage from "./feed";
import MarkedPostsPage from "./marked";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FeedPage />} />
      <Route path="/marked-posts" element={<MarkedPostsPage />} />
    </Routes>
  );
};
export default AppRouter;
