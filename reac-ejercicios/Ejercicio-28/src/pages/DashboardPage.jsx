import React from 'react';
import NavigationBar from '../components/NavigationBar';
import NewsCard from '../components/NewsCard';
import PostContainer from '../components/PostContainer';
import FriendList from '../components/FriendList';
import { FaThumbsUp, FaShare } from 'react-icons/fa';

export const DashboardPage = () => {
  const news = [
    {
      title: 'Premier League',
      description: 'El Manchester City le ganó al Chelsea con gol de Julián Álvarez y celebró su nuevo título en la Premier League',
      imageUrl: 'https://www.infobae.com/new-resizer/2RZBqAVwrX1cX10g3AGj2F3oyYE=/1024x512/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/C7KOAMXLCUKKAWQLYPYWSXG3PY.jpg',
    },
    {
      title: 'Shakira',
      description: 'Shakira lanzó conmovedor video oficial de su sencillo ‘Acróstico’: canta con sus hijos',
      imageUrl: 'https://img.asmedia.epimg.net/resizer/knn4lckVkVXoVQtQv_EGii3k364=/1200x1200/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/K2TFMR66PBCIRPGEBT5NDMNCGQ.png',
    },
    // Agrega más noticias si es necesario
  ];

  const handleLike = (index) => {
    // Implementa la lógica para incrementar los "me gusta" de la noticia en el índice proporcionado
  };

  const handleShare = (index) => {
    // Implementa la lógica para compartir la noticia en el índice proporcionado
  };

  return (
    <div>
      <h3 className="text-primary mt-4">NETWORT-REACT</h3>
      <NavigationBar />

      <div className="grid">
        <div className="column">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              renderActions={() => (
                <div className="card-actions">
                  <button className="btn btn-primary" onClick={() => handleLike(index)}>
                    <FaThumbsUp /> Me gusta
                  </button>
                  <button className="btn btn-primary" onClick={() => handleShare(index)}>
                    <FaShare /> Compartir
                  </button>
                </div>
              )}
            />
          ))}
        </div>

        <div className="column">
          <PostContainer />
        </div>
        <div className="column">
          <FriendList />
        </div>
      </div>
    </div>
  );
};
