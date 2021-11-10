export const addItemToCart = (cartItems, itemToAdd) => {
    const itemInCart = cartItems.find(c => c.id === itemToAdd.id);

    if (itemInCart) {
        return cartItems.map(item => item === itemInCart
            ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
            : item)
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}