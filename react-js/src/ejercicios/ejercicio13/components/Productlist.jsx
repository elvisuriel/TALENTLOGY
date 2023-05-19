import { useState } from "react";
import { books } from "../Books";

const Productlist = () => {
  const [comment, setComment] = useState("");

  function handleComment(index) {
    const newComment = comment.trim();
    if (newComment) {
      books[index].userComment = books[index].userComment
        ? books[index].userComment + " | " + newComment
        : newComment;
    }
    setComment("");
  }

  return (
    <div className="container">
      <div className="row">
        {books.map((product, index) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">Título: {product.title}</h5>
                <p className="card-text">Actor: {product.author}</p>
                <p className="card-text">{product.userComment}</p>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa tu comentario"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleComment(index)}
                >
                  Añadir comentario
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productlist;
