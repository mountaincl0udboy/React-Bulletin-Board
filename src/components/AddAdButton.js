import React, { useContext } from 'react';
import { AdsContext } from '../contexts/AdsContext';

const AddAdButton = () => {
  const { addAd } = useContext(AdsContext);

  const handleAddAd = () => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newAd = { id, text: `Advertisement ${id}` };
    addAd(newAd);
  };

  return (
    <button className="btn btn-success btn-lg rounded-pill custom-btn" onClick={handleAddAd}>
      Добавить
    </button>
  );
};

export default AddAdButton;
