import {BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/assets/styles/tailwind.css';
//import "@material-tailwind/react/tailwind.css";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route exact path='/Profile' component={Profile}></Route>
      <Redirect from="*" to="/" />
    </Switch>
    </Router>
  );
}

export default App;
