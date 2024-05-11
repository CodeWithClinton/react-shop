import React from 'react'
import NavBar from './components/NavBar'
import ProductContainer from './components/ProductContainer'
import Footer from './components/Footer'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayouts from './layouts/MainLayouts'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import NotFound from './pages/NotFound'

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<HomePage />}/>
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App