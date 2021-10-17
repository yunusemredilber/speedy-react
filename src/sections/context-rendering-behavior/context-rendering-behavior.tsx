import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { Section } from "../../containers/section"
import contextComponentTree1 from "../../assets/diagrams/context-component-tree-1.svg"
import contextComponentTree2 from "../../assets/diagrams/context-component-tree-2.svg"
import contextComponentTree3 from "../../assets/diagrams/context-component-tree-3.svg"

const ContextRenderingBehavior: FunctionComponent = () => {
  return (
    <Section
      header="Context API"
      secondHeader="Render behavior of React Context API"
    >
      <div>
        <Typography variant="p">
          A component tree with a context provider looked something like this:
        </Typography>
        <img src={contextComponentTree1} alt="" />
        <Typography variant="p">
          CounterControl component that consumes counter context trigger a
          change at the context:
        </Typography>
        <img src={contextComponentTree2} alt="" />
        <Typography variant="p">React takes a different approach:</Typography>
        <img src={contextComponentTree3} alt="" />
      </div>
    </Section>
  )
}

ContextRenderingBehavior.displayName = "ContextRenderingBehavior"

export { ContextRenderingBehavior }
