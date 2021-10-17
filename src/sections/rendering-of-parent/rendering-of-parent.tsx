import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { Counter, CounterAndCircleText } from "./counter"
import { Section } from "../../containers/section"
import { CodeWithResult } from "../../components/code-with-result"

const RenderingOfParent: FunctionComponent = () => {
  return (
    <Section header="Causes of Re-rendering" secondHeader="Rendering of parent">
      <div>
        <Typography variant="p">What if the given prop was same:</Typography>
        <CodeWithResult code={CounterAndCircleText}>
          <Counter />
        </CodeWithResult>
      </div>
    </Section>
  )
}

RenderingOfParent.displayName = "RenderingOfParent"

export { RenderingOfParent }
