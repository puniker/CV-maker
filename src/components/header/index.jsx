import './style.css'
import {NavLink, Link} from 'react-router-dom'
import {Navbar, Container} from 'react-bootstrap';
import {Redirect} from 'react-router'
export default () => {
    
    const log_out = () => {
        localStorage.removeItem('session')
        location.reload()
    }

    var classes = 'page-header'
    return (
        <Navbar bg="dark" variant="dark" expand="md" className={classes}>
            <Container>
                <Navbar.Brand href="/">Maker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="main-menu">
                        <ul className="page-menu">
                            <li> <NavLink to="/crea-tu-cv" activeclassname="active">Crea tu CV</NavLink> </li>
                            <li> <NavLink to="/plantillas" activeclassname="active">Encuentra tu plantilla</NavLink> </li>
                            <li> <NavLink to="/descarga" activeclassname="active">Descarga tu CV</NavLink> </li>
                        </ul>
                    </div>
                </Navbar.Collapse>
                <Navbar.Text>
                    <button className="btn btn-warning" onClick={log_out}>Cerrar sesión</button>
                </Navbar.Text>
            </Container>
        </Navbar>
    )

}