import { ReactNode } from "react";
import "./Box.css";

type Size = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export const Box = ({
  padding: padding = 'medium',
  className = '',
  children,
}: {
  padding?: Size;
  className?: string;
  children: ReactNode;
}) => (
  <div className={`box padding-${padding} ${className}`}>
    {children}
  </div>
);