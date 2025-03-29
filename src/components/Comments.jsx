import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "./Constants";
const Comments = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=${API_KEY}&maxResults=50`
      );
      const data = await response.json();
      if (data.items) {
        setComments(data.items);
      }
    } catch (err) {
      setError("Failed to fetch comments");
    }
  };
  useEffect(() => {
    fetchComments();
  }, [id]);

  return (
    <div className="max-w-2xl  p-4 bg-zinc-50 rounded-b-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Comments</h2>
      {!comments && <p className="text-gray-500">Loading comments...</p>}

      <div className="space-y-4">
        {comments.map((comment) => {
          const { authorDisplayName, textDisplay, authorProfileImageUrl } =
            comment.snippet.topLevelComment.snippet;
          return (
            <div
              key={comment.id}
              className="flex items-start gap-3 p-3 border-b border-gray-200"
            >
              <img
                src={authorProfileImageUrl}
                alt={authorDisplayName}
                className="w-10 h-10 rounded-full"
              />
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-700 text-sm">
                  {authorDisplayName}
                </h3>
                <p className="text-gray-600 text-xs">{textDisplay}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
