import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const FriendList = () => {
  const [friends, setFriends] = useState([
    { 
        id: 1, 
        name: 'Elvis Uriel Marciales', 
        description: 'Estudiante de Talenty-logy', 
        imageUrl: 'https://i.pinimg.com/550x/e6/d7/d2/e6d7d2c2c09bfc5b1aadbedbfdfbe435.jpg' 
    },
    
    { 
        id: 2, 
        name: 'Jose Antonio Caicedo', 
        description: 'Estudinte de Sora', 
        imageUrl: 'https://tahecosmetics.com/trends/wp-content/uploads/2023/02/mullet-hombre-2.jpg'
     },
    { 
        id: 3, 
        name: 'Diego Andres Rojas', 
        description: 'Estudinte de Tecclas', 
        imageUrl: 'https://www.blogichics.com/public_html/blogichics/wp-content/uploads/2021/02/cortes-mullet5-e1664232359547.webp' 
    },
    { 
        id: 4, 
        name: 'Yeimy Rios', 
        description: 'Profesora de la Salle', 
        imageUrl: 'https://d25d2506sfb94s.cloudfront.net/cumulus_uploads/userprofile/1212/008.jpg' 
    },
  ]);

  const [selectedFriends, setSelectedFriends] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddFriend = (friendId) => {
    const friendToAdd = friends.find(friend => friend.id === friendId);
    if (friendToAdd) {
      setSelectedFriends([...selectedFriends, friendToAdd]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h3 className="text-primary mt-4">Personas que quizá conozcas</h3>

      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Buscar amigos"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="btn btn-primary">Buscar</button>
      </div>

      <div className="row">
        {filteredFriends.map(friend => (
          <div key={friend.id} className="col-md-6">
            <Card>
              <Card.Img variant="top" src={friend.imageUrl} alt={friend.name} />
              <Card.Body>
                <Card.Title>{friend.name}</Card.Title>
                <Card.Text>{friend.description}</Card.Text>
                <Button onClick={() => handleAddFriend(friend.id)}>Agregar</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <h3>Amigos seleccionados</h3>
      <div className="row">
        {selectedFriends.map(friend => (
          <div key={friend.id} className="col-md-4">
            <Card>
              <Card.Img variant="top" src={friend.imageUrl} alt={friend.name} />
              <Card.Body>
                <Card.Title>{friend.name}</Card.Title>
                <Card.Text>{friend.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
