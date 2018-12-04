import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import DropdownMenu from './DropDown'

class NavItem extends PureComponent {
  classNames() {
    const { hasDropdown } = this.props
    let classNames = hasDropdown
      ? ` main-navbar__nav-item has-dropdown`
      : 'main-navbar__nav-item'
    return classNames
  }

  render() {
    const { hasDropdown, dropdownMenu, showDropMenu, title, to } = this.props
    const svgClassName = showDropMenu
      ? 'svg-dropdown rotate-180'
      : 'svg-dropdown'
    if (hasDropdown) {
      return (
        <div
          className={this.classNames()}
          onClick={e => this.props.onClickHandler(e)}
        >
          <a href="#">
            {title}{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={svgClassName}
              viewBox="0 0 512 512"
            >
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
            </svg>
          </a>
          {showDropMenu && <DropdownMenu dropdownMenu={dropdownMenu} />}
        </div>
      )
    }
    return (
      <Link
        to={to}
        activeClassName="active"
        className={this.classNames()}
        onClick={() => document.body.classList.toggle('mobile-menu--open')}
      >
        {title}
      </Link>
    )
  }
}

export default NavItem
