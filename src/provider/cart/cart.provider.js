import { createContext, useEffect, useState } from "react";
import { addItemToCart, getCartItemsCount, getCartTotal, removeItemFromCart } from "./cart.utils";

export const CartContext = createContext({
    hidden: true,
    cartItemsCount: 0,
    cartItems: [],
    cartTotal: 0,
    toggleHidden: () => { },
    addItem: () => { },
    removeItem: () => { },
    clearItem: () => { }
})

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true)
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const toggleHidden = () => setHidden(!hidden)
    const addItem = item => setCartItems(addItemToCart(cartItems, item))
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))
    const clearItem = item => setCartItems(cartItems.filter(i => i.id !== item.id))

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems))
    }, [cartItems])

    useEffect(() => {
        setCartTotal(getCartTotal(cartItems))
    }, [cartItems])


    return (
        <CartContext.Provider value={{
            hidden,
            cartItemsCount,
            cartItems,
            cartTotal,
            toggleHidden,
            addItem,
            removeItem,
            clearItem,
        }}>{children}</CartContext.Provider>
    )
}

export default CartProvider