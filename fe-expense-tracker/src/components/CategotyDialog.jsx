import React, { useEffect, useRef, useState } from 'react';
import { PlusIcon, X } from 'lucide-react';
import { Button } from './ui/button';
import { House } from '@/components/icon/House';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from './ui/input';
import axios from 'axios';

export const CategoryDialog = () => {
  const [categories, setCategories] = useState();
  const formRef = useRef();
  const handlerClick = async () => {
    let user = localStorage.getItem('user');
    const data = JSON.parse(user);
    const userId = data.id;
    console.log(formRef);
    await axios.post('http://localhost:8000/category/create', {
      name: formRef.current[0].value
    });
    location.reload();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-[#0166FF] h-8 text-white flex items-center justify-center gap-1 px-3 rounded-[20px] leading-6">
        <PlusIcon />
        Category
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[344px] h-fit p-0">
        <AlertDialogHeader className="border-b-[1px] px-6 py-5 flex flex-row justify-between items-center">
          <AlertDialogTitle>Add Category</AlertDialogTitle>
          <AlertDialogCancel className="items-start p-0 border-0 hover:bg-white">
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <div className="">
          <form ref={formRef} className="flex flex-col p-6 pt-3">
            <div className='flex '>
              <House className="text-2xl"/>
              <Input placeholder="name"
              className="bg-[#F3F4F6] border-[#D1D5DB] text-[#171717] mt-1 mb-5 " />
            </div>
            <div className="flex flex-col gap-5 p-6 pt-5">
            <AlertDialogAction
              onClick={handlerClick}>
              Add Category
            </AlertDialogAction>
          </div>
          </form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default CategoryDialog;
