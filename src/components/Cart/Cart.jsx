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

    function increaseValue(e){
        const itemId = e.target.parentNode.parentNode.className.split(' ')[1].split('-')[1]
        const newCart = cart.map(cartItem => cartItem.id == itemId ? {id: itemId, quantity: (parseInt(cartItem.quantity) + 1).toString()} : cartItem)
        setCart(newCart)
    }

    function decreaseValue(e){
        const itemId = e.target.parentNode.parentNode.className.split(' ')[1].split('-')[1]
        if(cart.filter(cartItem => cartItem.id == itemId)[0].quantity > 1){
            const newCart = cart.map(cartItem => cartItem.id == itemId ? {id: itemId, quantity: (parseInt(cartItem.quantity) - 1).toString()} : cartItem)
            setCart(newCart)
        }
    }

    if(cart.length != 0){
        return (
            <>
                <h1>Cart</h1>
                <div className={styles.cart}>
                    {cart.map(cartItem => {
                        const product = products.filter(product => product.id == cartItem.id)[0]
                        return (
                            <div key={cartItem.id} className={styles.cartItem + ' id-' + cartItem.id}>
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
                            Total : {
                                cart.reduce((totalPrice, cartItem) => {
                                    const itemPrice = products.filter(product => product.id == cartItem.id)[0].price
                                    return totalPrice + itemPrice * cartItem.quantity
                                }, 0)
                            } $
                        </p>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h1>Cart</h1>
                <div className={styles.cart}>
                    <p>Your cart is empty</p>
                </div>
            </>
        )
    }
    
}

export default Cart