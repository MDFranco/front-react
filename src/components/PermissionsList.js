import React, { useEffect, useState } from 'react';
import { getPermissions } from '../services/permissionService';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const PermissionsList = () => {
  const [permissions, setPermissions] = useState([]);

  const fetchPermissions = async () => {
    const response = await getPermissions();
    setPermissions(response.data);
  };

  useEffect(() => {
    fetchPermissions();
  }, []);

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre Empleado</TableCell>
            <TableCell>Apellido Empleado</TableCell>
            <TableCell>Tipo de Permiso</TableCell>
            <TableCell>Fecha de Permiso</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {permissions.map((permission) => (
            <TableRow key={permission.id}>
              <TableCell>{permission.nombreEmpleado}</TableCell>
              <TableCell>{permission.apellidoEmpleado}</TableCell>
              <TableCell>{permission.tipoPermiso}</TableCell>
              <TableCell>{permission.fechaPermiso}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PermissionsList;
