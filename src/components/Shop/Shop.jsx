import { useOutletContext } from "react-router";
import ShopItem from "../ShopItem/ShopItem";

const Shop = () => {
  const {products, cart, setCart} = useOutletContext()

  function onAddToCart(e){
    const id = e.target.parentNode.getAttribute("class").split("-")[1]
    const quantity = e.target.parentNode.querySelector("input").value

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
  
  return (
      <>
          <h1>Shop</h1>
          {products.map(p => {
            return (
              <ShopItem key={p.id} item={p} onAddToCart={onAddToCart} />
            )
          })}
      </>
  )
}

export default Shop