import React from 'react';
import { Link } from 'react-router-dom';

const AnimeList = ({animes}) => {
  const renderAnimes = (animesArr) => {
    animesArr.sort((a,b) => a.start_year - b.start_year)

    return animesArr.map((anime) => (
      <li key={anime.id}>
        <Link to={`/animes/${anime.id}`}>
          {anime.name} - {anime.start_year}
        </Link>
      </li>
    ));
  };

  return (
    <section>
      <h2>アニメ</h2>
      <Link to={"/animes/new"}>アニメを追加</Link>
      <ul>{renderAnimes(animes)}</ul>
    </section>
  );
}

export default AnimeList;