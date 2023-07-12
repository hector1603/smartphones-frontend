import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SmartphoneList = () => {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    fetchSmartphones();
  }, []);

  const fetchSmartphones = async () => {
    try {
      const response = await axios.get('/api/smartphones');
      setSmartphones(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de smartphones', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/smartphones/${id}`);
      fetchSmartphones();
    } catch (error) {
      console.error('Error al eliminar el smartphone', error);
    }
  };

  return (
    <div>
      <h2>Lista de Smartphones</h2>
      {smartphones.length === 0 ? (
        <p>No hay smartphones disponibles.</p>
      ) : (
        <ul>
          {smartphones.map((smartphone) => (
            <li key={smartphone.id}>
              <span>{smartphone.name}</span>
              <span>{smartphone.model}</span>
              <span>{smartphone.price}</span>
              <span>{smartphone.year}</span>
              <button onClick={() => handleDelete(smartphone.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SmartphoneList;
