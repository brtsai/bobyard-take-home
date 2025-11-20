// src/api/comments.ts
export interface Comment {
  id: number;
  text: string;
  author: string;
  created_at: string;
}

const BASE_URL = "http://127.0.0.1:8000/api/comments/";

export const fetchComments = async (): Promise<Comment[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
};

export const postComment = async (text: string): Promise<Comment> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error("Failed to post comment");
  return res.json();
};

export const updateComment = async (id: number, text: string): Promise<Comment> => {
  const res = await fetch(`${BASE_URL}${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error("Failed to update comment");
  return res.json();
};

