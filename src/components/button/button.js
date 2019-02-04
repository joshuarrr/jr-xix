import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './button.style'
//

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>
    {children}
  </StyledButton>
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
