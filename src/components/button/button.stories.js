import React from 'react'

import  { storiesOf } from '@storybook/react'
import { action } from  '@storybook/addon-actions'
import { withInfo } from  '@storybook/addon-info'

import Button from './button'
//

const buttonTypesInfo = `The following button types are available:
 \`default \`, \`info\`, \` primary \`, and \`danger\`.`

const listStyle = {
  listStyleType: 'none',
}
const listItemStyle = {
  margin: '0 0 1rem'
}

const buttonTypes = () => [
  <h1>Styled-components Buttons</h1>,
  <ul style={listStyle}>
    <li style={listItemStyle}>
      <Button onClick={action('Default button clicked.')}>Default</Button>
    </li>
    <li style={listItemStyle}>
      <Button buttonType="info" onClick={action('Info button clicked.')}>Info</Button>
    </li>
    <li style={listItemStyle}>
      <Button buttonType="primary" onClick={action('Primary button clicked.')}>Primary</Button>
    </li>
    <li style={listItemStyle}>
      <Button buttonType="danger" onClick={action('Danger button clicked.')}>Danger</Button>
    </li>
    <li style={listItemStyle}>
      <Button buttonType="danger" disabled>Danger</Button>
    </li>
  </ul>
]
storiesOf('Forms', module).add('Buttons - Styled Components', withInfo(buttonTypesInfo)(buttonTypes))