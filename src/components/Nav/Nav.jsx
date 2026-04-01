import { Link } from "react-router"

const Nav = ({ linksArray }) => {
    return (
        <div className="navBar">
            <ul>
                {
                    linksArray.map(link => {
                        <li>
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Nav