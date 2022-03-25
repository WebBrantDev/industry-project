import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import PageHeader from "./Components/PageHeader/PageHeader";
// import Community from "./Pages/Community/Community";
import Home from "./Pages/Home/Home";
import Support from "./Pages/Support/Support";
import PeerProfile from "./Pages/PeerProfile/PeerProfile";

import PageFooter from "./Components/PageFooter/PageFooter";
import Peer from "./Pages/Peer/Peer";

function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <PageHeader />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact component={Peer} />
        {/* <Route path="/support" component={Support} /> */}
        <Route path={"/peer/:id"} component={PeerProfile} />
      </Switch>
      <PageFooter />
    </BrowserRouter>
    // </div>
  );
}

export default App;
