import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { Counter, CounterAndCircleText } from "./counter"
import { Section } from "../../containers/section"
import { CodeWithResult } from "../../components/code-with-result"

const MemoCustomComparison: FunctionComponent = () => {
  return (
    <Section header="Memo" secondHeader="Comparing props">
      <div>
        <Typography variant="p">
          We can provide a custom comparison function as the second argument:
        </Typography>
        <CodeWithResult code={CounterAndCircleText}>
          <Counter />
        </CodeWithResult>
      </div>
      <Typography variant="p">
        - By default, memo will only <b>shallowly compare</b> complex objects in
        the props object.
      </Typography>
    </Section>
  )
}

MemoCustomComparison.displayName = "MemoCustomComparison"

export { MemoCustomComparison }
