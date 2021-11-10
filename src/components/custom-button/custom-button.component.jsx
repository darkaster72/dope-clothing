import './custom-button.styles.scss'

export const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) =>
    <button
        {...otherProps}
        className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn && 'google-sign-in'} custom-button`}
    >
        {children}
    </button>
