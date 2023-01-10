import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ImageCard from './ImageCard';

const initialImages = [
  'https://picsum.photos/200/300?image=1050',
  'https://picsum.photos/300/300?image=222',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/200/300?image=206',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/300/300?image=203',
];

const ImageGrid = () => {
  const [images, setImages] = useState(initialImages);

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      className="mt-5"
    >
      <Masonry gutter="2rem">
        {images.map((image, i) => (
          <ImageCard key={i} src={image} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
export default ImageGrid;
