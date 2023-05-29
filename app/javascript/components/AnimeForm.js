import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const AnimeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    start_year: 0,
    image_url: ""
  })

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnime(formData);
  };


  const addAnime = async (anime) => {
    try {
      await window.fetch("/api/v1/animes", {
        method: 'POST',
        body: JSON.stringify(anime),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      window.alert(`${anime.name} added!`);
      navigate('/animes');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Link to="/animes">Back</Link>
      <h3>新しいアニメ</h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="text"
          name="about"
          placeholder="About the Anime"
          onChange={handleChange}
          value={formData.about}
        />
        <input
          type="number"
          name="start_year"
          placeholder="Start Year"
          onChange={handleChange}
          value={formData.start_year}
        />
        <input
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
          name="image_url"
          value={formData.image_url}
        />
        <button type="submit" onClick={handleSubmit}>Save</button>
      </form>
    </>
  );
}

export default AnimeForm;