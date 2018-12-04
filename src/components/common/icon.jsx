import React from 'react'
import './icon.scss'

const Icon = ({ size, children }) => (
  <span role="presentation" className={`icon icon-${size}`}>
    {children}
  </span>
)

export default Icon
