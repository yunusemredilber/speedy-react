import { FunctionComponent, useState } from "react"
import { useRenderPaint } from "../../hooks/use-render-paint"

export const CounterText = `
const Counter = () => {
  const [count, setCount] = useState(0)
  const targetProps = useRenderPaint()
  return (
    <div {...targetProps}>
      <button onClick={() => setCount(count + 1)}>
        Increse
      </button>
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
      <button onClick={() => setCount(count + 1)}>Increse</button>
      <p>{count}</p>
    </div>
  )
}

export { Counter }
