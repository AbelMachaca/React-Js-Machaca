
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      {/* <ItemListContainer item="primer itemlist" /> */}
      <ItemCount initial= {1} stock={5} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
