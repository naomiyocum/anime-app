import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Anime = ({onDelete, animes}) => {
  const {id} = useParams();
  const anime = animes.find((anime) => anime.id === Number(id));


  return (
    <div>
        <>
          <Link to="/animes">Back</Link>
          <h1>{anime.name}</h1>
          <h3>Start Year: {anime.start_year}</h3>
          <p>About: {anime.about}</p>
          <img src={anime.image_url} alt={anime.about}></img>
          <br /><br />
          <Link to={`/animes/${anime.id}/edit`}>Edit</Link>
          <button
            type="button"
            onClick={() => onDelete(anime.id)}
          >
            Delete
          </button>
        </>
    </div>
  )
};

export default Anime;