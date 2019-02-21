import React, {Component} from 'react';
import './index.css';

import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className={"header"}>
                <header className={"headerStyle"}><h1><em>Evidencija zdravstvenih kartona</em></h1>
                    <Link to="/"  className={"linkStyle"}>LISTA SVIH </Link>|
                    <Link to={"/Novi"} className={"linkStyle"}> DODAJ NOVOG</Link>
                </header>
            </div>
        );
    }
}


export default Header;