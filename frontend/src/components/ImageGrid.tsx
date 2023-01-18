import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ImageCard from './ImageCard';

type Image = {
  _id: String;
  label: String;
  url: String;
};

interface Props {
  images: Image[];
}

const ImageGrid: React.FC<Props> = ({ images }) => {
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
