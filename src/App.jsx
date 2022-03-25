import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import PageHeader from "./Components/PageHeader/PageHeader";
import Community from "./Pages/Community/Community";
import PageFooter from "./Components/PageFooter/PageFooter";

function App() {
  return (
    <div className="App">
      <PageHeader />

      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={Community} />
        </Switch>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
