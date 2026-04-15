import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Router } from "react-router"
import './index.css'
import routes from "./routes.jsx"
import App from './App.jsx'
import Nav from './components/Nav/Nav.jsx'
import Home from './components/Home/Home.jsx'
import Shop from './components/Shop/Shop.jsx'
import Cart from './components/Cart/Cart.jsx'

const router = createBrowserRouter(routes)
console.log(router)

const linksArray = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Shop",
        path: "/shop",
    },
    {
        name: "Cart",
        path: "/cart",
    },
  ]

const products = fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())            
            .then(json=>console.log(json))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
