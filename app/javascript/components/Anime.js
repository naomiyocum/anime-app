import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

const Anime = () => {
  const {id} = useParams();
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await window.fetch(`/api/v1/animes/${id}`);
        const data = await response.json();
        setAnime(data);
      } catch(error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    }
    fetchAnime();
  }, [])

  return (
    <div>
      {isError && <p>Something went wrong. Check the console.</p>}
      {isLoading ? (<p>Loading...</p>) : (
        <>
          <h1>{anime.name}</h1>
          <h3>Start Year: {anime.start_year}</h3>
          <p>About: {anime.about}</p>
        </>
        )
      }
    </div>
  )
};

export default Anime;