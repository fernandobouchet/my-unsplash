import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddImageModal: React.FC<Props> = ({ show, setShow }) => {
  return (
    <>
      <Modal show={show} centered keyboard={false}>
        <Modal.Header>
          <Modal.Title>Add a new photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex flex-column w-100">
            <Form.Group className="mb-3" controlId="formImageLabel">
              <Form.Label>Label</Form.Label>
              <Form.Control type="email" placeholder="Image label" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImageUrl">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control type="email" placeholder="Image URL" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="success">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddImageModal;
