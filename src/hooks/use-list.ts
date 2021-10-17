import { useState } from "react"

const useList = <Type>(
  initialList: Type[]
): {
  list: Type[]
  shuffle: () => void
} => {
  const [list, setList] = useState(initialList)

  const shuffle = () => {
    let shuffled = list
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    setList(shuffled)
  }

  return { list, shuffle }
}

export { useList }
