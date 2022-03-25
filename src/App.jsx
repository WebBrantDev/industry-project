import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import PageHeader from "./Components/PageHeader/PageHeader";
import Community from "./Pages/Community/Community";
import Home from "./Pages/Home/Home";
import PageFooter from "./Components/PageFooter/PageFooter";

function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <PageHeader />

      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <PageFooter />
    </BrowserRouter>
    // </div>
  );
}

export default App;
