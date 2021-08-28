import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import HomeSteps from "./components/Home/HomeSteps";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/steps' component={HomeSteps} />
      </Switch>
    </Router>
  );
}

export default App;
