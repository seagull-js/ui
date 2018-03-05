// load external libraries
import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

// load components to test
import { Alert, Block } from '../components'

// prepare stories
const stories = storiesOf('Alert', module).addDecorator(withKnobs)

stories.add('basic usage', () => {
  const title = text('title', 'This is an alert!')
  const txt = text(
    'fillText',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sagittis
     orci, fermentum vestibulum leo.`
  )
  return (
    <Fragment>
      <Alert title={title}>{txt}</Alert>
      <Alert title={title}>{txt}</Alert>
    </Fragment>
  )
})

stories.add('within blocks', () => {
  const title = text('title', 'This is an alert!')
  const txt = text(
    'fillText',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sagittis
     orci, fermentum vestibulum leo.`
  )
  return (
    <Fragment>
      <Block>
        <Alert title={title}>{txt}</Alert>
      </Block>
      <Block inverse>
        <Alert title={title}>{txt}</Alert>
      </Block>
    </Fragment>
  )
})
