import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './homepage.component';

const Hats = (props) => {
    console.log(props)
    return <h1>Testing</h1>;
}

const App = () => <div>
    <Router>
        <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/hats" component={Hats}></Route>
        </Switch>
    </Router>
</div>

export default App;