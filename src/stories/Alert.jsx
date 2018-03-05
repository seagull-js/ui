// load external libraries
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

// load components to test
import { Alert } from '../components'

// prepare stories
const stories = storiesOf('Alert', module).addDecorator(withKnobs)

stories.add('basic usage', () => {
  const title = text('title', 'This is an alert!')
  const txt = text(
    'fillText',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sagittis
     orci, fermentum vestibulum leo.`
  )
  return <Alert title="abc">abc</Alert>
})
