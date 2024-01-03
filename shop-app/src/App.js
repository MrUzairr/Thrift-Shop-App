import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Admin from './Pages/Admin/index';
import Product from './Pages/product';
import AddCart from './Components/AddCart/addCart';
import Order from './Pages/order';
import Profile from './Pages/Profile';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/all-products' component={Product}/>
        <Route exact path="/order/:productid" component={Order}/>
        <Route exact path='/add-cart' component={AddCart}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;
