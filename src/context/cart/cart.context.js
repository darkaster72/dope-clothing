import { createContext } from "react";

const INITIAL_STATE = {
    hidden: true,
    toggleHidden: () => { }
};
const CartContext = createContext(INITIAL_STATE)

export default CartContext;