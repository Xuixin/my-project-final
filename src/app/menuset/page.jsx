"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DropdownMenuPages } from "@/components/dropdown-menupage";
import { usePathname } from "next/navigation";

import { DropdownMenuS } from "@/components/dropdown-menuselect";

const AccordionItem = ({ setid, setName, setQuantity, setPrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hs-accordion" setid={setid}>
      <table className="min-w-full  text-left text-sm font-light">
        <tbody>
          <tr className="border-b border-t transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 font-medium">{setid}</td>
            <td className="whitespace-nowrap px-6 py-4">{setName}</td>
            <td className="whitespace-nowrap px-6 py-4">{setQuantity}</td>
            <td className="whitespace-nowrap px-6 py-4">
              RM {setPrice.toFixed(2)}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <DropdownMenuS id={1} path={pathName} />
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <button
                className={`hs-accordion-toggle ${
                  isOpen ? "hs-accordion-active:text-blue-600" : ""
                } border inline-flex items-center gap-x-3 text-sm w-fit font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400`}
                onClick={toggleAccordion}
                aria-controls={`${setid}-setPrice`}
                aria-expanded={isOpen}
              >
                <ChevronDown />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div
        setid={`${setid}-setPrice`}
        className={`hs-accordion-setPrice ${
          isOpen ? "block" : "hidden"
        } w-full overflow-hidden transition-[height] duration-300`}
      >
        <div className="pb-4 px-6">
          <p className="text-sm text-gray-600 dark:text-neutral-200">
            {setPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

const MenuSet = () => {
  const pathName = usePathname();

  return (
    <section className="ml-3 h-screen flex space-x-5 space-y-3 flex-col bg-white">
      {/* ################## HEADER ################ */}
      <div className="h-20 shadow-md mx-3 w-full flex justify-start items-center">
        <div className="px-3 mt-5 flex">
          <h2 className="text-center font-bold text-2xl">จัดการเมนูเซ็ต</h2>
          <div className="ml-10">
            <DropdownMenuPages path={pathName} />
          </div>
        </div>
      </div>
      {/* ################## MENU SET ##############*/}
      <div className="flex flex-col border justify-center items-center px-5">
        {/*ORDER BY */}
        <div className="border w-full">
          <div className="h-10 w-full flex justify-end items-center">
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
        <div className="border mx-5 w-full flex flex-col">
          <div className="w-full">
            <div className="w-full bg-white rounded-lg shadow-md dark:bg-neutral-800">
              <div className="hs-accordion-group">
                <table className="min-w-full  text-left text-sm font-light">
                  <tr className="border-b border-t transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      #
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      ชื่อเมนูเซ็ต
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">จำนวน</td>
                    <td className="whitespace-nowrap px-6 py-4">ราคา</td>
                    <td className="whitespace-nowrap px-6 py-4">#</td>
                  </tr>
                </table>
                <AccordionItem
                  setid={1}
                  setName="Accordion #1"
                  setQuantity={2}
                  setPrice={50.0}
                />
                <AccordionItem
                  setid={2}
                  setName="Accordion #2"
                  setQuantity={5}
                  setPrice={30.5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSet;
