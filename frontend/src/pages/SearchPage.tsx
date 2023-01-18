import { Container } from 'react-bootstrap';
import AddImageModal from '../components/AddImageModal';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
import { useState, useEffect } from 'react';
import { getImagesByLabel } from '../services/imagesServices';
import { useParams } from 'react-router-dom';

type Image = {
  _id: String;
  label: String;
  url: String;
};

const SearchPage = () => {
  const { label } = useParams();

  const [show, setShow] = useState<boolean>(false);

  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    label?.length !== undefined &&
      getImagesByLabel(label).then((result: Image[]) => setImages(result));
  }, [label]);

  return (
    <Container>
      <Header setShow={setShow} />
      {images && images.length >= 1 ? (
        <ImageGrid images={images} />
      ) : (
        <Container className="d-flex w-100 vh-100 justify-content-center align-items-center">
          <p>No results found</p>
        </Container>
      )}
      <AddImageModal show={show} setShow={setShow} />
    </Container>
  );
};
export default SearchPage;
