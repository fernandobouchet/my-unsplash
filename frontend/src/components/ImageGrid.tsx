import { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { getImages } from '../services/imagesServices';
import ImageCard from './ImageCard';

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages().then((result: []) => setImages(result));
  }, []);

  return (
    <>
      {images && (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          className="mt-5"
        >
          <Masonry gutter="2rem">
            {images.map((image: any) => (
              <ImageCard key={image._id} image={image} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </>
  );
};
export default ImageGrid;
