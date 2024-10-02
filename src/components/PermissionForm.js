import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { requestPermission } from '../services/permissionService';

const PermissionForm = ({ fetchPermissions }) => {
  const [permission, setPermission] = useState({
    nombreEmpleado: '',
    apellidoEmpleado: '',
    tipoPermiso: 0,
    fechaPermiso: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPermission({ ...permission, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await requestPermission(permission);
    fetchPermissions();  // Actualiza la lista después de agregar el permiso
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="nombreEmpleado"
            label="Nombre Empleado"
            value={permission.nombreEmpleado}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="apellidoEmpleado"
            label="Apellido Empleado"
            value={permission.apellidoEmpleado}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="tipoPermiso"
            label="Tipo de Permiso"
            value={permission.tipoPermiso}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="fechaPermiso"
            label="Fecha de Permiso"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={permission.fechaPermiso}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Solicitar Permiso
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PermissionForm;
