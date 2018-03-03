import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import { H1 } from '../components/H1'

// https://github.com/storybooks/storybook/tree/master/addons/knobs

storiesOf('Welcome', module)
  .addDecorator(withKnobs)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button onClick={action('clicked')}>{text('Label', 'Hello World')}</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}> 😀😎👍💯 </Button>
  ))

storiesOf('H1', module)
  .addDecorator(withKnobs)
  .add('basic usage', () => <H1> Headline! </H1>)
