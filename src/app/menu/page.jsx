"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ClipboardPen } from "lucide-react";
import React from "react";
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

const Menu = () => {
  return (
    <section className="ml-3 h-screen flex space-x-5 space-y-5 flex-col bg-white">
      <div className="h-20 shadow-md px-3 w-full flex justify-between items-center">
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
              className="rounded-l-sm rounded-r-none"
              placeholder="ค้นหาเมนู"
            />
            <Button className="rounded-l-none rounded-r-sm" type="submit">
              <Search />
            </Button>
          </div>
        </div>
        <div className="ml-20">
          <Select>
            <SelectTrigger className="w-[180px]">
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

      <div className="grid grid-cols-5 gap-4 ">
        <div className="flex flex-col items-center h-60 py-5 px-2 space-y-5 shadow-sm rounded-md border">
          <Image src="/orange.jpg" alt="alt" width={125} height={75} />

          <div className="flex flex-col items-start justify-between">
            <h2 className="font-semibold ">Orange juice</h2>

            <p className="font-normal text-xs text-slate-500">
              jdsvanoiusd f javoishcdsjv odufijfdsf uvo
            </p>

            <div className="flex justify-between items-end w-full">
              <p className="font-semibold text-xl">RM 30.00</p>

              <Link href={'/menu/update/1'}>
                <Button variant="outline" size="icon">
                  <ClipboardPen className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
