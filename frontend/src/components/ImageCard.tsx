import { useState } from 'react';
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import imageIsLoaded from '../hooks/imageIsLoadedHook';
import { deleteImage } from '../services/imagesServices';

interface Props {
  image: {
    _id: string;
    label: string;
    url: string;
  };
}

const ImageCard: React.FC<Props> = ({ image }) => {
  const isLoaded = imageIsLoaded(image.url);
  const [hover, setHover] = useState(false);

  const handleDelete = (id: string) => {
    deleteImage(id);
  };

  return (
    <>
      {isLoaded ? (
        <Card
          className="rounded-4"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Card.Img
            variant="top"
            src={image.url}
            id={image._id}
            alt={image.label}
            className={`rounded-4 imageCard ${hover ? 'hide' : ''}`}
          />
          <Card.Body className={`cardBody ${hover ? 'show' : ''}`}>
            <Button
              variant="outline-danger rounded-4 ms-auto"
              onClick={() => handleDelete(image._id)}
            >
              delete
            </Button>
            <Card.Text className="text-white text-start">
              {image.label}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Container className="d-flex justify-content-center align-items-center spinner-container">
          <Spinner id="spinner" />
        </Container>
      )}
    </>
  );
};
export default ImageCard;
