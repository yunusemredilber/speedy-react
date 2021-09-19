import React, { FunctionComponent } from "react"
import styles from "./painting-renders.module.css"
import { CodeBlock } from "../../components/code-block"
import { Typography, Code } from "../../components/typography"
import { useRenderPaintText } from "./use-render-paint"
import { Section } from "../../containers/section"

const PaintingRenders: FunctionComponent = () => {
  return (
    <Section header="Painting Renders" secondHeader="useRenderPaint hook">
      <div className={styles.container}>
        <Typography variant="p">
          Let's examine the code below which is a custom react hook:
        </Typography>
        <div className={styles.codeWithText}>
          <CodeBlock code={useRenderPaintText} />
          <div>
            <Typography variant="p">
              This hook returns an object that contains a <Code>ref</Code> and
              an <Code>onAnimationEnd</Code> callback. To use it, we can pass
              these properties to a react element. And then, it will remove and
              add a class immediately after it renders, <b>every time</b>. Which
              makes it glow for a moment to notify us about it's rendering.
            </Typography>
            <Typography variant="p">
              There are two key points here. The first one is our use type of{" "}
              <Code>useEffect</Code>. We didn't pass a second parameter
              (dependency array) which is unusual. This is a dangerous usage.
              For example, it will cause an infinite rendering loop if we call{" "}
              <Code>setState</Code> inside it. But it's fine here cause we are
              updating the dom manually. The second one is{" "}
              <Code>void ref.current.offsetWidth;</Code> line. It's kinda{" "}
              <a href="https://css-tricks.com/restart-css-animation/#update-another-javascript-method-to-restart-a-css-animation">
                a hack
              </a>{" "}
              that causes awaiting enough to browser's recognizing our class
              change operation.
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  )
}

PaintingRenders.displayName = "PaintingRenders"

export { PaintingRenders }
