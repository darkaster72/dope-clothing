import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Homepage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop-page.component'
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { onSnapshot } from '@firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

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
                    <Route exact path="/signin" render={() => this.props.currentUser
                        ? <Redirect to='/' />
                        : <SignInPage />} />
                </Switch>
            </Router>
        </div>);
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);