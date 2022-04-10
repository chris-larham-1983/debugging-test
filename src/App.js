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
        <Route path='/pet-details-not-found'>
          <PetDetailsNotFound/>
        </Route>
        <Route path='/search'>
          <SearchPage/>
        </Route>
        <Route path='/:type/:id'>
          <PetDetailsPage/>
        </Route>
        <Route path='/cat'>
          <HomePage type="cat" />
        </Route>
        <Route path='/dog'>
          <HomePage type="dog" />
        </Route>
        <Route path='/'>
          <HomePage type="" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
