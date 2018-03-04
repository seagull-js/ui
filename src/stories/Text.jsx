// load external libraries
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

// load components to test
import { Block, Text } from '../components'

// prepare stories
const stories = storiesOf('Text', module).addDecorator(withKnobs)

stories.add('basic usage', () => {
  const txt = text(
    'fillText',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sagittis
     orci, fermentum vestibulum leo. Nulla ut lectus ut quam volutpat laoreet.
     Nulla hendrerit hendrerit libero, id iaculis dui eleifend sed. Nulla
     facilisi. Integer est arcu, molestie sed dui ac, lacinia pulvinar nulla.
     Donec laoreet porta odio. Aliquam dapibus nunc ut dignissim imperdiet.
     Donec quam lacus, vehicula aliquam orci ac, malesuada imperdiet eros.
     Mauris id nisi quis est varius dapibus. Etiam iaculis neque vitae tellus
     tempor, vulputate vehicula elit pulvinar. `
  )
  return (
    <Block>
      <Text>{txt}</Text>
    </Block>
  )
})

stories.add('inverse rendering', () => {
  const txt = text(
    'fillText',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sagittis
     orci, fermentum vestibulum leo. Nulla ut lectus ut quam volutpat laoreet.
     Nulla hendrerit hendrerit libero, id iaculis dui eleifend sed. Nulla
     facilisi. Integer est arcu, molestie sed dui ac, lacinia pulvinar nulla.
     Donec laoreet porta odio. Aliquam dapibus nunc ut dignissim imperdiet.
     Donec quam lacus, vehicula aliquam orci ac, malesuada imperdiet eros.
     Mauris id nisi quis est varius dapibus. Etiam iaculis neque vitae tellus
     tempor, vulputate vehicula elit pulvinar. `
  )
  return (
    <Block inverse>
      <Text inverse>{txt}</Text>
    </Block>
  )
})
