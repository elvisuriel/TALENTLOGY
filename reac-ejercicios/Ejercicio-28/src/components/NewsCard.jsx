import React, { useState } from 'react';
import { FaThumbsUp, FaShare } from 'react-icons/fa';

const NewsCard = ({ title, description, imageUrl, onLike, onShare }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    onLike();
  };

  return (
    <div className="news-card">
      <img src={imageUrl} alt="News" className="news-card-image" />
      <h3 className="news-card-title">{title}</h3>
      <p className="news-card-description">{description}</p>
      <div className="news-card-actions">
        <button className="btn btn-primary mr-2" onClick={handleLike}>
          <FaThumbsUp /> Me gusta ({likes})
        </button>
        <button className="btn btn-primary" onClick={onShare}>
          <FaShare /> Compartir
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
