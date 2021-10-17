import { FunctionComponent, memo } from "react"
import { useRenderPaint } from "../../hooks/use-render-paint"
import { Button } from "../../components/button"
import styles from "../common/styles.module.css"
import { useList } from "../../hooks/use-list"

export const List1Text = `
const items = [
  "banana", "apple", "carrot",
  "grape", "peach"
]

const Item = ({ text }) => {
  const targetProps = useRenderPaint()
  return <li {...targetProps}>{text}</li>
}

const List = () => {
  const { list, shuffle } = useList(items)

  return (
    <div>
      <ul>
        {list.map((el) => (
          <Item key={el} text={el} />
        ))}
      </ul>
      <Button onClick={shuffle}>Shuffle</Button>
    </div>
  )
}

export { List }
`

export const List2Text = `
const MemoizedItem = memo(Item)

const List = () => {
  const { list, shuffle } = useList(items)

  return (
    <div>
      <ul>
        {list.map((el) => (
          <MemoizedItem text={el} />
        ))}
      </ul>
      <Button onClick={shuffle}>Shuffle</Button>
    </div>
  )
}

export { List }
`

export const List3Text = `
const MemoizedItem = memo(Item)

const List = () => {
  const { list, shuffle } = useList(items)

  return (
    <div>
      <ul>
        {list.map((el) => (
          <MemoizedItem key={el} text={el} />
        ))}
      </ul>
      <Button onClick={shuffle}>Shuffle</Button>
    </div>
  )
}

export { List }
`

const items = ["banana", "apple", "carrot", "grape", "peach"]

const Item: FunctionComponent<{ text?: string | number }> = ({ text }) => {
  const targetProps = useRenderPaint<HTMLLIElement>()

  return (
    <li className={styles.listItem} {...targetProps}>
      {text}
    </li>
  )
}

const MemoizedItem = memo(Item)

const List1: FunctionComponent = () => {
  const { list, shuffle } = useList(items)

  return (
    <div>
      <ul>
        {list.map((el) => (
          <Item key={el} text={el} />
        ))}
      </ul>
      <Button onClick={shuffle}>Shuffle</Button>
    </div>
  )
}

const List2: FunctionComponent = () => {
  const { list, shuffle } = useList(items)

  return (
    <div>
      <ul>
        {list.map((el) => (
          <MemoizedItem text={el} />
        ))}
      </ul>
      <Button onClick={shuffle}>Shuffle</Button>
    </div>
  )
}

const List3: FunctionComponent = () => {
  const { list, shuffle } = useList(items)

  return (
    <div>
      <ul>
        {list.map((el) => (
          <MemoizedItem key={el} text={el} />
        ))}
      </ul>
      <Button onClick={shuffle}>Shuffle</Button>
    </div>
  )
}

export { List1, List2, List3 }
