import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Minus } from 'lucide-react';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const DialogMenuSet = ({ id }) => {
  const [menuData, setMenuData] = useState([
    { id: 1, name: 'orenge', quantity: 1 },
    { id: 2, name: 'apple', quantity: 3 },
    { id: 3, name: 'lemon', quantity: 4 },
  ]);
  const [listMenu, setListMenu] = useState([
    { value: 'chocolate', label: 'Chocolate', typeid: 1, typeName: 'icecream' },
    {
      value: 'strawberry',
      label: 'Strawberry',
      typeid: 1,
      typeName: 'icecream',
    },
    { value: 'meat', label: 'meat', typeid: 2, typeName: 'burgur' },
    { value: 'chicken', label: 'chicken', typeid: 2, typeName: 'burgur' },
    { value: 'strawberry', label: 'Strawberry', typeid: 3, typeName: 'water' },
    { value: 'vanilla', label: 'Vanilla', typeid: 3, typeName: 'water' },
  ]);
  const [menuName, setMenuName] = useState('');
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

  const handleQuantityIncrement = (index, amount) => {
    const newData = [...menuData];
    newData[index].quantity += amount;
    setMenuData(newData);
  };

  const submitAdd = () => {
    const newMenuAdd = [
      ...menuData,
      { id: menuData.length + 1, name: menuName, quantity: menuQuan },
    ];
    setMenuData(newMenuAdd);
    setMenuName('');
    setMenuQuan(1);
  };

  const removeItem = (index) => {
    const newData = menuData.filter((_, i) => i !== index);
    setMenuData(newData);
  };

  return (
    <Dialog className='border'>
      <DialogTrigger asChild>
        <Button className='bg-green-500 text-white hover:bg-green-700'>
          view
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md  max-h-[40rem] min-w-[768px] transition-height duration-300 ease-in-out overflow-auto'>
        <DialogHeader className='mb-1'>
          <DialogTitle>ฟอร์มอัพเดตข้อมูลเมนูเซ็ต {id}</DialogTitle>
          <hr />
        </DialogHeader>
        <div className='grid grid-cols-6 gap-2'>
          <div className='w-full max-w-sm col-span-2'>
            <Label htmlFor='name' className='mt-1'>
              ชื่อเซ็ต
            </Label>
            <Input
              id='name'
              type='text'
              onChange={(e) => setMenuName(e.target.value)}
            />
          </div>
          <div className='w-full max-w-sm items-center col-span-2 '>
            <Label htmlFor='price'>ราคา</Label>
            <Input id='price' type='number' />
          </div>
          <div className='col-span-2'>
            <Label htmlFor='quan'>จำนวนรายการ</Label>
            <Input id='quan' type='number' value={menuData.length} disabled />
          </div>
          {/* Table Show Menu in Menuset */}
          <div className='col-span-6 border bg-slate-100 rounded-sm py-2 pl-4'>
            <table className='w-full text-start table-fixed '>
              <thead className='border-b-2 '>
                <tr>
                  <td>#</td>
                  <td colSpan={2}>ชื่อเมนู</td>
                  <td>จำนวน</td>
                  <td className='text-center'>ลบ</td>
                </tr>
              </thead>
              <tbody>
                {menuData.length != 0 &&
                  menuData.map((d, index) => (
                    <tr key={d.id} className='my-1'>
                      <td>{index + 1}</td>
                      <td colSpan={2}>{d.name}</td>
                      <td className='flex space-x-2'>
                        <button
                          onClick={() => handleQuantityIncrement(index, -1)}
                        >
                          <Minus size={15} />
                        </button>
                        <p>{d.quantity}</p>
                        <button
                          onClick={() => handleQuantityIncrement(index, 1)}
                        >
                          <Plus size={15} />
                        </button>
                      </td>
                      <td className='text-center'>
                        <Button
                          variant='destructive'
                          onClick={() => removeItem(index)}
                        >
                          ลบ
                        </Button>
                      </td>
                    </tr>
                  ))}
                {menuData.length === 0 && (
                  <tr>
                    <td colSpan='6' className='text-center'>No menu items</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Select MenuType to filter Menu */}
          <div className='col-span-2'>
            <Label htmlFor='selectType'>เลือกประเภทเมนู</Label>
            <Select
              placeholder={'----'}
              options={filteredOptions}
              onChange={(selectedOption) =>
                setSelectedType(selectedOption.value)
              }
            />
          </div>
          {/* Add Menu to Insert to Menuset */}
          <div className='col-span-2'>
            <Label htmlFor='addMenu'>เลือกเมนู</Label>
            <Select
              placeholder='----'
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
          <div className='col-span-1'>
            <Label htmlFor='addQuan'>จำนวน</Label>
            <div>
              <Input
                type='number'
                value={menuQuan}
                onChange={(e) => setMenuQuan(e.target.value)}
              />
            </div>
          </div>
          {/* Button Add Menu Into Mnuset */}
          <div className='flex items-end col-span-1'>
            <Button type='button' className='w-full' onClick={submitAdd}>
              เพิ่ม
            </Button>
          </div>
        </div>
        {/* Button Add Menuset Into Database */}
        <DialogFooter className='sm:justify-center my-5'>
          <DialogClose asChild>
            <div className='flex justify-center items-center w-3/5'>
              <Button
                type='button'
                className='w-full'
              >
                อัพเดตรายการ
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export  {DialogMenuSet}