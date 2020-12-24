import React, { useState } from 'react';
import { StyledHeader } from './Header.style';

export const Header = ({ onFileChange, onFileUpload, selectedFile }) => {
  const [inputKey, setInputKey] = useState('');
  const handleSubmit = () => {
    onFileUpload();
    setInputKey(Date.now());
  };

  return (
    <StyledHeader data-testid="Header">
      <div className="input-group">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile04"
            onChange={onFileChange}
            key={inputKey}
          />
          <label className="custom-file-label" for="inputGroupFile04">
            {selectedFile?.length ? selectedFile[0].name : 'Choose image'}
          </label>
        </div>
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSubmit}
          >
            Send Image
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};
