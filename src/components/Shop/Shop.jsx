import { useOutletContext } from "react-router";
import ShopItem from "../ShopItem/ShopItem";
import * as styles from "./Shop.module.css"

const Shop = () => {
  const {products, cart, setCart} = useOutletContext()

  function onAddToCart(e){
    const id = e.target.parentNode.getAttribute("class").split(" ")[1].split("-")[1]
    const quantity = e.target.parentNode.querySelector("input").value

    if(quantity != 0){
      if(cart.filter(cartItem => cartItem.id == id)[0] === undefined){
        setCart([...cart, {
            id: id,
            quantity:quantity,
        }])
      } else {
        const newCart = cart.map(cartItem => cartItem.id === id ? {id: id, quantity: (parseInt(cartItem.quantity) + parseInt(quantity)).toString()} : cartItem)
        setCart(newCart)
      }
    }
  }
  
  return (
      <>
          <h1>Shop</h1>
          <div className={styles.shopGrid}>
            {products.map(p => {
              return (
                <ShopItem key={p.id} item={p} onAddToCart={onAddToCart} />
              )
            })}
          </div>
          
      </>
  )
}

export default Shop