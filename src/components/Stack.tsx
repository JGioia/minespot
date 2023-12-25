import { ReactNode } from "react";
import "./Layout.css";

type Size = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export const Stack = ({
  gap = 'medium',
  className = '',
  center = false,
  children,
}: {
  gap?: Size;
  className?: string;
  center?: boolean;
  children: ReactNode;
}) => (
  <div className={`stack gap-${gap} ${className} ${center ? 'center' : ''}`}>
    {children}
  </div>
);