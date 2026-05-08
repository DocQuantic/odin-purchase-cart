import { useState } from "react"
import * as styles from "./ShopItem.module.css"

const ShopItem = ({ item, onAddToCart }) => {
    const [value, setValue] = useState(1)

    function increaseValue(){
        const newVal = value+1 
        setValue(newVal)
    }

    function decreaseValue(){
        const newVal = value == 0 ? 0 : value-1
        setValue(newVal)
    }

    return (
        <div className={"item id-"+item.id+" "+styles.shopItem} >
            <div className={styles.imageContainer}>
                <img src={item.image}/>
            </div>
            <h2 className="category">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h2>
            <h3 className="itemName">{item.title}</h3>
            <p className={styles.price} data-testid="price">{item.price} $</p>
            <div className={styles.quantity}>
                <button onClick={decreaseValue}>-</button>
                <input type="number" value={value} readOnly/>
                <button onClick={increaseValue}>+</button>
            </div>
            <button onClick={onAddToCart}>Add to cart</button>
        </div>
    )
}

export default ShopItem

