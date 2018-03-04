// load external libraries
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

// load components to test
import { Block, H1, H2, H3, Text } from '../components'

// prepare stories
const stories = storiesOf('Headlines', module).addDecorator(withKnobs)

stories.add('basic usage', () => {
  const label = text('Label', 'Hello World')
  return (
    <Block>
      <H1>{label}</H1>
      <H2>{label}</H2>
      <H3>{label}</H3>
    </Block>
  )
})

stories.add('part of text article', () => {
  const label = text('Label', 'Hello World')
  const txt = text('fillText', 'some filler text here')
  return (
    <Block>
      <H1>{label}</H1>
      <H2>{label}</H2>
      <H3>{label}</H3>
      <Text>{txt}</Text>
    </Block>
  )
})

stories.add('inversed style', () => {
  const label = text('Label', 'Hello World')
  const txt = text('fillText', 'some filler text here')
  return (
    <Block inverse>
      <H1 inverse>{label}</H1>
      <H2 inverse>{label}</H2>
      <H3 inverse>{label}</H3>
      <Text>{txt}</Text>
    </Block>
  )
})
