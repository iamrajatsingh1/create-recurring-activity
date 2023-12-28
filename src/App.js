import { useState } from 'react';
import './App.css';
import RecurringActivityDialog from './components/RecurringActivityDialog';
import { Button } from '@mui/material';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: 'Other',
    from: '12:00',
    to: '13:00',
  });
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleOnChange = (name, value) => {
    setFormData(prevData => {
      console.log({ ...prevData, [name]: value })
      return { ...prevData, [name]: value }
    });
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // here we can get the form data
  };

  return (
    <div className="center-container">
      <Button variant='outlined' onClick={openModal}>Open Modal</Button>
      <RecurringActivityDialog isOpen={modalIsOpen} onClose={closeModal} formData={formData} handleOnChange={handleOnChange} onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default App;
