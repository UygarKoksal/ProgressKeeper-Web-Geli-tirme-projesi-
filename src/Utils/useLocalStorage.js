import { useState, useEffect } from 'react';

// Bu fonksiyon, verdiğimiz anahtar kelimeyle (key) LocalStorage'ı yöneten profesyonel bir araçtır.
export function useLocalStorage(key, initialValue) {
  // 1. Başlangıçta veriyi LocalStorage'dan güvenli bir şekilde çek
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("LocalStorage okuma hatası:", error);
      return initialValue;
    }
  });

  // 2. Veri her değiştiğinde LocalStorage'ı otomatik güncelle
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("LocalStorage yazma hatası:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}