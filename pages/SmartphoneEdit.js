import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SmartphoneForm from '../components/SmartphoneForm';

const SmartphoneEdit = () => {
  const router = useRouter();
  const { id } = router.query;

  const [smartphone, setSmartphone] = useState(null);

  useEffect(() => {
    const fetchSmartphoneData = async () => {
      try {
        const response = await fetch(`/api/smartphones/${id}`);
        const data = await response.json();
        setSmartphone(data);
      } catch (error) {
        console.error('Error al obtener los datos del smartphone:', error);
      }
    };

    if (id) {
      fetchSmartphoneData();
    }
  }, [id]);

  const handleUpdate = async (updatedSmartphone) => {
    try {
      const response = await fetch(`/api/smartphones/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedSmartphone)
      });

      if (response.ok) {
        router.push('/smartphones');
      } else {
        console.error('Error al actualizar el smartphone');
      }
    } catch (error) {
      console.error('Error al actualizar el smartphone:', error);
    }
  };

  return (
    <div>
      <h1>Editar Smartphone</h1>
      {smartphone ? (
        <SmartphoneForm onSubmit={handleUpdate} initialData={smartphone} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default SmartphoneEdit;
