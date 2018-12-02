import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
class NavItem extends PureComponent {
  classNames() {
    const { hasDropdown, isActive } = this.props
    let classNames = isActive ? `nav-item active` : 'nav-item'
    classNames += hasDropdown ? ` has-dropdown` : ''
    return classNames
  }
  handleOnClick(e) {
    if (this.props.hasDropdown) e.preventDefault()
    this.props.onClick(this.props.title)
  }
  render() {
    const { hasDropdown, dropDown, isDiv, title, to } = this.props

    if (isDiv) {
      return (
        <div
          className={this.classNames()}
          onClick={this.handleOnClick.bind(this)}
        >
          <Link to={to}>{title}</Link>
          {hasDropdown && dropDown}
        </div>
      )
    }
    return (
      <li className={this.classNames()} onClick={this.handleOnClick.bind(this)}>
        <Link to={to}>{title}</Link>
        {hasDropdown && dropDown}
      </li>
    )
  }
}

export default NavItem
