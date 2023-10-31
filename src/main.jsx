import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from './Providers/CartProvider'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <AuthProvider>
    
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    
    </AuthProvider>
    </CartProvider>
    
  </React.StrictMode>,
)
