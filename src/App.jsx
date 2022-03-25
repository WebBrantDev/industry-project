import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import PageHeader from "./Components/PageHeader/PageHeader";
// import Community from "./Pages/Community/Community";
import Home from "./Pages/Home/Home";
import Support from "./Pages/Support/Support";

import PageFooter from "./Components/PageFooter/PageFooter";

function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <PageHeader />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/support" component={Support} />
      </Switch>
      <PageFooter />
    </BrowserRouter>
    // </div>
  );
}

export default App;
