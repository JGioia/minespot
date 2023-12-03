import { ReactNode } from "react";
import "./Stack.css";

type Size = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export const Stack = ({
  gap = 'medium',
  children,
}: {
  gap?: Size
  children: ReactNode
}) => (
  <div className={`stack gap-${gap}`}>
    {children}
  </div>
);