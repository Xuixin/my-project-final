import { ChevronDown, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";

export function DropdownMenuPages({ path }) {
  const [position, setPosition] = useState("");
  useEffect(() => {
    switch (path) {
      case "/menu":
        setPosition("เมนู");
        break;
      case "/menuset":
        setPosition("เมนูเซ็ต");
        break;
      case "/discount":
        setPosition("ส่วนลด");
        break;
      case "/menutype":
        setPosition("ประเภทเมนู");
      default:
        break;
    }
  }, [path]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex justify-between">
          <span>{position}</span>
          <ChevronDown size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>จัดการเมนู</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Link href={"/menu"}>เมนู</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/menutype"}>ประเภทเมนู</Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Link href={"/menuset"}>เมนูเซ็ต</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/discount"}>ส่วนลด</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
