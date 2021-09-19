import { FunctionComponent } from "react"
import styles from "./app.module.css"
import { Slider } from "../../components/slider"
import { PaintingRenders } from "../../sections/painting-renders"
import { PaintingRendersAction } from "../../sections/painting-renders-action"

const App: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Slider
        slides={[
          <PaintingRenders key={1} />,
          <PaintingRendersAction key={2} />,
        ]}
      />
    </div>
  )
}

App.displayName = "App"

export { App }
