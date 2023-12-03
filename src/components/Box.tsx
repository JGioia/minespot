import { ReactNode } from "react";
import "./Box.css";

type Size = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export const Box = ({
  margin = 'medium',
  className = '',
  children,
}: {
  margin?: Size
  className?: string
  children: ReactNode
}) => (
  <div className={`box margin-${margin} ${className}`}>
    {children}
  </div>
);