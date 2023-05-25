import React, { useState } from 'react';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

const PostContainer = () => {
  const [message, setMessage] = useState('');
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(['¿Quien hizo el trabajo?', 'Estuvo buena la pelicula', 'Mañana tenemos examen']);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-primary mt-4">¿Qué estás pensando?</h1>
      <textarea
        className="form-control mb-3"
        value={message}
        onChange={handleInputChange}
        placeholder="Escribe tu mensaje"
      />
      <button className="btn btn-primary mb-3" onClick={handleLike}>
        <FaThumbsUp /> Me gusta ({likes})
      </button>
      <div>
        <h3>Comentarios:</h3>
        <ul className="list-group">
          {comments.map((comment, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              {comment}
              <a href="#" className="text-primary" onClick={() => handleLike()}>
                <FaThumbsUp /> Me gusta
              </a>
            </li>
          ))}
        </ul>
        <input
          className="form-control mt-3"
          type="text"
          placeholder="Escribe un comentario"
          onKeyUp={(e) => e.key === 'Enter' && handleComment(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PostContainer;
