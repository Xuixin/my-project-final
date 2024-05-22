export default function EmployeeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className='flex ml-2 h-screen flex-col bg-white'>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* ################## HEADER ################ */}
      <div className='h-16 shadow-md w-full flex justify-start '>
        <div className='px-3 flex justify-center items-center'>
          <h2 className='text-center mb-2 font-semibold'>พนักงาน</h2>
          {/* <div className="ml-10">
            <DropdownMenuPages path={pathName} />
          </div> */}
        </div>
      </div>
      {/* line */}
      <div className=' h-2 bg-slate-100'></div>
      {children}
    </section>
  )
}
