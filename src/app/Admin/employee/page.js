'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

//UI
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { EmployeeData } from './employeeData'
import { useRouter } from 'next/navigation'

const Employee = () => {
  const [filterValue, setFilterValue] = useState('')
  const rounter = useRouter()
  const gotoAddEmPage = () => {
    rounter.push('/Admin/employee/addemployee')
  }

  return (
    <>
      {/* content-header */}
      <div className='flex flex-col justify-center items-center px-5 pt-6'>
        {/*ORDER BY */}
        <div className='w-full'>
          <div className='h-10 w-full flex justify-between items-center space-x-2'>
            <div className='flex space-x-2'>
              <div>
                {/* Add Menu Type */}
                {/* / <AddType func={setRerender} /> */}
                <Button onClick={gotoAddEmPage}>เพิ่มพนักงาน</Button>
              </div>
            </div>
            <div className='ml-20 '>
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
      </div>
      {/* line */}
      <hr className='my-5' />
      {/* content */}
      <div className='w-full px-5'>
        <EmployeeData />
      </div>
    </>
  )
}

export default Employee
