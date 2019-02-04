import { addDecorator, configure } from '@storybook/react'
import { configureViewport } from '@storybook/addon-viewport';

// Theme
import { withOptions } from '@storybook/addon-options'

addDecorator(
  withOptions({
    name: 'jr-xix components',
    mainBorderColor: '#cc0033',
  })
)


// import all files ending in *.stories.js in components dir
const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  require('../src/index.stories.js')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

