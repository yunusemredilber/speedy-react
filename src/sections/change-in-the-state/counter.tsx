import { FunctionComponent, useState } from "react"
import { useRenderPaint } from "../../hooks/use-render-paint"
import { Button } from "../../components/button"

export const CounterText = `
const Counter = () => {
  const [counter, setCounter] = useState(0)
  const targetProps = useRenderPaint()
  return (
    <div {...targetProps}>
      <Button onClick={() => setCounter(counter + 1)}>
        Increase
      </Button>
      <p>{counter}</p>
    </div>
  )
}

export { Counter }
`

const Counter: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)
  const targetProps = useRenderPaint<HTMLDivElement>()
  return (
    <div {...targetProps}>
      <Button onClick={() => setCounter(counter + 1)}>Increase</Button>
      <p>{counter}</p>
    </div>
  )
}

export { Counter }
