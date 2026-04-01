import { Link } from "react-router"

const Nav = ({ linksArray }) => {
    return (
        <nav>
            <ul>
                {
                    linksArray.map(link => {
                        return (
                            <li key={link.path}>
                                <a href={link.path}>{link.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav