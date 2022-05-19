import React from 'react';
import {Link} from 'react-router-dom';
function Menu() {
    return (
        <div className="container">
            <div className="p-1 d-flex bd-highlight  text-black-50 ">
                <div className="flex">
                    <div className="p-1 flex-grow-1 bd-highlight"><h1>Ferramentas</h1></div>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link  text-black-50">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  text-black-50" to="/listar">Listar</Link>
                       </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Menu;