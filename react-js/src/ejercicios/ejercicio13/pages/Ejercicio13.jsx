import React, { useState } from "react";

const BookDetails = ({ book }) => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      author: "Anonymous",
      content: comment,
      date: new Date().toLocaleString(),
    };
    setCommentsList([...commentsList, newComment]);
    setComment("");
  };

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.year}</p>
      <hr />
      <h2>Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="comment">Add a comment:</label>
        <br />
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {commentsList.map((comment, index) => (
          <li key={index}>
            <p>Author: {comment.author}</p>
            <p>Comment: {comment.content}</p>
            <p>Date: {comment.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
