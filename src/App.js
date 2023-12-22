import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/productList">
          <ProductListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
