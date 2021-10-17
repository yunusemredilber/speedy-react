import { MutableRefObject, useEffect, useRef } from "react"

const useRenderPaint = <ElementType>(): {
  ref: MutableRefObject<ElementType | null>
  onAnimationEnd: () => void
  "data-highlightable": boolean
} => {
  const ref = useRef<ElementType>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    console.log("(re)rendering...")

    const el = ref.current as unknown as HTMLElement

    el.classList.remove("highlight")
    void el.offsetWidth // Enough time to wait
    el.classList.add("highlight")
  })

  const onAnimationEnd = () => {
    if (!ref.current) {
      return
    }

    const el = ref.current as unknown as HTMLElement

    el.classList.remove("highlight")
  }

  return { ref, onAnimationEnd, "data-highlightable": true }
}

export { useRenderPaint }
