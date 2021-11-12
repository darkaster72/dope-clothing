import { connect } from 'react-redux';
import { addItem, clearItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss'

const CheckoutItem = ({ item, addItem, clearItem, removeItem }) => {
    const { imageUrl, name, price, quantity } = item;
    return (
        <div className="checkout-item">
            <span className="image-container">
                <img src={imageUrl} alt="" />
            </span>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <div className="remove-button" onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item)),
    clearItem: (item) => dispatch(clearItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);