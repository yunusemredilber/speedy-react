import { FunctionComponent } from "react"
import { Section } from "../../containers/section"

const ReactProfiling: FunctionComponent = () => {
  return (
    <Section
      header="React Profiling"
      secondHeader="Profiling with the react dev tools extension."
    >
      <div></div>
    </Section>
  )
}

ReactProfiling.displayName = "ContextRenderingBehavior"

export { ReactProfiling }
