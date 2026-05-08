import { Outlet } from "react-router"
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav"
import * as styles from "./App.module.css"

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

async function fetchData(url){
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch {
    return { error: 'Something went wrong', reason: e.message };
  }
};

const products = await fetchData('https://fakestoreapi.com/products/')

const App = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        if(cart.length !== 0){
            document.querySelectorAll("a")[2].textContent = "Cart (" + cart.length + ")"
        }
    }, [cart])

    return (
        <div className={styles.app}>
            <header>
                <Nav linksArray={linksArray} />
            </header>
            <main>
                <Outlet context={{products, cart, setCart}} />
            </main>
        </div>
    )
}

export default App