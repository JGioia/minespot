import { ReactNode } from "react";
import "./Layout.css";

type Size = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export const Inline = ({
  gap = 'medium',
  className = '',
  children,
}: {
  gap?: Size;
  className?: string;
  children: ReactNode;
}) => (
  <div className={`inline gap-${gap} ${className}`}>
    {children}
  </div>
);