import React from 'react';
import { Container, Typography } from '@mui/material';
import PermissionForm from './components/PermissionForm';
import PermissionsList from './components/PermissionsList';

function App() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Gestión de Permisos
      </Typography>
      <PermissionForm />
      <PermissionsList />
    </Container>
  );
}

export default App;
