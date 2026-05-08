import { useState } from "react"
import * as styles from "./ShopItem.module.css"

const ShopItem = ({ item, onAddToCart }) => {
    const [value, setValue] = useState(1)

    function increaseValue(){
        setValue(value+1)
    }

    function decreaseValue(){
        setValue(value-1)
    }

    return (
        <div className={"item id-"+item.id+" "+styles.shopItem} >
            <img src={item.image}/>
            <h2 className="category">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h2>
            <h3 className="itemName">{item.title}</h3>
            <p className={styles.description} data-testid="description">{item.description}</p>
            <p className={styles.price} data-testid="price">{item.price} $</p>
            <div className="quantity">
                <button onClick={decreaseValue}>-</button>
                <input type="number" value={value} readOnly/>
                <button onClick={increaseValue}>+</button>
            </div>
            <button onClick={onAddToCart}>Add to cart</button>
        </div>
    )
}

export default ShopItem

