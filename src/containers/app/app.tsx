import { FunctionComponent } from "react"
import styles from "./app.module.css"
import { Slider } from "../../components/slider"
import { PaintingRenders } from "../../sections/painting-renders"
import { ChangeInTheState } from "../../sections/change-in-the-state"
import { ChangeInTheProps } from "../../sections/change-in-the-props"
import { RenderingOfParent } from "../../sections/rendering-of-parent"
import { TextSection } from "../text-section"
import { RenderBehavior } from "../../sections/render-behavior"
import { Memo } from "../../sections/memo"
import { NewReferencesInProps } from "../../sections/new-references-in-props"
import { MemoCustomComparison } from "../../sections/memo-custom-comparison"
import { UseMemo } from "../../sections/use-memo"
import { UseMemoForComponents } from "../../sections/use-memo-for-components"
import { Lists } from "../../sections/lists"
import { UseCallback } from "../../sections/use-callback"
import { ContextRenderingBehavior } from "../../sections/context-rendering-behavior"
import { RenderingWithContext } from "../../sections/rendering-with-context"

const App: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Slider
        slides={[
          <TextSection
            key={-1}
            header="Who am I?"
            secondHeader="Yunus Emre Dilber"
          >
            <img
              src="https://github.com/yunusemredilber.png"
              alt="My profile pic"
              className="circle"
              width={300}
              height={300}
            />
          </TextSection>,
          <TextSection
            key={0}
            header="Before starting the journey"
            text="Fix the slow render before you fix the re-render!"
          />,
          <PaintingRenders key={1} />,
          <ChangeInTheState key={2} />,
          <ChangeInTheProps key={3} />,
          <RenderingOfParent key={4} />,
          <TextSection
            key={5}
            header="Components always re-render"
            text="React does not care whether “props changed” - it will render child components unconditionally just because the parent rendered! - Mark Erikson"
          />,
          <RenderBehavior key={6} />,
          <Memo key={7} />,
          <NewReferencesInProps key={8} />,
          <MemoCustomComparison key={9} />,
          <UseMemo key={10} />,
          <UseMemoForComponents key={11} />,
          <TextSection
            key={12}
            header="Should We Memoize Everything?"
            text="Only if it's going to make a difference in behavior for the child."
          />,
          <Lists key={13} />,
          <UseCallback key={14} />,
          <TextSection
            key={15}
            header="Should We Use useCallback All The Time?"
            text="It's okay to pass down new references like callback functions and objects most of the time."
          />,
          <ContextRenderingBehavior key={16} />,
          <RenderingWithContext key={17} />,
          <TextSection
            key={15}
            header="React Profiling"
            text="We will examine an example ->"
          />,
        ]}
      />
    </div>
  )
}

App.displayName = "App"

export { App }
