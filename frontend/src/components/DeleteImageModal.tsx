import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';
import { deleteImage } from '../services/imagesServices';
import React, { useState } from 'react';

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  imageId: string;
}
interface passwordInterface {
  password?: string;
}

const DeleteImageModal: React.FC<Props> = ({ show, setShow, imageId }) => {
  const [validated, setValidated] = useState(false);

  const [password, setPassword] = useState<passwordInterface>({});

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const handleDeleteImage = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result: any = await deleteImage(imageId, password);
    if (result.status === 200) {
      setValidated(true);
      location.reload();
    } else if (result.response.status === 401) {
      setValidated(true);
    }
  };

  return (
    <>
      <Modal show={show} centered keyboard={false}>
        <Modal.Header className="border-0">
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            method="delete"
            className="d-flex flex-column w-100"
            onSubmit={handleDeleteImage}
          >
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                isInvalid={validated}
                type="password"
                name="formPassword"
                placeholder="password"
                onChange={handlePassword}
              />
              <Form.Control.Feedback type="invalid">
                Wrong password.
              </Form.Control.Feedback>
            </Form.Group>
            <Modal.Footer className="border-0">
              <Button variant="light" onClick={() => setShow(false)}>
                Cancel
              </Button>
              <Button variant="danger" type="submit">
                Delete
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteImageModal;
