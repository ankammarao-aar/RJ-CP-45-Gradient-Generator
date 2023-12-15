import {Component} from 'react'
import {
  MainContainer,
  Form,
  Heading,
  Paragraph,
  UnOrderList,
  InputContainer,
  InputCard,
  Text,
  Input,
  Button,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    leftColor: '#8ae323',
    rightColor: '#014f7b',
    isValue: gradientDirectionsList[0].value,
    gradient: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {leftColor, rightColor, isValue} = this.state
    this.setState({gradient: `to ${isValue}, ${leftColor}, ${rightColor}`})
  }

  gradient = value => {
    this.setState({isValue: value})
  }

  onChangeLeft = event => {
    this.setState({leftColor: event.target.value})
  }

  onChangeRight = event => {
    this.setState({rightColor: event.target.value})
  }

  render() {
    const {leftColor, rightColor, isValue, gradient} = this.state

    return (
      <MainContainer data-testid="gradientGenerator" gradient={gradient}>
        <Heading>Generate a CSS Color Gradient</Heading>

        <Form onSubmit={this.onSubmitForm}>
          <Paragraph>Choose Direction</Paragraph>

          <UnOrderList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                directions={each}
                isActive={isValue === each.value}
                gradient={this.gradient}
              />
            ))}
          </UnOrderList>

          <Paragraph>Pick the Colors</Paragraph>

          <InputContainer>
            <InputCard>
              <Text>{leftColor}</Text>
              <Input
                type="color"
                value={leftColor}
                onChange={this.onChangeLeft}
              />
            </InputCard>
            <InputCard>
              <Text>{rightColor}</Text>
              <Input
                type="color"
                value={rightColor}
                onChange={this.onChangeRight}
              />
            </InputCard>
          </InputContainer>
          <Button type="submit">Generate</Button>
        </Form>
      </MainContainer>
    )
  }
}

export default GradientGenerator
