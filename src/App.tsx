import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { SignInPage } from "./pages/signIn/SignInPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { DetailPage } from "./pages/detail/DetailPage";
import ShoppingMain from "./pages/shopping/main";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route path="/shopping" component={ShoppingMain} />
          <Route render={() => <h1>404 not found!</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
