export const validateAnime = (formData) => {
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

export const isEmptyObject = (obj) => Object.keys(obj).length === 0;