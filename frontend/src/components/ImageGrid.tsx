import { Container, Spinner } from 'react-bootstrap';
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
      {images.length >= 1 ? (
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
      ) : (
        <Container className="d-flex justify-content-center align-items-center main-spinner-container">
          <Spinner id="main-spinner" />
        </Container>
      )}
    </>
  );
};
export default ImageGrid;
