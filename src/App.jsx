import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/header.component';
import Checkout from './pages/checkout/checkout.component';
import Homepage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (<div>
        <Router>
            <Header ></Header>
            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/shop" component={ShopPage}></Route>
                <Route path="/checkout" component={Checkout}></Route>
                <Route exact path="/signin" render={() => currentUser
                    ? <Redirect to='/' />
                    : <SignInPage />} />
            </Switch>
        </Router>
    </div>);
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: user => dispatch(checkUserSession(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);