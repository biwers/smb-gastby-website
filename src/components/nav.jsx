import React, { Component } from 'react'
import NavItem from './nav/NavItem'

const MenuItems = [
  {
    title: 'Home',
    to: '/',
    hasDropdown: false,
  },
  {
    title: 'Contact',
    to: '/contact',
    hasDropdown: false,
  },
  {
    title: 'Services',
    to: '/services',
    hasDropdown: true,
  },
  {
    title: 'About',
    to: '/about',
    hasDropdown: false,
  },
]
class Navbar extends Component {
  state = {
    menuItems: [],
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
              />
            ))}
        </ul>
      </nav>
    )
  }
}

export default Navbar
