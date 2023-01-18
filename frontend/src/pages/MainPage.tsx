import { Container } from 'react-bootstrap';
import AddImageModal from '../components/AddImageModal';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
import { useState, useEffect } from 'react';
import { getImages } from '../services/imagesServices';

type Image = {
  _id: string;
  label: string;
  url: string;
};

const MainPage = () => {
  const [show, setShow] = useState<boolean>(false);

  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    getImages().then((result: Image[]) => setImages(result));
  }, []);

  return (
    <Container>
      <Header setShow={setShow} />
      <ImageGrid images={images} />
      <AddImageModal show={show} setShow={setShow} />
    </Container>
  );
};
export default MainPage;
