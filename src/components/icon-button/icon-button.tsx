import { ButtonHTMLAttributes, FunctionComponent } from "react"
import styles from "./icon-button.module.css"
import clsx from "clsx"

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  size?: keyof typeof sizes
}

const IconButton: FunctionComponent<Props> = ({
  children,
  className,
  size = "small",
  ...buttonProps
}) => {
  return (
    <button
      className={clsx([styles.button, sizes[size] || sizes.small, className])}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

IconButton.displayName = "IconButton"

export { IconButton }
