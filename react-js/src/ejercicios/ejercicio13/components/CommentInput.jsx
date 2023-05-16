import { useState } from "react";

function CommentInput({ onAddComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() === "") return; // si el comentario está vacío, no hacemos nada
    onAddComment(comment); // llamamos a la función de callback para agregar el comentario
    setComment(""); // reseteamos el estado del input
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Ingresa un comentario"
        value={comment}
        onChange={handleChange}
      />
      <button type="submit">Agregar comentario</button>
    </form>
  );
}
export default CommentInput;