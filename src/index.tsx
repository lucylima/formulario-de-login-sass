import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Formulario from './Formulario';
import './style.scss';

const root = createRoot(document.getElementById('app'));

root.render(
  <Formulario />
);
