import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { List1, List1Text, List2, List2Text, List3, List3Text } from "./list"
import { Section } from "../../containers/section"
import { CodeWithResult } from "../../components/code-with-result"

const Lists: FunctionComponent = () => {
  return (
    <Section header="useMemo" secondHeader="Memorizing components">
      <div>
        <Typography variant="p">
          Let's see what happens if we shuffle list items with keys:
        </Typography>
        <CodeWithResult code={List1Text}>
          <List1 />
        </CodeWithResult>
        <Typography variant="p">
          Also, we can examine memoized items without keys:
        </Typography>
        <CodeWithResult code={List2Text}>
          <List2 />
        </CodeWithResult>
        <Typography variant="p">
          The great recipe = <b>memo + keys</b>;
        </Typography>
        <CodeWithResult code={List3Text}>
          <List3 />
        </CodeWithResult>
      </div>
    </Section>
  )
}

Lists.displayName = "Lists"

export { Lists }
