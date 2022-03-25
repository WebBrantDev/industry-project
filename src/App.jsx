import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import PageHeader from "./Components/PageHeader/PageHeader";
import Community from "./Pages/Community/Community";
import Home from "./Pages/Home/Home";
import Peer from "./Pages/Peer/Peer";
import PageFooter from "./Components/PageFooter/PageFooter";

function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <PageHeader />
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/" component={Peer} />
      </Switch>
      <PageFooter />
    </BrowserRouter>
    // </div>
  );
}

export default App;
