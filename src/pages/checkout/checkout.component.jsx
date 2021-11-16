import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'
import { CartContext } from '../../provider/cart/cart.provider'
import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            <div className="cart-items">
                {cartItems.map(item => <CheckoutItem key={item.id} item={item} />)}
            </div>

            <div className="total total-row">
                <span>Total: </span>
                <span>${cartTotal}</span>
            </div>

            <div className="test-warning">
                *Please use the following card details*
                <br />
                Card No: 4242424242424242 Exp: Any Future date CVV: any 3 digits
            </div>
            <StripeButton price={cartTotal} />
        </div>
    )
}

export default Checkout;