import { useState } from "react";
import { books } from "../Books";

const Productlist = () => {
  const [comment, setComment] = useState("");
  
  function handleComment(index) {
    const newComment = comment.trim();
    if (newComment) {
      books[index].userComment = books[index].userComment ? 
        books[index].userComment + " | " + newComment :
        newComment;
    }
    setComment("");
  }

  return (
    <div className="container-items">
      {books.map((product, index) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.image} alt={product.title} />
          </figure>
          <div className="info-product">
            <h2>Titulo: {product.title}</h2>
            <h2>Actor: {product.author}</h2>
            <h2>{product.userComment}</h2>
            <input type="text" placeholder="Ingresa tu comentario" value={comment} onChange={e => setComment(e.target.value)} />
            <button onClick={() => handleComment(index)}>Añadir comentario</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productlist;
