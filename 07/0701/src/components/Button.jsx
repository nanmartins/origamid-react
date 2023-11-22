import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {

  const handleClick = ({ target }) => {
    target.style.background = Button.defaultProps.background
    target.style.width = `${props.width * 2}px`
    target.style.height = `${props.width}px`
    target.style.margin = '0'
  }

  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width/3}px`,
        backgroundColor: `${props.background}`,
      }}
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  margin: '10px',
  background: '#3df6f6',
}

Button.propTypes = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string
}

export default Button
