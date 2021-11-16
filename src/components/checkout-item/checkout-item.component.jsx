import { useContext } from 'react';
import { CartContext } from '../../provider/cart/cart.provider';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
    const { addItem, clearItem, removeItem } = useContext(CartContext)
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

export default CheckoutItem;