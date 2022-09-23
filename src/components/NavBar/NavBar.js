import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

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
                            <Link className="nav-link blanco" aria-current="page" to='category/TelefonoA01Core'>categoria 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link blanco" to='category/TelefonoA11'>categoria 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link blanco" to='category/TelefonoA21s'>categoria 3</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link blanco" to='category/TelefonoA32'>categoria 4</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <CartWidget />
        </>
        

    );
  }
  

export default Navbar;

