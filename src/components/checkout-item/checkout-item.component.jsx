import './checkout-item.styles.scss'

const CheckoutItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <div className="checkout-item">
        <span className="image-container">
            <img src={imageUrl} alt="" />
        </span>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="quantity">{quantity}</span>
        <div className="remove-button">&#10005;</div>
    </div>
)

export default CheckoutItem;