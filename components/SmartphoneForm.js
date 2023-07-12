import React, { useState } from 'react';
import axios from 'axios';

const SmartphoneForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [model, setModel] = useState(initialData ? initialData.model : '');
  const [price, setPrice] = useState(initialData ? initialData.price : '');
  const [year, setYear] = useState(initialData ? initialData.year : '');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !model || !price || !year) {
      setErrorMessage('Por favor, complete todos los campos.');
      return;
    }

    try {
      const data = { name, model, price, year };

      if (initialData) {
        await axios.put(`/api/smartphones/${initialData.id}`, data);
      } else {
        await axios.post('/api/smartphones', data);
      }

      onSubmit();
    } catch (error) {
      setErrorMessage('Ocurrió un error al guardar el smartphone. Por favor, inténtelo nuevamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Modelo:</label>
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
      </div>
      <div>
        <label>Precio:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Año:</label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
      </div>
      <div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">{initialData ? 'Actualizar' : 'Crear'}</button>
      </div>
    </form>
  );
};

export default SmartphoneForm;
