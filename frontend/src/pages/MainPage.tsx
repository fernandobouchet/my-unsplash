import { Container } from 'react-bootstrap';
import AddImageModal from '../components/AddImageModal';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
import { useState } from 'react';

const MainPage = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Header setShow={setShow} />
      <ImageGrid />
      <AddImageModal show={show} setShow={setShow} />
    </Container>
  );
};
export default MainPage;
