import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { Counter, CounterAndCircleText } from "./counter"
import { Section } from "../../containers/section"
import { CodeWithResult } from "../../components/code-with-result"

const NewReferencesInProps: FunctionComponent = () => {
  return (
    <Section header="Memo" secondHeader="Passing new references down as props">
      <div>
        <Typography variant="p">
          Let's examine behavior of memo with a similar example:
        </Typography>
        <CodeWithResult code={CounterAndCircleText}>
          <Counter />
        </CodeWithResult>
      </div>
    </Section>
  )
}

NewReferencesInProps.displayName = "NewReferencesInProps"

export { NewReferencesInProps }
