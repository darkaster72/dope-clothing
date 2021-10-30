import React from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'

class SignIn extends React.Component {
    state = { email: '', password: '' };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

    render() {
        return (
            <div className="sign-in">
                <h1>Already have an account</h1>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required />
                    <div className="buttons">
                        <CustomButton type="submit" onClick={this.signIn}>Sign In</CustomButton>
                        <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }

    signIn = (event) => event.preventDefault()
}

export default SignIn;