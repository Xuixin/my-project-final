'use client'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function DropdownMenuPages({ path }){
    const [position, setPosition] = useState("");
    const pathName = usePathname()
    useEffect(() => {
        if(path == '/menu'){
            setPosition('เมนู')
        }else if(path == '/menuset'){
            setPosition('เมนูเซ็ต')
        }
    },[pathName])
    return(
        <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {position} <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem >
                    <Link href="/menu" className="w-full" >เมนู</Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem>
                    <Link href="/menuset" className="w-full">เมนูเซ็ต</Link>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
    )
}