import { useState } from "react";

function CommentInput({ onAddComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() === "") return;
    onAddComment(comment);
    setComment("");
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Ingresa un comentario"
          value={comment}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar comentario
      </button>
    </form>
  );
}

export default CommentInput;
