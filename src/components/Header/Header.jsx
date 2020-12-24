import React, { useState } from 'react';
import { StyledHeader } from './Header.style';

export const Header = ({ onFileChange, onFileUpload }) => {
  const [inputKey, setInputKey] = useState('');
  const handleSubmit = () => {
    onFileUpload();
    setInputKey(Date.now());
  };

  return (
    <StyledHeader data-testid="Header">
      <input
        type="file"
        id="myfile"
        name="myfile"
        onChange={onFileChange}
        key={inputKey}
      />

      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={handleSubmit}
      >
        Send Image
      </button>
    </StyledHeader>
  );
};
