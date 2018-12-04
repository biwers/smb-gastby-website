import React from 'react'

const HumbergerMenu = ({ showMobileMenu, onClickHandler, id }) => (
  <div
    className="humberger-menu"
    role="button"
    aria-label="Toggle menu"
    onClick={e => onClickHandler(e)}
    aria-controls={id}
    aria-expanded="false"
    tabIndex="0"
  >
    <span />
    <span />
    <span />
  </div>
)

export default HumbergerMenu
