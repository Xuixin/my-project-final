import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import Select from "react-select";

export function AddMenu() {
  const [menuData, setMenuData] = useState([]);
  const [listMenu, setListMenu] = useState([
    { value: "chocolate", label: "Chocolate", typeid: 1, typeName: "icecream" },
    {
      value: "strawberry",
      label: "Strawberry",
      typeid: 1,
      typeName: "icecream",
    },
    { value: "meat", label: "meat", typeid: 2, typeName: "burgur" },
    { value: "chicken", label: "chicken", typeid: 2, typeName: "burgur" },
    { value: "strawberry", label: "Strawberry", typeid: 3, typeName: "water" },
    { value: "vanilla", label: "Vanilla", typeid: 3, typeName: "water" },
  ]);
  const [menuName, setMenuName] = useState("");
  const [menuQuan, setMenuQuan] = useState(1);
  const [selectedType, setSelectedType] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    const uniqueTypes = [...new Set(listMenu.map((item) => item.typeName))];
    const options = uniqueTypes.map((typeName) => ({
      value: typeName,
      label: typeName,
    }));
    setFilteredOptions(options);
  }, []);

  return (
    <Dialog className="border">
      <DialogTrigger asChild>
        <Button variant="outline">เพิ่มเมนู</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md  max-h-[40rem] mix-w-md transition-height duration-300 ease-in-out overflow-auto">
        <DialogHeader className="mb-1">
          <DialogTitle>ฟอร์มเพิ่มข้อมูลเมนู</DialogTitle>
          <hr />
        </DialogHeader>
        <div className="grid grid-cols-1 gap-2">
          {/* Select MenuType to filter Menu */}
          <div >
            <Label htmlFor="selectType">เลือกประเภทเมนู</Label>
            <Select
              placeholder={"----"}
              options={filteredOptions}
              onChange={(selectedOption) =>
                setSelectedType(selectedOption.value)
              }
            />
          </div>
          {/* Add Menu to Insert to Menuset */}
          <div>
            <Label htmlFor="addMenu">เลือกเมนู</Label>
            <Select
              placeholder="----"
              styles={{ height: 2 }}
              options={
                selectedType
                  ? listMenu.filter((item) => item.typeName === selectedType)
                  : listMenu
              }
              onChange={(selectedOption) => setMenuName(selectedOption.value)}
            />
          </div>
          {/* Add quantuti menu to Insert to Menuset */}
          <div className="col-span-1">
            <Label htmlFor="addQuan">จำนวน</Label>
            <div>
              <Input
                type="number"
                value={menuQuan}
                onChange={(e) => setMenuQuan(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Button Add Menuset Into Database */}
        <DialogFooter className="sm:justify-center my-5">
          <DialogClose asChild>
            <div className="flex justify-center items-center w-3/5">
              <Button type="button" className="w-full">
                อัพเดตรายการ
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
