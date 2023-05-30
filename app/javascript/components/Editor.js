import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import AnimeList from './AnimeList';
import Anime from './Anime';
import AnimeForm from './AnimeForm';

const Editor = () => {
  const navigate = useNavigate();
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

  const deleteAnime = async (animeId) => {
    const sure = window.confirm("Are you sure?");

    if (sure) {
      try {
        await window.fetch(`/api/v1/animes/${animeId}`, {
          method: 'DELETE'
        });
        window.alert('Anime Deleted!');
        setAnimes(animes.filter(anime => anime.id !== animeId))
        navigate('/animes');
      } catch (error) {
        console.error(error);
      }
    }
  };


  const addAnime = async (anime) => {
    try {
      const response = await window.fetch("/api/v1/animes", {
        method: 'POST',
        body: JSON.stringify(anime),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      const savedAnime = await response.json();
      const newAnimes = [...animes, savedAnime];
      setAnimes(newAnimes);

      window.alert(`${anime.name} added!`);
      navigate('/animes');
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <>
      {isError && <p>Something went wrong. Check the console.</p>}
      {isLoading ? (<p>Loading...</p>) : (
        <div>
          <AnimeList animes={animes} />
          <Link to={"/animes/new"}>アニメを追加</Link>
        </div>
      )}

      <Routes>
        <Route path=":id" element={<Anime onDelete={deleteAnime} animes={animes}/>} />
        <Route path="new" element={<AnimeForm onSave={addAnime}/>} />
      </Routes>
    </>
  )
}

export default Editor