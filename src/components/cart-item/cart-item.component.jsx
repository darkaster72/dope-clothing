import './cart-item.styles.scss'

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <div className="name">{name}</div>
            <div>{quantity} x ₹{price}</div>
        </div>
    </div>
)