import { memo, useCallback, useState } from "react";
import useStore from "../store/useStore";
import ReportModal from "./ReportModal.tsx";
import { useToast } from "./Toast";

interface PostCardProps {
  id: number;
  author: string;
  content: string;
  image: string;
  liked: boolean;
  bookmarked: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  author,
  content,
  image,
  liked,
  bookmarked,
}) => {
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const toast = useToast();
  const toggleLike = useStore((state) => state.toggleLike);
  const toggleBookmark = useStore((state) => state.toggleBookmark);
  const reportHandler = useCallback(() => {
    toast.addToast("Thanks for reporting.");
    setIsReportModalVisible(false);
  }, [toast, setIsReportModalVisible]);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4 mb-4">
      <h2 className="font-bold text-lg">{author}</h2>
      <p className="my-2">{content}</p>
      {image && (
        <img
          src={image}
          alt="Post"
          className="w-full h-96 object-cover mb-2 rounded"
        />
      )}
      <div className={`flex flex-row justify-start gap-2`}>
        <button
          onClick={() => toggleLike(id)}
          className={`px-4 py-2 w-28 rounded ${liked ? "bg-red-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
        >
          {liked ? "Unlike" : "Like"}
        </button>
        <button
          onClick={() => {
            toggleBookmark(id);
            toast.addToast("Your changes have been saved.");
          }}
          className={`px-4 py-2 w-28 rounded ${bookmarked ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
        >
          {bookmarked ? "Unmark" : "Mark"}
        </button>
        <button
          onClick={() => setIsReportModalVisible(true)}
          className={`px-4 py-2 w-28 rounded bg-gray-200 dark:bg-gray-700`}
        >
          Report
        </button>
      </div>
      <ReportModal
        onSelectReport={reportHandler}
        isOpen={isReportModalVisible}
        onClose={() => setIsReportModalVisible(false)}
      />
    </div>
  );
};

export default memo(PostCard);
