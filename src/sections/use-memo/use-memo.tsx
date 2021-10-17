import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { Counter, CounterAndCircleText } from "./counter"
import { Section } from "../../containers/section"
import { CodeWithResult } from "../../components/code-with-result"

const UseMemo: FunctionComponent = () => {
  return (
    <Section header="useMemo" secondHeader="Memorizing values">
      <div>
        <Typography variant="p">
          We can use useMemo hook to memoize values:
        </Typography>
        <CodeWithResult code={CounterAndCircleText}>
          <Counter />
        </CodeWithResult>
        <Typography variant="p">
          We can also use useMemo for creating heavy values.
        </Typography>
      </div>
    </Section>
  )
}

UseMemo.displayName = "UseMemo"

export { UseMemo }
