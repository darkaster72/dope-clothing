import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop-page.component'
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    state = { currentUser: null }
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
            console.log(user)
        })
    }

    componentWillUnmount() {
        // this.unsubscribeFromAuth();
    }

    render() {
        return (<div>
            <Router>
                <Header currentUser={this.state.currentUser} ></Header>
                <Switch>
                    <Route exact path="/" component={Homepage}></Route>
                    <Route path="/shop" component={ShopPage}></Route>
                    <Route path="/signin" component={SignInPage}></Route>
                </Switch>
            </Router>
        </div>);
    }
}

export default App;