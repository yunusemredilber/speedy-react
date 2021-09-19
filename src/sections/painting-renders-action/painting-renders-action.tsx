import { FunctionComponent } from "react"
import styles from "./painting-renders-action.module.css"
import { CodeBlock } from "../../components/code-block"
import { Typography } from "../../components/typography"
import { Counter, CounterText } from "./counter"
import { Section } from "../../containers/section"

const PaintingRendersAction: FunctionComponent = () => {
  return (
    <Section header="Painting Renders" secondHeader="Using useRenderPaint">
      <div className={styles.container}>
        <Typography variant="p">
          Let's see how is our new hook works with a simple component:
        </Typography>
        <div className={styles.codeWithResult}>
          <CodeBlock code={CounterText} />
          <Counter />
        </div>
      </div>
    </Section>
  )
}

PaintingRendersAction.displayName = "PaintingRendersAction"

export { PaintingRendersAction }
