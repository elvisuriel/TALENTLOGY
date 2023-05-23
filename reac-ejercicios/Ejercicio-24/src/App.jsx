import { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';

function App() {
  const CLIENT_ID = "b46395f99fbd4ad997a82ed37f632519";
  const REDIRECT_URI = "http://localhost:5173/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    });

    const artistIds = data.artists.items.map((artist) => artist.id);
    const artistTracks = await Promise.all(
      artistIds.map(async (id) => {
        const response = await axios.get(
          `https://api.spotify.com/v1/artists/${id}/top-tracks`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
            params: {
              country: "US" // Puedes establecer el país según tus necesidades
            }
          }
        );
        return response.data.tracks;
      })
    );

    const mergedTracks = artistTracks.flatMap((tracks) => tracks);
    setArtists(data.artists.items);
    setSearchResults(mergedTracks);
  };

  const playSong = (track) => {
    setSelectedTrack(track);
    setIsPlaying(true);
    // Lógica para reproducir la canción utilizando la API de Spotify
  };

  const pauseSong = () => {
    setIsPlaying(false);
    // Lógica para pausar la canción utilizando la API de Spotify
  };

  const nextSong = () => {
    // Lógica para avanzar a la siguiente canción de la lista de reproducción utilizando la API de Spotify
  };

  const previousSong = () => {
    // Lógica para retroceder a la canción anterior de la lista de reproducción utilizando la API de Spotify
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    // Lógica para ajustar el volumen utilizando la API de Spotify
  };

  const renderArtists = () => {
    return searchResults.map((track) => (
      <div key={track.id}>
        {track.album.images.length ? (
          <img width={"100%"} src={track.album.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
 {track.name} - {track.artists[0].name}
        <button onClick={() => playSong(track)}>Reproducir</button>
      </div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}

        {token ? (
          <form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        ) : (
          <h2>Please login</h2>
        )}

        {selectedTrack && (
          <div>
            <h3>Reproduciendo: {selectedTrack.name}</h3>
            <button onClick={pauseSong}>Pausar</button>
            <button onClick={nextSong}>Siguiente</button>
            <button onClick={previousSong}>Anterior</button>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        )}

        {renderArtists()}
      </header>
    </div>
  );
}

export default App;