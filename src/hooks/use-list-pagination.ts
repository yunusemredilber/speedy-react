import { useState } from "react"

function useListPagination(length: number): {
  current: number
  setCurrent: (current: number) => void
  before: () => void
  next: () => void
} {
  const [current, setCurrent] = useState(0)

  const next = (): void => {
    const nextIndex = current + 1
    if (nextIndex === length) {
      setCurrent(0)
      return
    }

    setCurrent(nextIndex)
  }

  const before = (): void => {
    const beforeIndex = current - 1
    if (beforeIndex < 0) {
      setCurrent(length - 1)
      return
    }

    setCurrent(beforeIndex)
  }

  return { current, setCurrent, before, next }
}

export { useListPagination }
