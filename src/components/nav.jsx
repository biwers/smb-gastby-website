import React, { Component } from 'react'
import NavItem from './nav/NavItem'
import Container from './layouts/container'
import smbLogo from '../images/smb-logo.png'
import Logo from './logo'
import './nav.scss'
import HumbergerMenu from './nav/humberger'
import { Link } from 'gatsby'
import Icon from './common/icon'
import PhoneSvgIcon from '../images/phone.svg'
import EmailSvgIcon from '../images/email.svg'
class Navbar extends Component {
  constructor() {
    super()
    this.closeDropdown = this.closeDropdown.bind(this)
  }
  state = {
    showDropMenu: false,
    showMobileMenu: false,
  }
  onClick(e) {
    e.preventDefault()
    this.setState(
      {
        showDropMenu: !this.state.showDropMenu,
      },
      () => {
        document.addEventListener('click', this.closeDropdown)
      }
    )
  }
  closeDropdown() {
    this.setState(
      {
        showDropMenu: false,
      },
      () => {
        document.removeEventListener('click', this.closeDropdown)
      }
    )
  }
  handleHumberger(e) {
    e.preventDefault()
    this.setState({
      showMobileMenu: !this.state.showMobileMenu,
    })
    document.body.classList.toggle('mobile-menu--open')
  }

  render() {
    return (
      <nav role="navigation" className="navbar">
        <Container>
          <div className="main-navbar">
            <Link to="/" className="main-navbar__nav-brand">
              <Logo src={smbLogo} alt="SMB Group Iraq" />
            </Link>

            <div className="main-navbar__left" id="main-nav">
              {this.props.menuItems &&
                this.props.menuItems.map(menuitem => (
                  <NavItem
                    to={menuitem.to}
                    key={menuitem.title}
                    hasDropdown={menuitem.hasDropdown}
                    title={menuitem.title}
                    onClickHandler={this.onClick.bind(this)}
                    dropdownMenu={menuitem.dropdownMenu}
                    showDropMenu={this.state.showDropMenu}
                  />
                ))}
            </div>
            <div className="main-navbar__right">
              <div className="main-navbar__nav-item">
                <a href="mailto:info@smbgroup-iq.com">
                  <Icon size="xs">
                    <img src={EmailSvgIcon} alt="" />
                  </Icon>
                  info@smbgroup-iq.com
                </a>
              </div>
              <div className="main-navbar__nav-item">
                <Icon size="xs">
                  <img src={PhoneSvgIcon} alt="" />
                </Icon>
                +964-751 4104314 (EN)
              </div>
            </div>
            <HumbergerMenu
              showMobileMenu={this.state.showMobileMenu}
              onClickHandler={this.handleHumberger.bind(this)}
              id="main-nav"
            />
          </div>
        </Container>
      </nav>
    )
  }
}

export default Navbar
