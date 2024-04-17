import { Sun, LucideIcon, Home } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";

export function SidebarButton({
  icon: Icon,
  className,
  children,
  ...props
}) {
  // This entire return statement is written in JSX
  return (
    <Button
      variant="ghost"
      className={`gap-2 justify-start ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
      <span>{children}</span>
    </Button>
  );
}
