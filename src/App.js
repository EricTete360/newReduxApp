import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import SignUpForm from './components/SignUp';
import SignInForm from './components/SignIn';
import Home from './components/Home';
import Account from './Layout/Account';

function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
           {/* <Route path="/" exact component={SignUpForm} />
           <Route path="/login" exact component={SignInForm} /> */}
           <Route path="/home" exact component={Home} />
           <Route path="/account" exact component={Account} />

        </Switch>  
      </Router>
    </div>
  );
}

export default App;
