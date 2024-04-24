"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

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
const EmployeeById = () => {
  const [userImage, setUserImage] = useState(null);

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
                <BreadcrumbLink href="/Admin/employee">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">
                  Breadcrumb
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
              <h2>ข้อมูลส่วนตัว</h2>
            </div>
            <div className="col-span-1">
              <Label htmlFor="name">ชื่อ</Label>
              <div>
                <Input type="text" />
              </div>
            </div>
            <div className="col-span-1">
              <Label htmlFor="name">นามสกุล</Label>
              <div>
                <Input type="text" />
              </div>
            </div>
            <div className="col-span-1">
              <Label htmlFor="name">หน้าที่</Label>
              <div>
                <Input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeById;
