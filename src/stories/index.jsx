import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import { H1 } from '../components/H1'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}> Hello Button </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}> 😀😎👍💯 </Button>
  ))

storiesOf('H1', module).add('basic usage', () => <H1> Headline! </H1>)
