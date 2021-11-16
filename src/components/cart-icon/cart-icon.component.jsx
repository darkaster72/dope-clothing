import { useContext } from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../provider/cart/cart.provider';
import './cart-icon.styles.scss';

const CartIcon =  () => {
    const { toggleHidden, cartItemsCount } = useContext(CartContext)

    return (
        <div className="cart-icon" onClick={toggleHidden}>
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">{cartItemsCount}</span>
        </div>
    );
};


export default CartIcon;