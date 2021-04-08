import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'

const Product = ({ item, id }) => {

    const { addToCart } = useContext(CartContext)

    return (
        <div className="product">
            <p className="productName">Product: {item.productName}</p>
            <p className="productDescription">Description: about product here</p>
            <p className="productPrice">Price: {item.price} kr</p>
            <button
                className="firstPageBtn"
                onClick={() => addToCart(item)}
            >
                Add to cart
            </button>
        </div >
    )
}

export default Product