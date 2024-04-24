"use client";
import React, { useEffect, useState } from "react";

//UI
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { EmployeeData } from "./employeeData";


const Employee = () => {
  const [filterValue, setFilterValue] = useState('')

  return (
    <section className="flex ml-3 h-screen flex-col bg-white">
      {/* ################## HEADER ################ */}
      <div className="h-20 shadow-md w-full flex justify-start ">
        <div className="px-3 mt-5 flex">
          <h2 className="text-center font-bold text-2xl">พนักงาน</h2>
          {/* <div className="ml-10">
            <DropdownMenuPages path={pathName} />
          </div> */}
        </div>
      </div>
      {/* line */}
      <div className=" h-5 bg-slate-100"></div>
      {/* content-header */}
      <div className="flex flex-col justify-center items-center px-5 pt-6 ">
        {/*ORDER BY */}
        <div className="w-full">
          <div className="h-10 w-full flex justify-between items-center space-x-2">
            <div className="flex space-x-2">
              <div>
                {/* Add Menu Type */}
                {/* / <AddType func={setRerender} /> */}
                <Button>เพิ่มพนักงาน</Button>
              </div>
              <div className="w-[full]">
                <Input type="text" placeholder="ค้นหาด้วยชื่อ" onChange={(event) => setFilterValue(event.target.value)} />
              </div>
            </div>
            <div className="ml-20 ">
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
      </div>
      {/* line */}
      <hr className="my-5" />
      {/* content */}
      <div className="w-full px-5">
        <EmployeeData  filter={filterValue} />
      </div>
    </section>
  );
};

export default Employee;
