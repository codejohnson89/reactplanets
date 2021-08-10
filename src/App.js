import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navigation';
import Earth from './pages/Earth';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Neptune from './pages/Neptune';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';

function App() {
  return (
    <Router>
      <header className="App-header">
        <Navbar />
      </header>
      <Switch>
        <Route path='/' exact component={Earth} />
        <Route path='/mercury' component={Mercury} />
        <Route path='/venus' component={Venus} />
        <Route path='/earth' component={Earth} />
        <Route path='/mars' component={Mars} />
        <Route path='/jupiter' component={Jupiter} />
        <Route path='/neptune' component={Neptune} />
        <Route path='/saturn' component={Saturn} />
        <Route path='/uranus' component={Uranus} />
      </Switch>
    </Router>
  );
}

export default App;
