'use client';
import { flexRender } from '@tanstack/react-table';

// UI
import { Ellipsis, Eye, User } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../../../components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

function DataTable() {
  const [filterValue, setFilterValue] = useState('');
  const datas = [
    {
      id: 1,
      name: 'imron',
      department: {
        id: 3,
        name: 'พ่อครัว',
      },
      tel: '06504555555',
    },
    {
      id: 2,
      name: 'john',
      department: {
        id: 4,
        name: 'Chef',
      },
      tel: '06504555556',
    },
    // Add more data as needed
  ];

  // Filter the data based on the filterValue
  const filteredData = datas.filter((data) =>
    data.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="space-y-2">
      <div className="w-[full]">
        <Input
          className="w-36"
          type="text"
          placeholder="ค้นหาด้วยชื่อ"
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>ID พนักงาน</TableHead>
              <TableHead>ชื่อ-สกุล</TableHead>
              <TableHead>หน้าที่</TableHead>
              <TableHead>โทรศัพท์</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterValue ? (
              filteredData.length ? (
                filteredData.map((data, index) => (
                  <TableRow key={data.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>EM-{flexRender(data.id)}</TableCell>
                    <TableCell>{flexRender(data.name)}</TableCell>
                    <TableCell>{flexRender(data.department.name)}</TableCell>
                    <TableCell>{flexRender(data.tel)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">
                            <Ellipsis />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-36">
                          <DropdownMenuGroup>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              <span>view</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <User
                                className="mr-2 h-4 w-4"
                                color="red"
                              />
                              <span>ออก</span>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan="6"
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )
            ) : datas.length ? (
              datas.map((data, index) => (
                <TableRow key={data.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>EM-{flexRender(data.id)}</TableCell>
                  <TableCell>{flexRender(data.name)}</TableCell>
                  <TableCell>{flexRender(data.department.name)}</TableCell>
                  <TableCell>{flexRender(data.tel)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Ellipsis />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-36">
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            <span>view</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <User
                              className="mr-2 h-4 w-4"
                              color="red"
                            />
                            <span>ออก</span>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan="6"
                  className="h-24 text-center"
                >
                  No data available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export function EmployeeData() {
  return (
    <div className="container mx-auto">
      <DataTable />
    </div>
  );
}
