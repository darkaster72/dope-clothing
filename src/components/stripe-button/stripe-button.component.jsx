import StripeCheckoutButton from 'react-stripe-checkout'
import React from 'react'

class StripeButton extends React.Component {
    onToken = (token) => {
        console.log(token)
        alert('Payment successful')
    }
    render() {
        const priceInCents = this.props.price * 100;
        const pkey = 'pk_test_51Jv5bRSCDZBJymZg6GR0ulpkqT4c6MwNDm0iXE2R0KW6EaSBHr5wJgOTGberbbta5aT0v8PuprxKXg3M6pxprPN000Yv7GOJBt';
        return (<StripeCheckoutButton label="Pay Now" amount={priceInCents} name="Dope Clothing Ltd." description={`Your total is $${this.props.price}`} stripeKey={pkey} token={this.onToken} shippingAddress billingAddress />);
    }
}

export default StripeButton