import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='https://chris-larham-1983.github.io/debugging-test/pet-details-not-found'>
          <PetDetailsNotFound/>
        </Route>
        <Route path='https://chris-larham-1983.github.io/debugging-test/search'>
          <SearchPage/>
        </Route>
        <Route path='https://chris-larham-1983.github.io/debugging-test/:type/:id'>
          <PetDetailsPage/>
        </Route>
        <Route path='https://chris-larham-1983.github.io/debugging-test/:type?'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
