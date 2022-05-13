import React from "react";
import "./App.css";
import Header from "./Components/Header";
import SideBarNav from "./Components/SideBarNav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {/* <h1>This is SLACK REACT CLONE</h1> */}
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <SideBarNav />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>WELCOME</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
