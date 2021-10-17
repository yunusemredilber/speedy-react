import { FunctionComponent, useState, CSSProperties, useMemo } from "react"
import { useRenderPaint } from "../../hooks/use-render-paint"
import { Button } from "../../components/button"
import styles from "../common/styles.module.css"

export const CounterAndCircleText = `

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [counter1, setCounter1] = useState(0)
  const memoizedCircle = useMemo(
    () => <Circle text="hi" />,
    [counter1]
  )

  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        Increase {counter}
      </Button>
      <Button onClick={() => setCounter1(counter1 + 1)}>
        Increase {counter1}
      </Button>
      {memoizedCircle}
    </div>
  )
}

export { Counter }
`

const Circle: FunctionComponent<{
  text: string | number
  style?: CSSProperties
}> = ({ text, style }) => {
  const targetProps = useRenderPaint<HTMLDivElement>()

  return (
    <div className={styles.circle} style={style} {...targetProps}>
      {text}
    </div>
  )
}

const Counter: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)
  const [counter1, setCounter1] = useState(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedCircle = useMemo(() => <Circle text="hi" />, [counter1])

  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        Increase {counter}
      </Button>
      <Button onClick={() => setCounter1(counter1 + 1)}>
        Increase {counter1}
      </Button>
      {memoizedCircle}
    </div>
  )
}

export { Counter }
