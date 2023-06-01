import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { isEmptyObject, validateAnime } from '../helpers/helpers.js';

const AnimeForm = ({animes, onSave}) => {
  const [formErrors, setFormErrors] = useState({})
  const {id} = useParams();

  const defaults = {
    name: '',
    start_year: '',
    about: '',
    image_url: ''
  }

  const currAnime = id? animes.find((e) => e.id === Number(id)): {};
  const initialAnimeState = {...defaults, ...currAnime}
  const [anime, setAnime] = useState(initialAnimeState);

  useEffect(() => {
    setAnime(initialAnimeState);
  }, [animes]);

  const updateMe = (key, value) => {
    setAnime((prevAnime) => ({...prevAnime, [key]: value}))
  }

  function handleChange(event) {
    const {name, value} = event.target
    updateMe(name, value);
  }

  const renderErrors = () => {
    if (isEmptyObject(formErrors)) {
      return null;
    }

    return (
      <div className="errors">
        <h3>The following errors prohibited the event from being saved:</h3>
        <ul>
          {Object.values(formErrors).map((formError) => (
            <li key={formError}>{formError}</li>
          ))}
        </ul>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateAnime(anime)

    if (!isEmptyObject(errors)) {
      setFormErrors(errors);
    } else {
      onSave(anime);
    }
  };

  return (
    <>
      <Link to="/animes">Back</Link>
      <h3>新しいアニメ</h3>
      {renderErrors()}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={anime.name}
        />
        <textarea
          cols="30"
          rows="5"
          type="textarea"
          name="about"
          placeholder="About the Anime"
          onChange={handleChange}
          value={anime.about}
        />
        <input
          type="text"
          name="start_year"
          placeholder="Start Year"
          onChange={handleChange}
          value={anime.start_year}
        />
        <input
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
          name="image_url"
          value={anime.image_url}
        />
        <button type="submit" onClick={handleSubmit}>Save</button>
      </form>
    </>
  );
}

export default AnimeForm;