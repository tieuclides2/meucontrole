import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.nabar}>
            <NavLink to="/" className={styles.brand}>Control<span>Fin</span></NavLink>

            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Lançamentos</NavLink>
                    <NavLink to="/contas" className={({ isActive }) => (isActive ? styles.active : '')}>Contas</NavLink>                    
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
