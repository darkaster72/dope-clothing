import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { CartItem } from '../cart-item/cart-item.component';
import { CustomButton } from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';


const CartDropdown = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length
                    ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <span className="empty-message">Your cart is empty</span>}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default CartDropdown;