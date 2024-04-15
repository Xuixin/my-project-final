"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenuPages } from "@/components/dropdown-menupage";
import { usePathname } from "next/navigation";

//COMPONANT
import { DropdownMenuS } from "@/components/dropdown-menuselect";

const Menu = () => {
  const pathName = usePathname();
  return (
    <section className="ml-3 flex space-x-5 flex-col bg-white border">
      {/*sup-nav*/}
      <div className="h-20 shadow-md mx-3 flex justify-start items-center">
        <div className="px-3 mt-5 flex">
          <h2 className="text-center font-bold text-2xl">จัดการเมนู</h2>
          <div className="ml-10">
            <DropdownMenuPages path={pathName} />
          </div>
          <div className="ml-10">
            <Button variant="outline">
              <Link href="/menu/form">เพิ่มเมนู</Link>
            </Button>
          </div>
        </div>
      </div>

      {/*search-type-orderby*/}
      <div className="h-20 px-3 flex justify-between items-center mt-3">
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={`ประเภทเมนู`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">ซุป</SelectItem>
                <SelectItem value="apple">เมนูผัด</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex w-full max-w-sm items-center">
            <Input
              type="text"
              className="rounded-l-sm rounded-r-none w-36"
              placeholder="ค้นหาเมนู"
            />
            <Button className="rounded-l-none w-10 rounded-r-sm" type="submit">
              <Search size={20} />
            </Button>
          </div>
        </div>
        <div className="ml-20">
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder={`Order By`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">วันที่เพิ่ม</SelectItem>
                <SelectItem value="apple">ราคา</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/*item menu */}
      <div className=" p-3 grid grid-cols-5 gap-4">
        <div className="flex flex-col items-center h-60 py-5 px-2 space-y-5 shadow-sm rounded-md border">
          <Image src="/orange.jpg" alt="alt" width={125} height={75} />

          <div className="flex flex-col items-start justify-between">
            <h2 className="font-semibold ">Orange juice</h2>

            <p className="font-normal text-xs text-slate-500">
              jdsvanoiusd f javoishcdsjv odufijfdsf uvo
            </p>

            <div className="flex justify-between items-end w-full">
              <p className="font-semibold text-xl">RM 30.00</p>

              <DropdownMenuS id={1} path={pathName}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
