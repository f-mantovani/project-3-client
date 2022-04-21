import React from 'react'
import { Body, ButtonLabel, H1, H2, H4, Label, Overline, Subtitle2 } from '../../design.system/text.styling/styles'

const TextStyling = () => {
  return (
    <>
      <p>space Start</p>
      <p>space Start</p>
      <p>space Start</p>
      <p>space Start</p>
      <H1>This is H1</H1>
      <H2>This is H2</H2>
      <H4>This is H4</H4>
      <Subtitle2>This is subtitle 2</Subtitle2>
      <Subtitle2 done>This is subtitle 2</Subtitle2>
      <Body>This is body</Body>
      <Body done>This is body done</Body>
      <Label>This is label</Label>
      <Label small>This is label small</Label>
      <ButtonLabel>This is button-label</ButtonLabel>
      <Overline>This is overline</Overline>
      <p>space End</p>
      <p>space End</p>
      <p>space End</p>
      <p>space End</p>
    </>
    
  )
}

export default TextStyling