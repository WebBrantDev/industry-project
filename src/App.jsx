import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import PageFooter from "./Components/PageFooter/PageFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact />
        </Switch>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
