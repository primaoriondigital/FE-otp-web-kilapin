import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const Upload = () => {
    const {status,order} = useParams()
    const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      setImage(selectedImage);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImage(null);
      setPreviewImage(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('upload', image);

    fetch(`http://153.92.4.143:5002/image/${status}/${order}`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log('Image uploaded successfully!');
        } else {
          console.log('Failed to upload image.');
        }
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="image">Choose an image:</label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />

      {previewImage && (
        <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
      )}

      <button type="submit">Upload</button>
    </form>
    
  )
}

export default Upload