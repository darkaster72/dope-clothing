import { onSnapshot } from '@firebase/firestore';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/header.component';
import { auth, createUserProfile } from './firebase/firebase.utils';
import Checkout from './pages/checkout/checkout.component';
import Homepage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfile(userAuth)
                onSnapshot(userRef, (snap) => {
                    setCurrentUser({ id: snap.id, ...snap.data() })
                })
            } else setCurrentUser(null)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (<div>
            <Router>
                <Header ></Header>
                <Switch>
                    <Route exact path="/" component={Homepage}></Route>
                    <Route path="/shop" component={ShopPage}></Route>
                    <Route path="/checkout" component={Checkout}></Route>
                    <Route exact path="/signin" render={() => this.props.currentUser
                        ? <Redirect to='/' />
                        : <SignInPage />} />
                </Switch>
            </Router>
        </div>);
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);