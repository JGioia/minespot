import { ReactNode } from "react"

import "./Button.css";

export const Button = ({
  onClick,
  disabled,
  children
}: {
    onClick?: () => void,
    disabled?: boolean,
    children: ReactNode
}) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);