// load external libraries
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

// load components to test
import { Block, H1 } from '../components'

// prepare stories
const stories = storiesOf('H1', module).addDecorator(withKnobs)

stories.add('basic usage', () => {
  const label = text('Label', 'Hello World')
  return (
    <Block>
      <H1>{label}</H1>
    </Block>
  )
})

stories.add('part of text article', () => {
  const label = text('Label', 'Hello World')
  const txt = text('fillText', 'some filler text here')
  return (
    <Block>
      <H1>{label}</H1>
      <p>{txt}</p>
    </Block>
  )
})

stories.add('inversed style', () => {
  const label = text('Label', 'Hello World')
  const txt = text('fillText', 'some filler text here')
  return (
    <Block inverse>
      <H1 inverse>{label}</H1>
      <p>{txt}</p>
    </Block>
  )
})
