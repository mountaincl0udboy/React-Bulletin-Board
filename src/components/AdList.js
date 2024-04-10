import React, { useState, useContext, memo } from 'react';
import { AdsContext } from '../contexts/AdsContext';

const AdList = memo(() => {
  const { ads, addAd, deleteAd, updateAd } = useContext(AdsContext);
  const [newAdText, setNewAdText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleAddAd = () => {
    if (newAdText.trim() !== '') {
      const newAd = { id: ads.length + 1, text: newAdText };
      addAd(newAd);
      setNewAdText('');
    } else {
      alert('Введите текст объявления');
    }
  };

  const handleEditAd = (id) => {
    setEditingId(id);
  };

  const handleSaveAd = (id, newText) => {
    updateAd(id, newText);
    setEditingId(null);
  };

  return (
    <div>
      <h2>Объявления</h2>
      <input type="text" value={newAdText} onChange={(e) => setNewAdText(e.target.value)} placeholder="Введите текст объявления"className="input-text"/>
      <button className="btn btn-primary" onClick={handleAddAd}>Добавить объявление</button>
      {ads.map(ad => (
        <div key={ad.id}>
          {editingId === ad.id ? (
            <>
              <input 
                type="text" 
                value={ad.text} 
                onChange={(e) => updateAd(ad.id, e.target.value)} 
              />
              <button className="btn btn-primary" onClick={() => handleSaveAd(ad.id, ad.text)}>Сохранить</button>
            </>
          ) : (
            <>
              <p>ID: {ad.id}</p>
              <p>Text: {ad.text}</p>
              <button className="btn btn-secondary" onClick={() => deleteAd(ad.id)}>Удалить</button>
              <button className="btn btn-secondary" onClick={() => handleEditAd(ad.id)}>Редактировать</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
});

export default AdList;
