import { Button, Form, InputGroup } from 'react-bootstrap';
import logo from '../assets/my_unsplash_logo.svg';
import searchLogo from '../assets/search_logo.svg';

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ setShow }) => {
  return (
    <header className="d-flex justify-content-between mt-4">
      <img src={logo} />
      <div className="d-flex w-100 ms-3">
        <InputGroup id="input-group">
          <InputGroup.Text id="search-icon-container">
            <img src={searchLogo} />
          </InputGroup.Text>
          <Form.Control
            id="search_input"
            type="text"
            placeholder="Search by name"
            aria-label="image name"
          />
        </InputGroup>
        <Button
          variant="success"
          className="ms-auto my-auto"
          onClick={() => setShow(true)}
        >
          Add a photo
        </Button>
      </div>
    </header>
  );
};
export default Header;
