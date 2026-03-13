import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import Portfolio from './Portfolio';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);
