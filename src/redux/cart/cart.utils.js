export const addItemToCart = (cartItems, itemToAdd) => {
    const itemInCart = cartItems.find(c => c.id === itemToAdd.id);

    if (itemInCart) {
        return cartItems.map(item => item === itemInCart
            ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
            : item)
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}


export const removeItemFromCart = (cartItems, itemToRemove) => {
    const itemInCart = cartItems.find(c => c.id === itemToRemove.id);

    return itemInCart.quantity === 1
        ? cartItems.filter(item => item.id !== itemToRemove.id)
        : cartItems.map(item => itemInCart === item
            ? { ...item, quantity: item.quantity - 1 }
            : item)
}