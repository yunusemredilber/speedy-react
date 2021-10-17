import { FunctionComponent } from "react"
import { Typography } from "../../components/typography"
import { Section } from "../../containers/section"
import componentTree1 from "../../assets/diagrams/component-tree-1.svg"
import componentTree2 from "../../assets/diagrams/component-tree-2.svg"
import componentTree3 from "../../assets/diagrams/component-tree-3.svg"

const RenderBehavior: FunctionComponent = () => {
  return (
    <Section header="Render Behavior" secondHeader="Standard render behavior">
      <div>
        <Typography variant="p">
          The component tree from previous example is something like this:
        </Typography>
        <img src={componentTree1} alt="" />
        <Typography variant="p">
          The user clicks a button in Counter that increments a counter:
        </Typography>
        <img src={componentTree2} alt="" />
        <Typography variant="p">
          div was not originally marked as needing an update. However, because
          its parent Counter rendered, React now moves downwards and renders
          div, Button and Circle as well.
        </Typography>
        <img src={componentTree3} alt="" />
      </div>
    </Section>
  )
}

RenderBehavior.displayName = "RenderBehavior"

export { RenderBehavior }
