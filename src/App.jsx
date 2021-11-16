import { onSnapshot } from '@firebase/firestore';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import UserContext from './context/user/user.context';
import { auth, createUserProfile } from './firebase/firebase.utils';
import Checkout from './pages/checkout/checkout.component';
import Homepage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop-page.component';
import SignInPage from './pages/sign-in/sign-in-page.component';

class App extends React.Component {
    unsubscribeFromAuth = null;
    state = { currentUser: null }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfile(userAuth)
                onSnapshot(userRef, (snap) => {
                    this.setState({ currentUser: { id: snap.id, ...snap.data() } })
                })
            } else this.setState({ currentUser: null })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (<div>
            <Router>
                <UserContext.Provider value={this.state.currentUser} >
                    <Header ></Header>
                    <Switch>
                        <Route exact path="/" component={Homepage}></Route>
                        <Route path="/shop" component={ShopPage}></Route>
                        <Route path="/checkout" component={Checkout}></Route>
                        <Route exact path="/signin" render={() => this.props.currentUser
                            ? <Redirect to='/' />
                            : <SignInPage />} />
                    </Switch>
                </UserContext.Provider>
            </Router>
        </div>);
    }
}

export default App;