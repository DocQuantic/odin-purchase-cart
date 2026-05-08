import { Link } from "react-router"
import * as styles from "./Nav.module.css";

const Nav = ({ linksArray }) => {
    return (
        <nav className={styles.nav}>
            <ul>
                {
                    linksArray.map(link => {
                        return (
                            <li key={link.path}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav