import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg celeste">
            <div className="container-fluid">
                <a className="navbar-brand blanco" href="#">TecnoConectados</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link blanco" aria-current="page" href="#">categoria 1</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link blanco" href="#">categoria 2</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link blanco" href="#">categoria 3</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link blanco">categoria 4</a>
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

