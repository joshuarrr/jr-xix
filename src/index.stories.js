import React from 'react';
import { storiesOf } from '@storybook/react';

// styles
import './app.css'

storiesOf('Welcome', module)
  .add('Introduction', () => [
      <h1>Hi.</h1>,
      <p>This is the introduction.</p>
    ]);
