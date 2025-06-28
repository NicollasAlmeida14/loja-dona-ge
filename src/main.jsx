import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartProvider.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import router from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
      <ToastContainer
        position='top-right'
        autoClose={1500}
        style={{ marginTop: '50px' }}
      />
    </CartProvider>
  </StrictMode>,
)
