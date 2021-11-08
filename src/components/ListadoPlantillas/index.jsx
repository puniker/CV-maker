import { NavLink } from "react-router-dom"

export default () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/plantilla/1">Plantilla uno</NavLink>
                </li>
                <li>
                    <NavLink to="/plantilla/2">Plantilla dos</NavLink>
                </li>
            </ul>
        </>
    )
}