import React, { FunctionComponent } from "react"
import { CodeBlock } from "../../components/code-block"
import { Typography } from "../../components/typography"
import { useRenderPaintText } from "./use-render-paint"
import { Section } from "../../containers/section"

const PaintingRenders: FunctionComponent = () => {
  return (
    <Section header="Painting Renders" secondHeader="useRenderPaint hook">
      <div>
        <Typography variant="p">
          Let's examine the code below which is a custom react hook:
        </Typography>
        <CodeBlock code={useRenderPaintText} />
      </div>
    </Section>
  )
}

PaintingRenders.displayName = "PaintingRenders"

export { PaintingRenders }
