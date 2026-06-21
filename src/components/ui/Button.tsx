import React from 'react';
import { cn } from '../../lib/utils';
import NorthEastIcon from '@mui/icons-material/NorthEast';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'mint' | 'outline' | 'dark';
  icon?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', icon, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-container rounded-full px-6 py-3",
      mint: "bg-brand-mint text-primary hover:bg-[#86d7a6] rounded-full px-6 py-3",
      outline: "bg-transparent border border-outline text-on-surface hover:bg-surface-container rounded-full px-6 py-3",
      dark: "bg-brand-dark text-white hover:bg-primary rounded-full px-6 py-3",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
        {icon && <NorthEastIcon sx={{ ml: 1, fontSize: 16 }} />}
      </button>
    );
  }
);
Button.displayName = "Button";
