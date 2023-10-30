import {Link, withRouter} from 'react-router-dom'

import './index.css'

// require('dotenv').config()

const Header = props => {
  const {location} = props

  const {pathname} = location

  const isHome = pathname === '/'
  const isAbout = pathname === '/about'
  const isContact = pathname === '/contact'
  const isProjects = pathname === '/projects'

  return (
    <nav className="header-container">
      <div className="logo-and-title-container">
        <Link className="route-link" to="/">
          <img
            alt="wave"
            className="logo"
            src="https://res.cloudinary.com/reddyimgs/image/upload/v1691405404/new_o6z0aq.jpg"
          />
        </Link>
      </div>

      <ul className="nav-items-list">
        <Link className="route-link" to="/">
          <li className={`link-item ${isHome && 'active-link'}`}>Home</li>
        </Link>
        <Link className="route-link" to="/about">
          <li className={`link-item ${isAbout && 'active-link'}`}>About me</li>
        </Link>
        <Link className="route-link" to="/projects">
          <li className={`link-item ${isProjects && 'active-link'}`}>
            Projects
          </li>
        </Link>

        <Link className="route-link" to="/contact">
          <li className={`link-item ${isContact && 'active-link'}`}>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
