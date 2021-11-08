import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import './sign-in-page.styles.scss'

class SignInPage extends React.Component {
    render() {
        return (
            <div className="container">
                <SignIn></SignIn>
                <SignUp></SignUp>
            </div>
        );
    }
}

export default SignInPage;