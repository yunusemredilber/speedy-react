import {
  FunctionComponent,
  useState,
  memo,
  CSSProperties,
  useMemo,
} from "react"
import { useRenderPaint } from "../../hooks/use-render-paint"
import { Button } from "../../components/button"
import styles from "../common/styles.module.css"

export const CounterAndCircleText = `
const MemoizedCircle = memo(Circle)

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const style = useMemo(() => ({ backgroundColor: "#666" }), [])

  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        Increase {counter}
      </Button>
      <MemoizedCircle text={counter} />
      <MemoizedCircle text="hi" style={style} />
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

const MemoizedCircle = memo(Circle)

const Counter: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)
  const style = useMemo(() => ({ backgroundColor: "#666" }), [])

  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        Increase {counter}
      </Button>
      <MemoizedCircle text={counter} />
      <MemoizedCircle text="hi" style={style} />
    </div>
  )
}

export { Counter }
