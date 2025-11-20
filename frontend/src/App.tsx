import React, { useEffect, useState } from 'react';
import CommentsList from "./components/CommentsList";

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:8000/api/hello/')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Django says: {message}</h1>
      <CommentsList
        comments={comments}
        onUpdate={(updated) => {
          setComments(comments.map((c) => (c.id === updated.id ? updated : c)));
        }}
      />
    </div>
  );
}

export default App;
