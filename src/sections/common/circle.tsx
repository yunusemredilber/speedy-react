import React, { FunctionComponent } from "react"
import { useRenderPaint } from "../../hooks/use-render-paint"
import styles from "./styles.module.css"

interface Props {
  text: string | number
}

const Circle: FunctionComponent<Props> = ({ text }) => {
  const targetProps = useRenderPaint<HTMLDivElement>()

  return (
    <div className={styles.circle} {...targetProps}>
      {text}
    </div>
  )
}

Circle.displayName = "Circle"

const CircleText = `
const Circle = ({ text }) => {
  const targetProps = useRenderPaint()

  return (
    <div className={styles.circle} {...targetProps}>
      {text}
    </div>
  )
}
`

export { Circle, CircleText }
