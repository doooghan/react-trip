import React, { useEffect } from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { SignInPage } from "./pages/signIn/SignInPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { DetailPage } from "./pages/detail/DetailPage";
import ShoppingMain from "./pages/shopping/main";
import { SearchPage } from "@/pages";
import { Redirect } from "react-router-dom";
import { useSelector, useAppDispatch } from "@/redux/hooks";
import { ShoppingCart, PlaceOrderPage } from "@/pages";
import { useDispatch } from "react-redux";
import { getShoppingCart } from "./redux/shoppingCart/slice";

const PrivateRoute = ({ component, isAuthenticatd, ...rest }) => {
  const routeComponent = (props) => {
    return isAuthenticatd ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/signIn" }} />
    );
  };
  return <Route render={routeComponent} {...rest}></Route>;
};

const App: React.FC = () => {
  const jwt = useSelector((s) => s.user.token);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt));
    }
  }, [jwt]);

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route path="/search/:keywords" component={SearchPage} />
          <Route path="/shopping" component={ShoppingMain} />
          <PrivateRoute
            isAuthenticatd={jwt !== null}
            path="/shoppingCart"
            component={ShoppingCart}
          />
          <PrivateRoute
            isAuthenticatd={jwt !== null}
            path="/placeOrder"
            component={PlaceOrderPage}
          />
          <Route render={() => <h1>404 not found!</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
