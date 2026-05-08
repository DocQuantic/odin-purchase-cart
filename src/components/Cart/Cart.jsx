import { useOutletContext } from "react-router"
import * as styles from "./Cart.module.css"

const Cart = () => {
    const {products, cart, setCart} = useOutletContext()

    function removeCartItem(e){
        const itemTitle = e.target.parentNode.querySelector("h2").textContent
        let productId = null
        cart.map(cartItem => {
            productId = products.filter(product => product.id == cartItem.id)[0].id
        })
        setCart(cart.filter(item => item.id != productId))        
    }

    function increaseValue(){
        
    }

    function decreaseValue(){
        
    }
    
    return (
        <>
            <h1>Cart</h1>
            <div className={styles.cart}>
                {cart.map(cartItem => {
                    console.log(cartItem)
                    const product = products.filter(product => product.id == cartItem.id)[0]
                    console.log(product)
                    return (
                        <div key={cartItem.id} className={styles.cartItem}>
                            <h2>{product.title}</h2>
                            <div className={styles.quantity}>
                                <button onClick={decreaseValue}>-</button>
                                <input type="number" value={cartItem.quantity} readOnly/>
                                <button onClick={increaseValue}>+</button>
                            </div>
                            <p>{product.price} $</p>
                            <button onClick={removeCartItem}>Remove from cart</button>
                        </div>
                    )
                })}
                <div className={styles.total}>
                    <p>
                        Total : $
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cart