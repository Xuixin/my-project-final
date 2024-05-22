'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { DropdownMenuPages } from '@/components/dropdown-menupage'
export default function MenuLayout({ children }) {
  const pathName = usePathname()
  const [title, setTitle] = useState('')
  useEffect(() => {
    switch (pathName) {
      case '/Admin/menuManage/menu':
        setTitle('จัดการเมนู')
        break
      case '/Admin/menuManage/menuset':
        setTitle('จัดการเมนูเซ็ต')
        break
      case '/Admin/menuManage/discount':
        setTitle('จัดการส่วนลด')
        break
      case '/Admin/menuManage/menutype':
        setTitle('จัดการประเภทเมนู')
      default:
        break
    }
  }, [pathName])
  return (
    <section className='flex ml-3 h-screen flex-col bg-white'>
      {/* ################## HEADER ################ */}
      <div className='h-16 shadow-md w-full'>
        <div className='flex justify-start items-center h-full mx-2'>
          <h2 className='text-center font-semibold text-xl'>{title}</h2>
          <div className='ml-10'>
            <DropdownMenuPages path={pathName} />
          </div>
        </div>
      </div>
      {/* line */}
      <div className=' h-5 bg-slate-100 mb-3'></div>
      {children}
    </section>
  )
}
