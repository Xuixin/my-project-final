'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

//COMPONANT
import { DropdownMenuS } from '@/components/MenuSet/UpdateMenusetDropdown'
import { AddMenu } from '@/components/Menu/AddMenu'

const Menu = () => {
  const pathName = usePathname()
  return (
    <>
      {/* ################## MENU ##############*/}
      <div className='flex flex-col justify-center items-center px-5'>
        {/*ORDER BY */}
        <div className='w-full'>
          <div className='h-10 w-full flex justify-between items-center'>
            <div className='ml-2'>
              <AddMenu />
            </div>
            <div className='ml-20 mr-5'>
              <Select>
                <SelectTrigger className='w-[120px]'>
                  <SelectValue placeholder={`Order By`} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='apple'>วันที่เพิ่ม</SelectItem>
                    <SelectItem value='apple'>ราคา</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className=' mx-5 w-full flex flex-col mt-2'>
          <div className='w-full p-2'>
            <div className='w-full grid grid-cols-5 gap-2 bg-white  dark:bg-neutral-800'>
              {/* MenuCard */}
              <div className='flex flex-col items-center h-60 py-5 px-2 space-y-5 shadow-sm rounded-md border'>
                <Image
                  src='/orange.jpg'
                  alt='alt'
                  width={125}
                  height={75}
                />

                <div className='flex flex-col items-start justify-between'>
                  <h2 className='font-semibold '>Orange juice</h2>

                  <p className='font-normal text-xs text-slate-500'>
                    jdsvanoiusd f javoishcdsjv odufijfdsf uvo
                  </p>

                  <div className='flex justify-between items-end w-full'>
                    <p className='font-semibold text-xl'>RM 30.00</p>

                    <DropdownMenuS
                      id={1}
                      path={pathName}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
