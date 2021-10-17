import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { Counter, CounterText } from "./counter"
import { Section } from "../../containers/section"
import { CodeWithResult } from "../../components/code-with-result"

const ChangeInTheState: FunctionComponent = () => {
  return (
    <Section header="Causes of Re-rendering" secondHeader="Change in the state">
      <div>
        <Typography variant="p">
          Let's see what happened if we try to change a state:
        </Typography>
        <CodeWithResult code={CounterText}>
          <Counter />
        </CodeWithResult>
      </div>
    </Section>
  )
}

ChangeInTheState.displayName = "ChangeInTheState"

export { ChangeInTheState }
