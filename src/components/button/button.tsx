import { ButtonHTMLAttributes, FunctionComponent } from "react"
import styles from "./button.module.css"
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

const Button: FunctionComponent<Props> = ({
  children,
  className,
  size = "small",
  ...buttonProps
}) => {
  return (
    <button className={clsx([styles.button, sizes[size] || sizes.small, className])} {...buttonProps}>
      {children}
    </button>
  )
}

Button.displayName = "Button"

export { Button }
