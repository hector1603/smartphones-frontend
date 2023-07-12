import React from 'react';

const SmartphoneItem = ({ smartphone, onDelete }) => {
  const handleDelete = () => {
    onDelete(smartphone.id);
  };

  return (
    <li>
      <span>{smartphone.name}</span>
      <span>{smartphone.model}</span>
      <span>{smartphone.price}</span>
      <span>{smartphone.year}</span>
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
};

export default SmartphoneItem;
