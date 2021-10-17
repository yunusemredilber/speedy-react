import {
  FunctionComponent,
  useState,
  Context,
  createContext,
  useContext,
} from "react"
import { useRenderPaint } from "../../hooks/use-render-paint"
import { Button } from "../../components/button"
import styles from "./rendering-with-context.module.css"
import { Circle } from "../common/circle"

export const Counter1Text = `
const CounterControl = ({ counterValues }) => {
  const targetProps = useRenderPaint()
  const { counter, setCounter } = counterValues;

  return (
    <div {...targetProps}>
      <p>{counter}</p>
      <Button
        onClick={() => setCounter(counter + 1)}
      >
       Increase
      </Button>
    </div>
  )
}

const Counter = ({ counterValues }) => {
  return (
    <div>
      <CounterControl counterValues={counterValues} />
      <Circle text="hi" />
    </div>
  )
}

const CounterApp = () => {
  const [counter, setCounter] = useState(0)
  const counterValues = { counter, setCounter }

  return (
    <Counter counterValues={counterValues} />
  )
}

export { CounterApp }
`

export const Counter2Text = `
const WithCounter = ({ children }) => {
  const [counter, setCounter] = useState(0)

  return (
    <CounterContext.Provider
      value={{ counter, setCounter }}
    >
      {children}
    </CounterContext.Provider>
  )
}

const useCounter = () => useContext(CounterContext)

const CounterControl = () => {
  const { counter, setCounter } = useCounter()
  const targetProps = useRenderPaint()

  return (
    <div {...targetProps}>
      <p>{counter}</p>
      <Button
        onClick={() => setCounter(counter + 1)}
      >
       Increase
      </Button>
    </div>
  )
}

const Counter = () => {
  return (
    <div>
      <CounterControl />
      <Circle text="hi" />
    </div>
  )
}

const CounterApp = () => {
  return (
    <WithCounter>
      <Counter />
    </WithCounter>
  )
}

export { CounterApp }
`

interface CounterContext {
  counter: number
  setCounter: (counter: number) => void
}

const defaultContext: CounterContext = {
  counter: 0,
  setCounter: () => undefined,
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const CounterContext: Context<CounterContext> = createContext(defaultContext)

const useCounter = () => useContext(CounterContext)

const WithCounter: FunctionComponent = ({ children }) => {
  const [counter, setCounter] = useState(0)

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  )
}

const CounterControl1: FunctionComponent<{ counterValues: CounterContext }> = ({
  counterValues,
}) => {
  const targetProps = useRenderPaint<HTMLDivElement>()
  const { counter, setCounter } = counterValues

  return (
    <div className={styles.counterControl} {...targetProps}>
      <p>{counter}</p>
      <Button onClick={() => setCounter(counter + 1)}>Increase</Button>
    </div>
  )
}

const CounterControl2: FunctionComponent = () => {
  const { counter, setCounter } = useCounter()
  const targetProps = useRenderPaint<HTMLDivElement>()

  return (
    <div className={styles.counterControl} {...targetProps}>
      <p>{counter}</p>
      <Button onClick={() => setCounter(counter + 1)}>Increase</Button>
    </div>
  )
}

const Counter1: FunctionComponent<{ counterValues: CounterContext }> = ({
  counterValues,
}) => {
  return (
    <div>
      <CounterControl1 counterValues={counterValues} />
      <Circle text="hi" />
    </div>
  )
}

const Counter2: FunctionComponent = () => {
  return (
    <div>
      <CounterControl2 />
      <Circle text="hi" />
    </div>
  )
}

const CounterApp1: FunctionComponent = () => {
  const [counter, setCounter] = useState(0)
  const counterValues = { counter, setCounter }

  return <Counter1 counterValues={counterValues} />
}

const CounterApp2: FunctionComponent = () => {
  return (
    <WithCounter>
      <Counter2 />
    </WithCounter>
  )
}

export { CounterApp1, CounterApp2 }
