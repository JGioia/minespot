import { ReactNode } from "react"

import "./Button.css";

export const Button = (
  {onClick, children}: 
  {
    onClick?: () => void,
    children: ReactNode
  }
) => (
  <div className="button" onClick={onClick}>
    {children}
  </div>
);