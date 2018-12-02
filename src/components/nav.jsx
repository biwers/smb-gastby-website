import React, { Component } from 'react'
import NavItem from './nav/NavItem'

const MenuItems = [
  {
    title: 'Home',
    to: '/',
    isActive: true,
    hasDropdown: false,
  },
  {
    title: 'Contact',
    to: '/contact',
    isActive: false,
    hasDropdown: false,
  },
  {
    title: 'Services',
    to: '/services',
    isActive: false,
    hasDropdown: true,
  },
  {
    title: 'About',
    to: '/about',
    isActive: false,
    hasDropdown: false,
  },
]
class Navbar extends Component {
  state = {
    menuItems: [],
  }
  onClick(title) {
    const menuItems = this.state.menuItems
    const newMenuItems = menuItems.map(item => {
      item.isActive = false
      if (item.title === title) item.isActive = true
      return item
    })
    this.setState({
      menuItems: newMenuItems,
    })
  }
  componentDidMount() {
    this.setState({
      menuItems: MenuItems,
    })
  }
  render() {
    const { menuItems } = this.state
    return (
      <nav role="navigation">
        <ul>
          {menuItems &&
            menuItems.map(menuitem => (
              <NavItem
                to={menuitem.to}
                key={menuitem.title}
                title={menuitem.title}
                isActive={menuitem.isActive}
                onClick={this.onClick.bind(this)}
              />
            ))}
        </ul>
      </nav>
    )
  }
}

export default Navbar
