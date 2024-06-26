import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import axios from "axios";


// แก้ไข ประเภทเมนู
export const EditType = ({ id, val, func }) => {
  const [typeEdit, setTypeEdit] = useState("");

  useEffect(() => {
    setTypeEdit(val);
  }, [val]); // ระบุ val เป็น dependency ใน useEffect

  const handleEdit = async () => {
    try {
      await axios.put(`/api/menutype/${id}`, { typeName: typeEdit });
      alert("success");
      func(true);
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  return (
    <Dialog className="border">
      <DialogTrigger asChild>
        <Button variant="outline">เเก้ไข</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md  max-h-[40rem] mix-w-md transition-height duration-300 ease-in-out overflow-auto">
        <DialogHeader className="mb-1">
          <DialogTitle>ฟอร์มแก้ไขประเภทเมนู</DialogTitle>
          <hr />
        </DialogHeader>
        <div className="grid grid-cols-1 gap-2">
          {/* Add Menu Type */}
          <div className="col-span-1">
            <Label htmlFor="addQuan">ประเภทเมนู</Label>
            <div>
              <Input
                type="text"
                value={typeEdit}
                onChange={(e) => setTypeEdit(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Button Add Menuset Into Database */}
        <DialogFooter className="sm:justify-center my-5">
          <DialogClose asChild>
            <div className="flex justify-center items-center w-3/5">
              <Button type="button" onClick={handleEdit} className="w-full">
                เพิ่มประเภทเมนู
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// เพิ่มประเภทเมนู
export const AddType = ({ func }) => {
  const [typeName, setTypeName] = useState("");
  // AddMenuType
  const handleAddSubmit = async () => {
    try {
      await axios.post("/api/menutype", { typeName });
      func(true);
    } catch (error) {
      console.log("error", error);
      alert("something went wrong");
    }
  };

  return (
    <Dialog className="border">
      <DialogTrigger asChild>
        <Button variant="outline">เพิ่มประเภทเมนู</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md  max-h-[40rem] mix-w-md transition-height duration-300 ease-in-out overflow-auto">
        <DialogHeader className="mb-1">
          <DialogTitle>ฟอร์มเพิ่มประเภทเมนู</DialogTitle>
          <hr />
        </DialogHeader>
        <div className="grid grid-cols-1 gap-2">
          {/* Add Menu Type */}
          <div className="col-span-1">
            <Label htmlFor="addQuan">ประเภทเมนู</Label>
            <div>
              <Input
                type="text"
                value={typeName}
                onChange={(e) => setTypeName(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Button Add Menuset Into Database */}
        <DialogFooter className="sm:justify-center my-5">
          <DialogClose asChild>
            <div className="flex justify-center items-center w-3/5">
              <Button
                type="button"
                onClick={handleAddSubmit}
                className="w-full"
              >
                เพิ่มประเภทเมนู
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// ลบประเภทเมนู
export const DeleteType = ({ id, func }) => {

  const handleDeleteSubmit = async (id) => {
    try {
      await axios.delete(`/api/menutype/${id}`);
      alert("deleted data");
      func(true)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      variant="destructive"
      onClick={() => handleDeleteSubmit(id)}
      className="text-white"
    >
      delete
    </Button>
  );
};
