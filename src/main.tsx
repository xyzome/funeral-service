import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for styles

// Initialize AOS with custom settings
AOS.init({
  easing: 'ease-in-out', // Easing function
  once: true, // Animation happens only once per element
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
