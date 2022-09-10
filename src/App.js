
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer item="primer itemlist" />

    </div>
  );
}

export default App;
