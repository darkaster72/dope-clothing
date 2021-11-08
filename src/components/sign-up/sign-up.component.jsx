import React from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, createUserProfile } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'

class SignUp extends React.Component {
    state = { displayName: '', email: '', password: '', confirmPassword: '' };

    handleSubmit = async (event) => {
        event.preventDefault();

        if (this.state.password !== this.state.confirmPassword) {
            alert("Passwords don't match")
            return
        }
        try {
            const { email, password, displayName } = this.state
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await createUserProfile(user, { displayName })
            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' })
        } catch (e) {
            console.log(e)
        }
    }

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">Don't have an account</h2>
                <span>Create one with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        label="Name"
                        handleChange={this.handleChange}
                        value={this.state.displayName}
                        required />
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
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        value={this.state.confirmPassword}
                        required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }

    signIn = (event) => event.preventDefault()
}

export default SignUp;