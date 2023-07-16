import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/courier-tracking-test" />}
        />
        <Route exact path="/courier-tracking-test" render={() => <Home />} />
        <Route
          path="*"
          render={() => <Redirect to="/courier-tracking-test" />}
        />
      </Switch>
    </Router>
  );
}
