import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { Counter, CounterAndCircleText } from "./counter"
import { Section } from "../../containers/section"
import { CodeWithResult } from "../../components/code-with-result"

const UseMemoForComponents: FunctionComponent = () => {
  return (
    <Section header="useMemo" secondHeader="Memorizing components">
      <div>
        <Typography variant="p">
          We can memoize components with useMemo to control according to{" "}
          <b>parent dependencies</b>:
        </Typography>
        <CodeWithResult code={CounterAndCircleText}>
          <Counter />
        </CodeWithResult>
      </div>
    </Section>
  )
}

UseMemoForComponents.displayName = "UseMemoForComponents"

export { UseMemoForComponents }
