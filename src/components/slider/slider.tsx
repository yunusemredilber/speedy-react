import { CSSProperties, FunctionComponent, ReactElement } from "react"
import styles from "./slider.module.css"
import { useListPagination } from "../../hooks/use-list-pagination"
import { IconButton } from "../icon-button"
import { ArrowLeft, ArrowRight } from "../icon"

interface Props {
  slides: ReactElement[],
  width?: string | number,
  height?: string | number
}

const Slider: FunctionComponent<Props> = ({ slides, width= 100, height = 100 }) => {
  const { current, before, next } = useListPagination(slides.length)

  const cssVariables = {
    "--carousel-width": width,
    "--carousel-height": height,
  } as CSSProperties

  return (
    <div className={styles.container} style={cssVariables}>
      <IconButton className={styles.prevButton} onClick={before}>
        <ArrowLeft />
      </IconButton>
      <div className={styles.slider}>
        <ul
          className={styles.slideList}
          style={{
            transform: `translate3d(calc(-${current} * var(--carousel-width, 0)), 0, 0)`,
          }}
        >
          {slides.map((slide) => (
            <li key={slide.key} className={styles.slideItem}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
      <IconButton className={styles.nextButton} onClick={next}>
        <ArrowRight />
      </IconButton>
    </div>
  )
}

Slider.displayName = "Slider"

export { Slider }
