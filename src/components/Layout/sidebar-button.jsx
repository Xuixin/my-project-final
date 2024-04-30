import { Button } from '../ui/button';

export function SidebarButton({ icon: Icon, children, variant }) {
  // This entire return statement is written in JSX
  return (
    <Button
      variant={variant}
      className="gap-2 justify-start w-full"
    >
      {Icon && <Icon size={20} />}
      <span>{children}</span>
    </Button>
  );
}
