// load external libraries
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

// load components to test
import { H1 } from '../components/H1'

// prepare stories
const stories = storiesOf('H1', module).addDecorator(withKnobs)

stories.add('basic usage', () => {
  const label = text('Label', 'Hello World')
  return <H1>{label}</H1>
})
