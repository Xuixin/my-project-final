"use client";
import React, { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import axios from "axios";
import { AddType, DeleteType, EditType } from "@/app/menutype/actions/EditType";

const MenuType = () => {
  const pathName = usePathname();
  const [types, setTypes] = useState([]);
  const [rerender, setRerender] = useState(false);

  const fetchTypes = async () => {
    try {
      const response = await axios.get("/api/menutype");
      setTypes(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchTypes();
    setRerender(false);
  }, [rerender]);

  return (
    <section className="flex ml-3 h-screen flex-col bg-white">
      {/* ################## HEADER ################ */}
      <div className="h-20 shadow-md w-full flex justify-start ">
        <div className="px-3 mt-5 flex">
          <h2 className="text-center font-bold text-2xl">จัดการเมนูเซ็ต</h2>
          <div className="ml-10">
            <DropdownMenuPages path={pathName} />
          </div>
        </div>
      </div>
      {/* line */}
      <div className=" h-5 bg-slate-100 mb-3"></div>
      {/* ################## MENUTYPE ##############*/}
      <div className="flex flex-col justify-center items-center px-5">
        {/*ORDER BY */}
        <div className="w-full">
          <div className="h-10 w-full flex justify-between items-center">
            <div className="">
              {/* Add Menu Type */}
              <AddType func={setRerender}/>
            </div>
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
        <div className=" mx-5 w-full flex flex-col mt-2">
          <div className="w-full">
            <div className="w-full bg-white rounded-lg shadow-md dark:bg-neutral-800">
              <div className="hs-accordion-group">
                <table className="min-w-full text-center text-sm font-light">
                  <thead>
                    <tr className="border-b border-t transition duration-300 ease-in-out bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        #
                      </td>
                      <td className="whitespace-nowrap px-6 py-4" colSpan={2}>
                        ชื่อ
                      </td>
                      <td className="whitespace-nowrap pl-6 py-4">แก้ไข</td>
                      <td className="whitespace-nowrap py-4">ลบ</td>
                    </tr>
                  </thead>
                  <tbody>
                    {types.map((type, index) => (
                      <tr
                        key={type.id}
                        className="border-b border-t transition duration-300 ease-in-out   dark:border-neutral-500 dark:hover:bg-neutral-600"
                      >
                        <td className="whitespace-nowrap px-6 py-4">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4" colSpan={2}>
                          {type.typeName}
                        </td>
                        <td className="whitespace-nowrap pl-6 py-4">
                          <EditType
                            id={type.id}
                            val={type.typeName}
                            func={setRerender}
                          />
                        </td>
                        <td className="whitespace-nowrap py-4">
                          <DeleteType id={type.id} func={setRerender} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuType;
