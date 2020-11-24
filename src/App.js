import React, { useEffect, useContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import ContextData from "./ContextData/ContextData";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Him9NBzwr6fYqs5riNevxmzo1eRMgqAeEFJUDaCfp57ieCSLKI0tRMLWjQJAleLQR3gnlNYQP3alChE2kjEMEH900f8PMuLPL"
);

function App() {
  const { userLogged } = useContext(ContextData);
  useEffect(() => {
    // will only run once when the app component loads.
    auth.onAuthStateChanged(authUser => {
      console.log("the user is >>>>", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in.
        userLogged(authUser);
      } else {
        // the user is logged out.
        userLogged(null);
      }
    });
  }, [userLogged]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
