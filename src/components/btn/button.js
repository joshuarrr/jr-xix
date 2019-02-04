import React from 'react'
import PropTypes from 'prop-types'
//

// styles
import './button.css'

const Button = ({ children, ...props }) => (
  <button {...props} className={`button ${props.buttonType}`}>
    {children}
  </button>
);

Button.displayName = 'Button'

Button.propTypes = {
  buttonType: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  buttonType: 'default',
  disabled: false,
}

export default Button;
