import { navLink } from "./NavLink.js";

const Nav = ({links}) => {
    return (
            <nav>
                <ul>
                {
                    links.map((link, index) => {
                      return (
                          <li key={index}><navLink to={link.url}>{link.text}</navLink></li>
                        )
                 })
                }
                </ul>
            </nav>
    )
}

export default Nav;