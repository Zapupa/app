import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, NotFound } from "./pages/index";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home cityName="Челябинск" regionName="Челябинская область" />
        </Route>
        <Route exact path="/404">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
