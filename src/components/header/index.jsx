import SiteLogo from '../../images/site-logo.jpg'
import './style.css'
import {NavLink, Link} from 'react-router-dom'

export default () => {
    
    var classes = 'page-header'
    return (
        <section className={classes}>
            <div className="site-logo"><img src="" alt="" /></div>
            <div className="main-menu">
                <ul className="page-menu">
                    <li> <NavLink to="/" activeclassname="active">Home</NavLink></li>
                    <li> <NavLink to="/crea-tu-cv" activeclassname="active">Crea tu CV</NavLink> </li>
                    <li> <NavLink to="/plantillas" activeclassname="active">Encuentra tu plantilla</NavLink> </li>
                    <li> <NavLink to="/descarga" activeclassname="active">Descarga tu CV</NavLink> </li>
                </ul>
            </div>
        </section>
    )

}