import React from 'react';
import Link from 'next/link';

import Button from '@mui/material/Button';

const IndexPage = () => {
  return (
    <div>
      <h1>Bienvenido a Mi Lista de Smartphones</h1>
      <p>Esta es una aplicación para administrar y hacer seguimiento de tus smartphones favoritos.</p>
      <p>Para comenzar, inicia sesión y accede a la lista de smartphones.</p>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <Link href="/login" legacyBehavior>
          <Button  variant="contained">Iniciar sesión</Button >
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;

