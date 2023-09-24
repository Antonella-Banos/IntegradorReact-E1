import React, { useState } from 'react';
import CustomModal from './CustomModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAccept = () => {
    // Handle the "Accept" button click here
    // You can add your custom logic here.
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <CustomModal
        open={modalOpen}
        onClose={handleCloseModal}
        onAccept={handleAccept}
      />
    </div>
  );
}

export default App;
