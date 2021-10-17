export const useRenderPaintText = `
const useRenderPaint = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    console.log("(re)rendering...")

    ref.current.classList.remove("highlight")
    void ref.current.offsetWidth // Enough time to wait
    ref.current.classList.add("highlight")
  }) // No dependency array

  const onAnimationEnd = () => {
    if (!ref.current) {
      return
    }

    ref.current.classList.remove("highlight")
  }

  return { ref, onAnimationEnd, "data-highlightable": true }
}

export { useRenderPaint }
`
