import React, { useState } from "react";
import { updateComment } from "../api/comments";

interface Comment {
  id: number;
  text: string;
  author: string;
  created_at: string;
}

interface CommentsListProps {
  comments: Comment[];
  onUpdate: (updated: Comment) => void;
}

const CommentsList: React.FC<CommentsListProps> = ({ comments, onUpdate }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const startEdit = (comment: Comment) => {
    setEditingId(comment.id);
    setEditText(comment.text);
  };

  const saveEdit = async () => {
    if (editingId === null) return;
    try {
      const updated = await updateComment(editingId, editText);
      onUpdate(updated);
      setEditingId(null);
      setEditText("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ul>
      {comments.map((c) => (
        <li key={c.id}>
          <strong>{c.author}:</strong>{" "}
          {editingId === c.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              {c.text} <em>({new Date(c.created_at).toLocaleString()})</em>
              <button onClick={() => startEdit(c)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;

