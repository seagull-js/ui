// load external libraries
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

// load components to test
import { Block } from '../components'

// prepare stories
const stories = storiesOf('Block', module).addDecorator(withKnobs)

stories.add('basic usage', () => {
  const label = text('Label', 'Hello World')
  return (
    <div style={{ border: '1px solid red' }}>
      <Block>
        <div style={{ border: '1px solid blue' }}>{label}</div>
      </Block>
    </div>
  )
})

stories.add('with background color', () => {
  const label = text('Label', 'Hello World')
  return (
    <div style={{ border: '1px solid red' }}>
      <Block inverse>
        <div style={{ border: '1px solid blue' }}>
          <p>{label}</p>
          <p>{label}</p>
          <p>{label}</p>
        </div>
      </Block>
    </div>
  )
})
