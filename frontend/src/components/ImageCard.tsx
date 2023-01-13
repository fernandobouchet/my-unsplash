import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { deleteImage } from '../services/imagesServices';

interface Props {
  image: {
    _id: string;
    label: string;
    url: string;
  };
}

const ImageCard: React.FC<Props> = ({ image }) => {
  const [hover, setHover] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const newImage = new window.Image();
    newImage.src = image.url;
    newImage.onload = () => {
      setIsLoaded(true);
    };
  }, [image]);

  const handleDelete = (id: string) => {
    deleteImage(id);
  };

  return (
    <>
      {isLoaded && (
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
      )}
    </>
  );
};
export default ImageCard;
