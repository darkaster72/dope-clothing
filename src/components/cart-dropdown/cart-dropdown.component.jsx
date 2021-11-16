import { useContext } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../../provider/cart/cart.provider';
import { CartItem } from '../cart-item/cart-item.component';
import { CustomButton } from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems, toggleHidden } = useContext(CartContext)
    const history = useHistory()

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length
                    ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <span className="empty-message">Your cart is empty</span>}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                toggleHidden();
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropdown;