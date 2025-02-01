import React, { useState } from 'react';
import './PhotoGallery.css';

const images = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
  '/images/image4.png',
  '/images/image5.png',
  '/images/image6.png',
  '/images/image7.png',
  '/images/image8.png',
  '/images/image9.png',
  '/images/image10.png',
  '/images/image11.png',
  '/images/image12.png',
];

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [uploadedImages, setUploadedImages] = useState([]);
  const imagesPerPage = 12; // 2 rows x 6 columns = 12 images per page

  const openLightbox = (image) => {
    setCurrentImage(image);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImages([...uploadedImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = [...images, ...uploadedImages].slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="gallery-container">
      <h1>Photo Gallery</h1>
      <div className="upload-section">
        <label htmlFor="file-upload" className="upload-button">
          <span role="img" aria-label="camera">📷</span> Add Image
        </label>
        <input id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
      </div>
      <div className="gallery">
        {currentImages.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openLightbox(image)}>
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
      {currentImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImage} alt="Lightbox" className="lightbox-image" />
        </div>
      )}
      <div className="pagination">
        {Array.from({ length: Math.ceil((images.length + uploadedImages.length) / imagesPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;