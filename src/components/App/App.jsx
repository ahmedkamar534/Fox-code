import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import Actors from "../TR-Actors/Actors";
import Movies from "../TR-Movies/Movies";
import Tvshows from "../TR-Tvshows/Tvshows";
import Trending from "../Trending/Trending";

export default function App() {
  let history = useHistory();

  const [loginUser, setloginUser] = useState("");
  function getUserInfo() {
    let tok = localStorage.getItem("user");
    setloginUser(tok);
  }
  useEffect(() => {
    if (localStorage.user) {
      getUserInfo();
    }
  }, []);

  function logOut() {
    localStorage.removeItem("user");
    setloginUser("");
    history.push("/login");
  }

  return (
    <div className="App">
      <Navbar loginUser={loginUser} logOut={logOut} />
      <div className="container">
        <Switch>
          <Route path="/Trending" render={() => <Trending />} />
          <Route path="/movies" render={() => <Movies />} />
          <Route path="/tv" render={() => <Tvshows />} />
          <Route path="/actors" render={() => <Actors />} />
          <Route
            path="/login"
            render={(props) => <Login {...props} getUserInfo={getUserInfo} />}
          />
          <Route path="/register" render={(props) => <Register {...props} />} />
          <Redirect from="/" exact to="/Trending" />
        </Switch>
      </div>
    </div>
  );
}
