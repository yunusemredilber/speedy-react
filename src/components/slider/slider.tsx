import { FunctionComponent, ReactElement } from "react"
import styles from "./slider.module.css"
import { useListPagination } from "../../hooks/use-list-pagination"
import { IconButton } from "../icon-button"
import { ArrowLeft, ArrowRight } from "../icon"

interface Props {
  slides: ReactElement[]
}

const Slider: FunctionComponent<Props> = ({ slides }) => {
  const { current, before, next } = useListPagination(slides.length)

  return (
    <div className={styles.container}>
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
      <IconButton className={styles.prevButton} onClick={before}>
        <ArrowLeft />
      </IconButton>
      <IconButton className={styles.nextButton} onClick={next}>
        <ArrowRight />
      </IconButton>
      <div className={styles.bottomControls}>
        <IconButton onClick={before}>
          <ArrowLeft />
        </IconButton>
        <IconButton onClick={next}>
          <ArrowRight />
        </IconButton>
      </div>
      <div className={styles.pageInfo}>
        {current + 1} / {slides.length}
      </div>
    </div>
  )
}

Slider.displayName = "Slider"

export { Slider }
