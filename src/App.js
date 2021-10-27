import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop-page.component'
import Header from './components/header/header.component';

const App = () => <div>
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
        </Switch>
    </Router>
</div>

export default App;