import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                <header style={headerStyle}><h1><em>Evidencija zdravstvenih kartona</em></h1>
                    <Link style={linkStyle} to="/" onClick={ () => this.props.setNull() }>LISTA SVIH </Link>|
                    <Link style={linkStyle} to={"/form"} > DODAJ NOVOG</Link>
                </header>
            </div>
        );
    }
}


const headerStyle = {
    background: ' #333',
    color:'#fff',
    textAlign:'center',
    padding: 10,

}
const linkStyle ={
    color: '#fff',
    textDecoration:"none",
    marginBottom:25,
    fontWeight:'bold',
}

export default Header;