import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PermissionForm from '../components/PermissionForm';

test('renders permission form', () => {
  render(<PermissionForm />);
  const buttonElement = screen.getByText(/Solicitar Permiso/i);
  expect(buttonElement).toBeInTheDocument();
});

test('submits form with correct data', () => {
  const mockSubmit = jest.fn();
  render(<PermissionForm fetchPermissions={mockSubmit} />);
  fireEvent.change(screen.getByLabelText(/Nombre Empleado/i), { target: { value: 'Juan' } });
  fireEvent.change(screen.getByLabelText(/Apellido Empleado/i), { target: { value: 'Perez' } });
  fireEvent.change(screen.getByLabelText(/Tipo de Permiso/i), { target: { value: '1' } });
  fireEvent.change(screen.getByLabelText(/Fecha de Permiso/i), { target: { value: '2023-09-01' } });
  fireEvent.click(screen.getByText(/Solicitar Permiso/i));
  expect(mockSubmit).toHaveBeenCalledTimes(1);
});
