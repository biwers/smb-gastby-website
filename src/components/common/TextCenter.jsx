import React from 'react'

export default ({ children }, ...props) => (
  <div style={{ textAlign: 'center' }} {...props}>
    {children}
  </div>
)
