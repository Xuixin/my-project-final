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
        }else if(path == '/discount'){
          setPosition('ส่วนลด')
        }
    },[pathName])
    return(
        <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {position} <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-36'>
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value='เมนู' >
                    <Link href="/menu" className="w-full" >เมนู</Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='เมนูเซ็ต' >
                    <Link href="/menuset" className="w-full">เมนูเซ็ต</Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='ส่วนลด' >
                    <Link href="/discount" className="w-full">ส่วนลด</Link>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
    )
}