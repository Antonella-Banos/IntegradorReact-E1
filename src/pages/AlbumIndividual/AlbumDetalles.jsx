import React from 'react';
import { useParams } from 'react-router-dom';
import { albumes } from './albumes.js';
import { songList } from './songList.js';

//Create a new component for displaying album details and song lists. Let's call it AlbumDetails.js. This component will take the album ID as a parameter and display the details and associated song list based on that ID.

const AlbumDetails = () => {
  const { id } = useParams();
  const album = albumes.find((item) => item.id === Number(id));
  const songs = songList.find((item) => item.id === Number(id));

  if (!album || !songs) {
    return <div>Album not found</div>;
  }

  return (
    <div>
      <div>
        <img src={album.img} alt={album.category} />
        <h2>{album.title}</h2>
        <h3>Fecha de lanzamiento</h3>
        <p>{album.release}</p>
        <h3>Precio</h3>
        <p>${album.price}</p>
      </div>
      <div>
        <h3>Song List</h3>
        <ul>
          {songs.songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlbumDetails;
