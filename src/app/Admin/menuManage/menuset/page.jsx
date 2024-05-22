'use client'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DropdownMenuPages } from '@/components/dropdown-menupage'
import { usePathname } from 'next/navigation'
import { DialogMenuSet } from '@/components/MenuSet/updateMenuSet'
import { AddMenuSet } from '@/components/MenuSet/AddMenuSet'
import { Button } from '@/components/ui/button'

const AccordionItem = ({ setid, setName, setQuantity, setPrice }) => {
  return (
    <tr
      key={setid}
      className='border-b border-t transition duration-300 ease-in-out   dark:border-neutral-500 dark:hover:bg-neutral-600'
    >
      <td className='whitespace-nowrap px-6 py-4'>{setName}</td>
      <td className='whitespace-nowrap px-6 py-4'>{setQuantity}</td>
      <td className='whitespace-nowrap px-6 py-4'>RM {setPrice.toFixed(2)}</td>
      <td className='whitespace-nowrap pl-6 py-4'>
        <DialogMenuSet id={1} />
      </td>
      <td className='whitespace-nowrap py-4'>
        <Button
          variant='destructive'
          className='text-white'
        >
          delete
        </Button>
      </td>
    </tr>
  )
}

const MenuSet = () => {
  const pathName = usePathname()

  return (
    <>
      {/* ################## MENU SET ##############*/}
      <div className='flex flex-col justify-center items-center px-5'>
        {/*ORDER BY */}
        <div className='w-full'>
          <div className='h-10 w-full flex justify-between items-center'>
            <div className=''>
              <AddMenuSet />
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
          <div className='w-full'>
            <div className='w-full bg-white rounded-lg shadow-md dark:bg-neutral-800'>
              <div className='hs-accordion-group'>
                <table className='min-w-full text-center text-sm font-light'>
                  <thead>
                    <tr className='border-b border-t transition duration-300 ease-in-out bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600'>
                      <td className='whitespace-nowrap px-6 py-4 font-medium'>
                        ชื่อเมนูเซ็ต
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>จำนวน</td>
                      <td className='whitespace-nowrap px-6 py-4'>ราคา</td>

                      <td className='whitespace-nowrap pl-6 py-4'>view</td>
                      <td className='whitespace-nowrap py-4'>delete</td>
                    </tr>
                  </thead>
                  <tbody>
                    <AccordionItem
                      setid={1}
                      setName={'name'}
                      setQuantity={10}
                      setPrice={25}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuSet
