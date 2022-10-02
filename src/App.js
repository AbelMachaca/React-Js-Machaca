import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/CartContext/CartContext';

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element= { <ItemListContainer item={"primer itemlist"}/>}/> 
          <Route path='/category/:category' element= { <ItemListContainer item={"primer itemlist"}/>}/> 
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
