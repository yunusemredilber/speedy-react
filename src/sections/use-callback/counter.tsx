import { FunctionComponent, useState, memo, useCallback } from "react"
import { useRenderPaint } from "../../hooks/use-render-paint"
import { Button } from "../../components/button"

export const Counter1Text = `
const IncreaseButton = ({ onClick }) => {
  const targetProps = useRenderPaint()

  return (
    <Button onClick={onClick} {...targetProps}>
      Increase
    </Button>
  )
}

const MemoizedIncreaseButton = memo(IncreaseButton)

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>{counter}</p>
      <MemoizedIncreaseButton
        onClick={() => setCounter(counter + 1)}
      />
    </div>
  )
}

export { Counter }
`

export const Counter2Text = `
const MemoizedIncreaseButton = memo(IncreaseButton)

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const memoizedOnClick = useCallback(
    () => setCounter(counter + 1),
    [counter]
  )

  return (
    <div>
      <p>{counter}</p>
      <MemoizedIncreaseButton
        onClick={memoizedOnClick}
      />
    </div>
  )
}

export { Counter }
`

export const Counter3Text = `
const MemoizedIncreaseButton = memo(IncreaseButton)

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const memoizedOnClick = useCallback(
    () => setCounter(counter => counter + 1),
    []
  )

  return (
    <div>
      <p>{counter}</p>
      <MemoizedIncreaseButton
        onClick={memoizedOnClick}
      />
    </div>
  )
}

export { Counter }
`

const IncreaseButton: FunctionComponent<{
  onClick: () => unknown
}> = ({ onClick }) => {
  const targetProps = useRenderPaint<HTMLDivElement>()

  return (
    <div {...targetProps}>
      <Button onClick={onClick}>Increase</Button>
    </div>
  )
}

const MemoizedIncreaseButton = memo(IncreaseButton)

const Counter1: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>{counter}</p>
      <MemoizedIncreaseButton onClick={() => setCounter(counter + 1)} />
    </div>
  )
}

const Counter2: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)
  const memoizedOnClick = useCallback(() => setCounter(counter + 1), [counter])

  return (
    <div>
      <p>{counter}</p>
      <MemoizedIncreaseButton onClick={memoizedOnClick} />
    </div>
  )
}

const Counter3: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)
  const memoizedOnClick = useCallback(
    () => setCounter((counter) => counter + 1),
    []
  )

  return (
    <div>
      <p>{counter}</p>
      <MemoizedIncreaseButton onClick={memoizedOnClick} />
    </div>
  )
}

export { Counter1, Counter2, Counter3 }
