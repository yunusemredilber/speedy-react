import { FunctionComponent, useState, memo } from "react"
import { Button } from "../../components/button"
import { Circle } from "../common/circle"

export const CounterAndCircleText = `
const MemoizedCircle = React.memo(Circle)

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        Increase {counter}
      </Button>
      <Circle text="hi" />
      <MemoizedCircle text="hi" />
    </div>
  )
}

export { Counter }
`

const MemoizedCircle = memo(Circle)

const Counter: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        Increase {counter}
      </Button>
      <Circle text="hi" />
      <MemoizedCircle text="hi" />
    </div>
  )
}

export { Counter }
