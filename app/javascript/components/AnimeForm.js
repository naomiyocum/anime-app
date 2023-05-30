import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const AnimeForm = ({onSave}) => {
  const [formErrors, setFormErrors] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    start_year: "",
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

  const validateAnime = () => {
    const errors = {};

    if (formData.name === '') {
      errors.name = 'You must enter a name';
    }

    if (formData.about === '') {
      errors.about = 'You must enter an about section';
    }

    if (formData.start_year === '') {
      errors.start_year = 'You must enter a start year';
    }

    if (formData.image_url === '') {
      errors.image_url = 'You must enter an image URL';
    }

    return errors;
  }

  const isEmptyObject = (obj) => Object.keys(obj).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateAnime(formData)

    if (!isEmptyObject(errors)) {
      setFormErrors(errors);
    } else {
      onSave(formData);
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
          value={formData.name}
        />
        <textarea
          cols="30"
          rows="5"
          type="textarea"
          name="about"
          placeholder="About the Anime"
          onChange={handleChange}
          value={formData.about}
        />
        <input
          type="text"
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