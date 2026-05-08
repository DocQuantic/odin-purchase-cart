import { useOutletContext } from "react-router"

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
    
    return (
        <>
            <h1>Cart</h1>
            {cart.map(cartItem => {
                const product = products.filter(product => product.id == cartItem.id)[0]
                return (
                    <div key={cartItem.id}>
                        <h2>{product.title}</h2>
                        <p>{cartItem.quantity}</p>
                        <p>{product.price}</p>
                        <button onClick={removeCartItem}>Remove from cart</button>
                    </div>
                )
            })}
        </>
    )
}

export default Cart