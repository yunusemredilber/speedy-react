import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { Counter, CounterAndCircleText } from "./counter"
import { Section } from "../../containers/section"
import { CodeWithResult } from "../../components/code-with-result"

const Memo: FunctionComponent = () => {
  return (
    <Section header="Memo" secondHeader="Introduction to memo">
      <div>
        <Typography variant="p">
          Let's see what happens if we try to use React.memo hoc:
        </Typography>
        <CodeWithResult code={CounterAndCircleText}>
          <Counter />
        </CodeWithResult>
      </div>
      <Typography variant="p">
        It is preventing <b>the wasted renders!</b>
      </Typography>
    </Section>
  )
}

Memo.displayName = "Memo"

export { Memo }
