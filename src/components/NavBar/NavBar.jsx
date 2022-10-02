import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg celeste">
            <div className="container-fluid">
                    <Link className="navbar-brand blanco" to='/'>TecnoConectados</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"> 
                            <Link className="nav-link blanco" aria-current="page" to='category/1'>categoria 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link blanco" to='category/2'>categoria 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link blanco" to='category/3'>categoria 3</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link blanco" to='category/4'>categoria 4</Link>
                        </li>
                    </ul>
                </div>
                <Link className="blanco" to='/cart'> <CartWidget /> </Link>
            </div>
        </nav>
        
        </>
        

    );
  }
  

export default Navbar;

