//The root file
import "./App.css";
import Producttable from "./components/Producttable";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Editproduct from "./components/Editproduct";
import ProductContext, { ProductProvider } from "./components/ProductContext";
import Createproduct from "./components/Createproduct";

function App() {
  return (
    <Router>
      <Switch>
        <ProductProvider>
          <Route path="/" exact={true}>
            <Navbar />
            <Producttable />
          </Route>
          <Route path="/edit/:id" exact={true} component={Editproduct} />
          <Route path="/create" exact={true} component={Createproduct} />
        </ProductProvider>
      </Switch>
    </Router>
  );
}

export default App;
