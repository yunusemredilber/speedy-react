import { ButtonHTMLAttributes, FunctionComponent } from "react"
import styles from "./icon-button.module.css"
import clsx from "clsx"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string
}

const IconButton: FunctionComponent<Props> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button className={clsx([styles.button, className])} {...buttonProps}>
      {children}
    </button>
  )
}

IconButton.displayName = "IconButton"

export { IconButton }
