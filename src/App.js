
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <div>
      <Router>

        <NavBar/>
        <Routes>
          <Route exact path='/' element= { <ItemListContainer item={"primer itemlist"}/>}/> 
          <Route path='category/:categoria' element= { <ItemListContainer item={"primer itemlist"}/>}/> 
          <Route path='item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
