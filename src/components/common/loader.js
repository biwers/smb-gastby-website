import React from 'react'
import loaderStyle from './loader.module.scss'

const style = {
  position: 'relative',
}
export default () => (
  <div style={style}>
    <div className={loaderStyle.loader} />
  </div>
)
