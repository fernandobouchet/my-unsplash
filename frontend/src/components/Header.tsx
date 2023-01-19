import React, { useRef } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import logo from '../assets/my_unsplash_logo.svg';
import searchLogo from '../assets/search_logo.svg';
import { useNavigate } from 'react-router-dom';

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ setShow }) => {
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.KeyboardEvent) => {
    const label = inputRef.current!.value;

    if (e.key === 'Enter' && label && label.indexOf(' ') <= 0)
      navigate(`/search/${label}`);
  };

  return (
    <header className="d-flex justify-content-between mt-4">
      <a href="/">
        <img src={logo} />
      </a>
      <div className="d-flex w-100 ms-3" id="inputs-container">
        <InputGroup id="input-group">
          <InputGroup.Text id="search-icon-container">
            <img src={searchLogo} />
          </InputGroup.Text>
          <Form.Control
            id="search_input"
            type="text"
            placeholder="Search by name"
            aria-label="image name"
            ref={inputRef}
            onKeyDown={handleSearch}
          />
        </InputGroup>
        <Button
          id="add-photo-button"
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
