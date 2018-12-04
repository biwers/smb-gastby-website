import React from 'react'

export default ({ src, alt, size }) => (
  <img src={src} alt={alt} style={{ width: size, margin: 0 }} />
)
