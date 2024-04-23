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
import { DropdownMenuPages } from "@/components/dropdown-menupage";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DiscountAccordian = ({ id, header, val, content }) => {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="flex justify-between">
        <p>{header}</p> <p>{val}</p>
      </AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  );
};

const Discount = () => {
  const pathName = usePathname();
  return (
    <section className="flex ml-3 h-screen flex-col bg-white">
      {/* ################## HEADER ################ */}
      <div className="h-20 shadow-md w-full flex justify-start ">
        <div className="px-3 mt-5 flex">
          <h2 className="text-center font-bold text-2xl">จัดการส่วนลด</h2>
          <div className="ml-10">
            <DropdownMenuPages path={pathName} />
          </div>
        </div>
      </div>
      {/* line */}
      <div className=" h-5 bg-slate-100 mb-3"></div>
      {/* ################## DISCOUNT ##############*/}
      <div className="flex flex-col justify-center items-center px-5">
        {/*ORDER BY */}
        <div className="w-full">
          <div className="h-10 w-full flex justify-between items-center">
            <div className="ml-2">เพิ่มส่วนลด</div>
            <div className="ml-20 mr-5">
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
        </div>
        <div className=" mx-5 w-full flex flex-col mt-2 mr-5">
          <div className="w-full">
            <div className="w-full bg-white rounded-lg dark:bg-neutral-800 pl-2 pr-5 ">
              <Accordion type="single" collapsible className="w-full">
                <DiscountAccordian
                  id={1}
                  header={"ส่วนลดปีใหม่"}
                  val={"11.50%"}
                  content={"Yes. It adheres to the WAI-ARIA design pattern."}
                />
                <DiscountAccordian
                  id={2}
                  header={"ส่วนลดปีใหม่"}
                  val={"11.50%"}
                  content={"Yes. It adheres to the WAI-ARIA design pattern."}
                />
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
