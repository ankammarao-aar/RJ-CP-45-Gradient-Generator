// Write your code here
import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directions, isActive, gradient} = props
  const {value, displayText} = directions

  const onClickBtn = () => {
    gradient(value)
  }

  return (
    <ListItem>
      <Button type="button" dark={isActive} onClick={onClickBtn}>
        {displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirectionItem
