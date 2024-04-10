import React, { createContext, useState } from 'react';

export const AdsContext = createContext();

export const AdsProvider = ({ children }) => {
  const [ads, setAds] = useState([]);

  const addAd = (newAd) => {
    setAds([...ads, newAd]);
  };

  const deleteAd = (id) => {
    setAds(ads.filter(ad => ad.id !== id));
  };

  const updateAd = (id, newText) => {
    setAds(ads.map(ad => ad.id === id ? { ...ad, text: newText } : ad));
  };

  return (
    <AdsContext.Provider value={{ ads, addAd, deleteAd, updateAd }}>
      {children}
    </AdsContext.Provider>
  );
};
