'use client'
import { SidebarButton } from "./sidebar-button";
import { LayoutDashboard, LogOut, MoreHorizontal, Salad, Settings , Users} from "lucide-react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";

export function Sidebardesktop() {
  const pathName = usePathname()
  return (
    <aside className="w-64 max-w-xs h-screen fixed top-0 left-0 z-40 border-r">
      <div className="h-full px-3 py-4">
        <h3 className="mx-3 text-lg font-semibold text-foreground">
          Restaurant
        </h3>

        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            <Link href={"/"}>
              <SidebarButton className={"w-full"} icon={LayoutDashboard} variant={pathName == '/' ? 'secondary' : 'ghost'}>
                Dashboard
              </SidebarButton>
            </Link>
            <Link href="/menu">
                <SidebarButton className={"w-full"} icon={Salad} variant={pathName == '/menu' ? 'secondary' : 'ghost'}>
                เมนู
              </SidebarButton>
            </Link>
            <Link href="#">
                <SidebarButton className={"w-full"} icon={Users} variant={pathName == '#' ? 'secondary' : 'ghost'}>
                พนักงาน
              </SidebarButton>
            </Link>
          </div>

          <div className="absolute left-0 bottom-3 w-full px-3">
            <Separator className="absolute -top-3 left-0 w-full" />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src="https://github.com/max-programming.png" />
                        <AvatarFallback> Imron </AvatarFallback>
                      </Avatar>
                      <span>imron</span>
                    </div>
                    <MoreHorizontal size={20} />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mb-2 w-56 rounded-[1rem]">
                <div className="space-y-1">
                    <Link href="#">
                        <SidebarButton size='sm' icon={Settings} className={'w-full'}>
                            Account Settings
                        </SidebarButton>
                    </Link>
                    <Link href="#">
                        <SidebarButton size='sm' icon={LogOut} className={'w-full'}>
                            Log Out
                        </SidebarButton>
                    </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
}
