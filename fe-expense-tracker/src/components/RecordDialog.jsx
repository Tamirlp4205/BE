import React, { useEffect, useRef, useState } from 'react';
import { PlusIcon, X } from 'lucide-react';
import { Button } from './ui/button';
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
import { DatePicker } from './Date';
import axios from 'axios';
const styles = {
  button1default:
    'w-full px-3 text-white rounded-[20px] bg-[#0166FF] hover:bg-[#0166FF]',
  button1focus:
    'w-full px-3 text-[#1F2937] rounded-[20px] bg-[#F3F4F6] hover:bg-[#F3F4F6]',
  button2default:
    'w-full bg-[#F3F4F6] hover:bg-[#F3F4F6] rounded-[20px] text-[#1F2937]',
  button2focus:
    'w-full bg-[#16A34A] hover:bg-[#16A34A] rounded-[20px] text-white',
};

export const RecordAlertDialog = () => {
  const [buttonStyles, setButtonStyles] = useState(styles.button1default);
  const [buttonStyles2, setButtonStyles2] = useState(styles.button2default);
  const [transType, setTransType] = useState('EXP');
  const [categories, setCategories] = useState();
  const formRef = useRef();
  const formRef2 = useRef();
  useEffect(() => {
    {
      axios.get('http://localhost:8000/category/get').then((response) => {
        setCategories(response.data);
      }, []);
    }
  }, []);
  const buttonHandler = () => {
    setButtonStyles(styles.button1default);
    setButtonStyles2(styles.button2default);
    setTransType('EXP');
  };
  const buttonHandler2 = () => {
    setButtonStyles2(styles.button2focus);
    setButtonStyles(styles.button1focus);
    setTransType('INC');
  };
  const handlerClick = async () => {
    let user = localStorage.getItem('user');
    const data = JSON.parse(user);
    const userId = data.id;
    await axios.post('http://localhost:8000/record/create', {
      user_id: userId,
      name: formRef2.current[0].value,
      amount: formRef.current[0].value,
      transaction_type: transType,
      description: formRef2.current[1].value,
      category_id: formRef.current[2].value,
    });
    location.reload();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-[#0166FF] h-8 text-white flex items-center justify-center gap-1 px-3 rounded-[20px] leading-6">
        <PlusIcon />
        Record
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[744px] h-fit p-0">
        <AlertDialogHeader className="border-b-[1px] px-6 py-5 flex flex-row justify-between items-center">
          <AlertDialogTitle>Add Record</AlertDialogTitle>
          <AlertDialogCancel className="items-start p-0 border-0 hover:bg-white"> .       
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-5 p-6 pt-5">
            <div className="flex bg-[#F3F4F6] rounded-[20px]">
              <Button className={buttonStyles} onClick={buttonHandler}>
                Expense
              </Button>
              <Button className={buttonStyles2} onClick={buttonHandler2}>
                Income
              </Button>
            </div>
            <form ref={formRef} className="flex flex-col gap-5">
              <div className="bg-[#F3F4F6] py-3 px-4 rounded-[8px] border-[#D1D5DB] border-[1px]">
                <p className="text-[#171717]">Amount</p>
                <input
                  className="bg-[#F3F4F6] text-[#D1D5DB] focus:outline-none"
                  placeholder="000,00"
                />
              </div>
              <div>
                <h1>Category</h1>
                <Select>
                  <SelectTrigger className=" w-full bg-[#F3F4F6] border-[#D1D5DB] text-[#171717]">
                    <SelectValue placeholder="Choose" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories &&
                      categories.map((el) => (
                        <SelectItem value={el.id}>{el.name}</SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <h1>Date</h1>
                  <div className="grid w-full grid-cols-2">
                    <DatePicker />
                    {/* <TimePicker /> */}
                  </div>
                </div>
              </div>
            </form>
            <AlertDialogAction
              onClick={handlerClick}
              className={
                buttonStyles == styles.button1default
                  ? styles.button1default
                  : styles.button2focus
              }
            >
              Add Record
            </AlertDialogAction>
          </div>
          <form ref={formRef2} className="flex flex-col p-6 pt-3">
            <div>
              <h1>Payee</h1>
              <Input className="bg-[#F3F4F6] border-[#D1D5DB] text-[#171717] mt-1 mb-5 " />
            </div>
            <h2>Note</h2>
            <Input className="h-full w-full bg-[#F3F4F6] border-[#D1D5DB] text-[#171717] mt-1 " />
          </form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialog;
