import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router"
import './index.css'
import routes from "./routes.jsx"
import Nav from './components/Nav/Nav.jsx'

const router = createBrowserRouter(routes)

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <Nav linksArray={linksArray} />
    </header>
    <main>
      <RouterProvider router={router} />
    </main>
  </StrictMode>,
)
