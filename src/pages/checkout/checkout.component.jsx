import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import './checkout.styles.scss'

const Checkout = props => (
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
            {props.cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)}
        </div>

        <div className="total total-row">
            <span>Total: </span>
            <span>${props.cartTotal}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartTotal: selectCartTotal,
    cartItems: selectCartItems
})
 
export default connect(mapStateToProps)(Checkout);