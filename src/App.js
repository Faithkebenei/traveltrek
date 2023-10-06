import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import pageUrl from "./routes/pageUrl";
import {Home} from "./pages/page";

const RouteManager = () => {
  return (
    <Router>
      <Switch>
        <Route path={pageUrl.HOMEPAGE} component={Home} />
      </Switch>
    </Router>
  )
}

const App = () => {
  return (
    <>
      <RouteManager />
    </>
  )
}

export default App;

