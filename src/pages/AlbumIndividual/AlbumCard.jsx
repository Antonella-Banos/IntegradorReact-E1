import React from 'react';
import { Link } from 'react-router-dom';

// Now, modify your AlbumCard component to include a Link wrapping the album image. This link will take the user to the album details page for the corresponding album ID.

const AlbumCard = ({ img, title, release, price, category, id }) => {
  return (
    <div>
      <Link to={`/album/${id}`}>
        <img src={img} alt={category} />
      </Link>
      <h2>{title}</h2>
      <h3>Fecha de lanzamiento</h3>
      <p>{release}</p>
      <h3>Precio</h3>
      <p>${price}</p>
    </div>
  );
};

export default AlbumCard;
