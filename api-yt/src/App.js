import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HEARDPHONES_URL } from "./constants/routes";
import HeardphonesProduct from "./pages/HeardphonesProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={HEARDPHONES_URL}>
          <HeardphonesProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
