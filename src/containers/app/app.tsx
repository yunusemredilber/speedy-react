import { FunctionComponent } from "react"
import styles from "./app.module.css"
import { Slider } from "../../components/slider"

const App: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Slider
        width="90vw"
        height="calc(100vh - 40px)"
        slides={[
          <div key="1" className="slide-1">
            Slide 1
          </div>,
          <div key="2" className="slide-2">
            Slide 2
          </div>,
          <div key="3" className="slide-2">
            Slide 3
          </div>,
        ]}
      />
    </div>
  )
}

App.displayName = "App"

export { App }
