import { FunctionComponent, useState } from "react"
import { Button } from "../../components/button"
import { Circle, CircleText } from "../common/circle"

export const CounterAndCircleText = `
${CircleText}

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        Increase {counter}
      </Button>
      <Circle text="hi" />
    </div>
  )
}

export { Counter }
`

const Counter: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        Increase {counter}
      </Button>
      <Circle text="hi" />
    </div>
  )
}

export { Counter }
