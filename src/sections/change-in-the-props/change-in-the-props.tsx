import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { Counter, CounterAndCircleText } from "./counter"
import { Section } from "../../containers/section"
import { CodeWithResult } from "../../components/code-with-result"

const ChangeInTheProps: FunctionComponent = () => {
  return (
    <Section header="Causes of Re-rendering" secondHeader="Change in the props">
      <div>
        <Typography variant="p">
          Let's see what happens when the given prop changes:
        </Typography>
        <CodeWithResult code={CounterAndCircleText}>
          <Counter />
        </CodeWithResult>
      </div>
    </Section>
  )
}

ChangeInTheProps.displayName = "ChangeInTheProps"

export { ChangeInTheProps }
