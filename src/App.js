import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header/Header'
import Footer from './footer/footer'
import Navbar2 from './Nav_bar/Nav_bar'
import Products from "./products/products";
import ProductDetails from "./products/productDetails"
import AddUser from "./user/user"
import Login from "./user/Login"

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar2/>
      {/* <Header/> */}
        <Switch>

          <Route path="/" exact component={Products} />
          <Route path="/login" exact component={Login} />
          <Route path="/regester" exact component={AddUser} />
          <Route path="/details/:id" exact component={ProductDetails} />

        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
