import { ReactNode } from "react";
import "./Stack.css";

type Size = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export const Stack = ({
  gap = 'medium',
  className = '',
  children,
}: {
  gap?: Size;
  className?: string;
  children: ReactNode;
}) => (
  <div className={`stack gap-${gap} ${className}`}>
    {children}
  </div>
);