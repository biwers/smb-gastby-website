import React from 'react'
import { Link } from 'gatsby'
export default ({ dropdownMenu, onClick }) => {
  return (
    <div className="dropdown-menu">
      {dropdownMenu &&
        dropdownMenu.map(({ to, title }) => (
          <Link
            to={to}
            key={title}
            onClick={() => document.body.classList.toggle('mobile-menu--open')}
          >
            {title}
          </Link>
        ))}
    </div>
  )
}
