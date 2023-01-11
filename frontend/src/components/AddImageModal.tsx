import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import { uploadImage } from '../services/imagesServices';

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface image {
  label?: string;
  url?: string;
}

const AddImageModal: React.FC<Props> = ({ show, setShow }) => {
  const [imageData, setImageData] = useState<image>({});

  const handleImageData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUploadImage = () => {
    uploadImage(imageData);
  };

  return (
    <>
      <Modal show={show} centered keyboard={false}>
        <Modal.Header>
          <Modal.Title>Add a new photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="d-flex flex-column w-100"
            onSubmit={handleUploadImage}
          >
            <Form.Group className="mb-3" controlId="formImageLabel">
              <Form.Label>Label</Form.Label>
              <Form.Control
                required
                type="text"
                name="label"
                placeholder="Image label"
                onChange={handleImageData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImageUrl">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                required
                type="url"
                name="url"
                placeholder="Image URL"
                onChange={handleImageData}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="light" onClick={() => setShow(false)}>
                Cancel
              </Button>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddImageModal;
