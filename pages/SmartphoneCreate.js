import React from 'react';
import SmartphoneForm from '../components/SmartphoneForm';

const SmartphoneCreate = () => {
  const handleCreate = () => {
    };

  return (
    <div>
      <h1>Crear Smartphone</h1>
      <SmartphoneForm onSubmit={handleCreate} />
    </div>
  );
};

export default SmartphoneCreate;
