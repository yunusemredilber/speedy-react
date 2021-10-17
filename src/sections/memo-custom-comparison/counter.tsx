import { FunctionComponent, useState, memo, CSSProperties } from "react"
import { useRenderPaint } from "../../hooks/use-render-paint"
import { Button } from "../../components/button"
import styles from "../common/styles.module.css"

export const CounterAndCircleText = `
const areEqual = (prevProps, nextProps) => {
  return prevProps.text === nextProps.text
}

const MemoizedCircle = memo(Circle, areEqual)

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        Increase {counter}
      </Button>
      <MemoizedCircle text={counter} />
      <MemoizedCircle
       text="hi"
       style={{ backgroundColor: "#666" }}
       />
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

const areEqual = (prevProps: any, nextProps: any) => {
  return prevProps.text === nextProps.text
}

const MemoizedCircle = memo(Circle, areEqual)

const Counter: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        Increase {counter}
      </Button>
      <MemoizedCircle text={counter} />
      <MemoizedCircle text="hi" style={{ backgroundColor: "#666" }} />
    </div>
  )
}

export { Counter }
