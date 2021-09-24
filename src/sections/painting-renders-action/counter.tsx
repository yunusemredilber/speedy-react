import { FunctionComponent, useState } from "react"
import { useRenderPaint } from "../../hooks/use-render-paint"
import { Button } from "../../components/button"

export const CounterText = `
const Counter = () => {
  const [count, setCount] = useState(0)
  const targetProps = useRenderPaint()
  return (
    <div {...targetProps}>
      <Button onClick={() => setCount(count + 1)}>
        Increase
      </Button>
      <p>{count}</p>
    </div>
  )
}

export { Counter }
`

const Counter: FunctionComponent = () => {
  const [count, setCount] = useState(0)
  const targetProps = useRenderPaint<HTMLDivElement>()
  return (
    <div {...targetProps}>
      <Button onClick={() => setCount(count + 1)}>Increase</Button>
      <p>{count}</p>
    </div>
  )
}

export { Counter }
