import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimeList from './AnimeList';

const Editor = () => {
  const [animes, setAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch("/api/v1/animes");
        const data = await response.json();
        setAnimes(data);
      } catch(error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isError && <p>Something went wrong. Check the console.</p>}
      {isLoading ? (<p>Loading...</p>) : (
        <div>
          <AnimeList animes={animes} />
          <Link to={"/animes/new"}>アニメを追加</Link>
        </div>
      )}
    </>
  )
}

export default Editor