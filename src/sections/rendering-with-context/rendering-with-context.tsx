import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { CounterApp1, Counter1Text, CounterApp2, Counter2Text } from "./counter"
import { Section } from "../../containers/section"
import { CodeWithResult } from "../../components/code-with-result"

const RenderingWithContext: FunctionComponent = () => {
  return (
    <Section
      header="Context API"
      secondHeader="Rendering with and without context"
    >
      <div>
        <Typography variant="p">
          Let's try to use counter mechanism with props as usual:
        </Typography>
        <CodeWithResult code={Counter1Text}>
          <CounterApp1 />
        </CodeWithResult>
        <Typography variant="p">What if we use the context api:</Typography>
        <CodeWithResult code={Counter2Text}>
          <CounterApp2 />
        </CodeWithResult>
      </div>
    </Section>
  )
}

RenderingWithContext.displayName = "RenderingWithContext"

export { RenderingWithContext }
