import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import {
  Counter1,
  Counter1Text,
  Counter2,
  Counter2Text,
  Counter3,
  Counter3Text,
} from "./counter"
import { Section } from "../../containers/section"
import { CodeWithResult } from "../../components/code-with-result"

const UseCallback: FunctionComponent = () => {
  return (
    <Section header="useCallback" secondHeader="Memorizing callback functions">
      <div>
        <Typography variant="p">
          Lets see what happens if we pass an anonymous function in the jsx:
        </Typography>
        <CodeWithResult code={Counter1Text}>
          <Counter1 />
        </CodeWithResult>
        <Typography variant="p">
          Let's try to memoize the callback func with the useCallback hook:
        </Typography>
        <CodeWithResult code={Counter2Text}>
          <Counter2 />
        </CodeWithResult>
        <Typography variant="p">
          We can pas an updater function to setState and remove the troublemaker counter dependency:
        </Typography>
        <CodeWithResult code={Counter3Text}>
          <Counter3 />
        </CodeWithResult>
      </div>
    </Section>
  )
}

UseCallback.displayName = "UseCallback"

export { UseCallback }
