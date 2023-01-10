import { Dispatch, SetStateAction } from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../assets/my_unsplash_logo.svg';

type Props = {
  setShow: Dispatch<SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ setShow }) => {
  return (
    <header className="d-flex justify-content-between">
      <img src={logo} />
      <Form className="d-flex w-100">
        <Form.Group className="mb-3" controlId="formImageName">
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="Search by name" />
        </Form.Group>
        <Button
          variant="success"
          className="ms-auto my-auto"
          onClick={() => setShow(true)}
        >
          Add a photo
        </Button>
      </Form>
    </header>
  );
};
export default Header;
