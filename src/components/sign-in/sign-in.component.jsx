import React, { useState } from "react";
import { connect } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";
import { CustomButton } from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss';

const SignIn = ({ startGoogleSignIn, startEmailSignIn }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;
    const handleSubmit = (event) => {
        event.preventDefault();
        setUserCredentials({ email: '', password: '' })
    }
    const handleChange = ({ target: { name, value } }) =>
        setUserCredentials({ ...userCredentials, [name]: value })
    const signIn = async (event) => {
        event.preventDefault();
        startEmailSignIn(email, password)
    }
    return (
        <div className="sign-in">
            <h1>Already have an account</h1>
            <span>Sign in with email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    handleChange={handleChange}
                    value={email}
                    required />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    handleChange={handleChange}
                    value={password}
                    required />
                <div className="buttons">
                    <CustomButton type="submit" onClick={signIn}>Sign In</CustomButton>
                    <CustomButton type="button" onClick={startGoogleSignIn} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    startGoogleSignIn: () => dispatch(googleSignInStart()),
    startEmailSignIn: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);