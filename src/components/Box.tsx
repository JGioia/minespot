import { ReactNode } from "react";
import "./Layout.css";

type Size = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export const Box = ({
  padding = 'medium',
  className = '',
  center = false,
  children,
}: {
  padding?: Size;
  className?: string;
  center?: boolean;
  children: ReactNode;
}) => (
  <div className={`box padding-${padding} ${className} ${center ? 'center' : ''}`}>
    {children}
  </div>
);