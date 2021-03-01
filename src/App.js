import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Login from "./pages/Login/Login"
import Queue from "./pages/Queue/Queue"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/queue" exact>
          <Queue />
        </Route>
      </Switch>
    </>

  );
}

export default App;
