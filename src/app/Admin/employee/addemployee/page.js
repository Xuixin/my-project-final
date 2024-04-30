'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// ui
import { Input } from '@/components/ui/input';
import { ChevronDown, Slash, UserPlus } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const AddEmployee = () => {
  const router = useRouter();
  const [userImage, setUserImage] = useState(null);
  // form atribute
  const [empName, setEmpName] = useState('');
  const [empLastName, setEmpLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const imageUpload = (event) => {
    event.preventDefault();
    if (event.target.files.length > 0) {
      setUserImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log({
      data: {
        empName,
        empLastName,
        email,
        userImage,
        address,
      },
    });
  };

  return (
    <section className="ml-3 h-screen flex-col bg-white">
      <div className="h-20 shadow-md w-full flex justify-star rounded-sm">
        <div className="px-3 mt-5 flex">
          <h2 className="text-center font-bold text-2xl ml-5">Profile</h2>
          {/* <div className="ml-10">
            <DropdownMenuPages path={pathName} />
          </div> */}
        </div>
      </div>
      <div className="bg-slate-100 w-full h-10 flex items-center">
        <div className="ml-4 ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                {/* <BreadcrumbLink href="/Admin/employee">พนักงาน</BreadcrumbLink> */}
                <BreadcrumbLink
                  className="cursor-pointer"
                  onClick={() => router.push('/Admin/employee')}
                >
                  พนักงาน
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold ">
                  เพิ่มพนักงาน
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="space-y-5 px-5 container pt-5 space-x-4 rounded-sm">
        {/* นำทาง */}
        <div className="w-full flex ">
          {/* image */}
          <div className="w-64 flex justify-center max-h-48 min-h-48 mt-5">
            {userImage ? (
              <>
                <Image
                  htmlFor="upload"
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
                  htmlFor="upload"
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
            {/* Name */}
            <div className="col-span-1">
              <Label htmlFor="name">ชื่อ</Label>
              <div>
                <Input
                  type="text"
                  onChange={(e) => setEmpName(e.target.value)}
                />
              </div>
            </div>
            {/* lastName */}
            <div className="col-span-1">
              <Label htmlFor="lastName">นามสกุล</Label>
              <div>
                <Input
                  type="text"
                  onChange={(e) => setEmpLastName(e.target.value)}
                />
              </div>
            </div>
            {/* email */}
            <div className="col-span-1">
              <Label htmlFor="Email">Email</Label>
              <div>
                <Input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* หน้าที่ */}
            <div className="col-span-1">
              <Label htmlFor="departMent">หน้าที่</Label>
              <div>
                <Input type="text" />
              </div>
            </div>
            {/* salary */}
            <div className="col-span-1">
              <Label htmlFor="salary">เงินเดือน</Label>
              <div>
                <Input
                  type="text"
                  value={`${20000} ริงกิต/เดือน`}
                  disabled
                />
              </div>
            </div>
            <div className="col-span-1">
              <Label htmlFor="address">ที่อยู่</Label>
              <div>
                <Textarea
                  placeholder="เพิ่มที่อยู่."
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className=" col-span-2">
              <Button onClick={handleSubmit}>เพิ่มพนักงาน</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddEmployee;
