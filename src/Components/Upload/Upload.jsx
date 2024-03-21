import React, { useState } from 'react';

function ProfilePictureUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Implement file upload logic here
    if (selectedFile) {
      // Use FormData to construct a multipart/form-data request
      const formData = new FormData();
      formData.append('profilePicture', selectedFile);

      // Send formData to your server using fetch or axios
      // Example: fetch('/upload', { method: 'POST', body: formData });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
        </div>
      )}
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default ProfilePictureUpload;
