// load external libraries
import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

// load components to test
import { Button, Block } from '../components'

// prepare stories
const stories = storiesOf('Button', module).addDecorator(withKnobs)

stories.add('basic usage', () => {
  const title = text('title', 'My Button')
  return (
    <Block>
      <Button>{title}</Button>
    </Block>
  )
})

stories.add('inverse rendering', () => {
  const title = text('title', 'My Button')
  return (
    <Block inverse>
      <Button inverse>{title}</Button>
    </Block>
  )
})
