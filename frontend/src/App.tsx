import React, { useEffect, useState } from "react";
import CommentsList from "./components/CommentsList";
import { fetchComments, postComment } from "./api/comments";

// Define Comment type locally (do NOT import from comments.ts)
export interface Comment {
  id: number;
  text: string;
  author: string;
  created_at: string;
}

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newText, setNewText] = useState("");

  // Load comments on mount
  useEffect(() => {
    fetchComments()
      .then(setComments)
      .catch((err) => console.error("Error fetching comments:", err));
  }, []);

  // Add a new comment
  const handleAdd = async () => {
    if (!newText.trim()) return;

    try {
      const created = await postComment(newText);
      setComments([created, ...comments]); // prepend new comment
      setNewText("");
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  // Update a comment after edit
  const handleUpdate = (updated: Comment) => {
    setComments(comments.map((c) => (c.id === updated.id ? updated : c)));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Comments</h1>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <CommentsList comments={comments} onUpdate={handleUpdate} />
    </div>
  );
};

export default App;

