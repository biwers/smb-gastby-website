import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
class NavItem extends PureComponent {
  classNames() {
    const { hasDropdown, isActive } = this.props
    let classNames = isActive ? `nav-item` : 'nav-item'
    classNames += hasDropdown ? ` has-dropdown` : ''
    return classNames
  }

  render() {
    const { hasDropdown, dropDown, isDiv, title, to } = this.props

    if (isDiv) {
      return (
        <div className={this.classNames()}>
          <Link to={to} activeClassName="active">
            {title}
          </Link>
          {hasDropdown && dropDown}
        </div>
      )
    }
    return (
      <li className={this.classNames()}>
        <Link to={to} activeClassName="active">
          {title}
        </Link>
        {hasDropdown && dropDown}
      </li>
    )
  }
}

export default NavItem
