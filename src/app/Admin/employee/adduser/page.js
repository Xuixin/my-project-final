"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

// ui
import { Input } from "@/components/ui/input";
import { ChevronDown, Slash, UserPlus } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const EmployeeById = () => {
  const [userImage, setUserImage] = useState(null);
  const [date, setDate] = useState();

  const imageUpload = (event) => {
    event.preventDefault();
    if (event.target.files.length > 0) {
      setUserImage(event.target.files[0]);
    }
  };

  return (
    <section className="ml-3 h-screen flex-col bg-white">
      <div className="h-20 shadow-md w-full flex justify-star">
        <div className="px-3 mt-5 flex">
          <h2 className="text-center font-bold text-2xl ml-5">Profile</h2>
          {/* <div className="ml-10">
            <DropdownMenuPages path={pathName} />
          </div> */}
        </div>
      </div>
      <div className="bg-slate-100 w-full h-5"></div>
      <div className="space-y-5 px-5 container pt-5 space-x-4">
        <div className="ml-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/Admin/employee">พนักงาน</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">
                  เพิ่มพนักงาน
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="w-full flex ">
          <div className="w-64 flex justify-center max-h-48 min-h-48 mt-5">
            {userImage ? (
              <>
                <Image
                  for="upload"
                  src={URL.createObjectURL(userImage)}
                  alt="alt"
                  width={150}
                  height={150}
                />
                <input
                  id="upload"
                  type="file"
                  className="hidden"
                  onChange={(event) => imageUpload(event)}
                />
              </>
            ) : (
              <div className="rounded-md border border-indigo-500 flex justify-center items-center bg-gray-50 p-4 shadow-md w-36">
                <label
                  for="upload"
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <UserPlus className="h-10 w-10 fill-white stroke-indigo-500" />
                  <span className="text-gray-600 font-medium">Upload file</span>
                </label>
                <input
                  id="upload"
                  type="file"
                  className="hidden"
                  onChange={(event) => imageUpload(event)}
                />
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 w-full gap-10 px-20">
            <div className="col-span-2">
              <h2 className="text-xl font-semibold">ข้อมูลส่วนตัว</h2>
            </div>
            <div className="col-span-1">
              <Label htmlFor="name">ชื่อ</Label>
              <div>
                <Input type="text" />
              </div>
            </div>
            <div className="col-span-1">
              <Label htmlFor="lastName">นามสกุล</Label>
              <div>
                <Input type="text" />
              </div>
            </div>
            <div className="col-span-1">
              <Label htmlFor="gender">เพศ</Label>
              <div>
                <RadioGroup
                  className="flex justify-around"
                  defaultValue="comfortable"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ชาย" id="r1" />
                    <Label htmlFor="r1">ชาย</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="หญิง" id="r2" />
                    <Label htmlFor="r2">หญิง</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="col-span-1">
              <Label htmlFor="dateOfBirth">วันเกิด</Label>
              <div >
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : null}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="col-span-1">
              <Label htmlFor="departMent">หน้าที่</Label>
              <div>
                <Input type="text" />
              </div>
            </div>
            <div className="col-span-1">
              <Label htmlFor="salary">เงินเดือน</Label>
              <div>
                <Input type="text" value={`${20000} ริงกิต/เดือน`} disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeById;
