import { Style } from '@/components/Constants';
import Layout from '@/components/Layout';
import RecordsListTable from '@/components/RecordsListTable';
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox";
import { EyesIcon } from '@/components/icon/EyesIcon';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import Slider from '@/components/Slider';

const categories = [
  { name: 'Food & Drinks', type: 'Expense' },
  { name: 'Shopping', type: 'Expense' },
  { name: 'Housing', type: 'Expense' },
  { name: 'Transportation', type: 'Expense' },
  { name: 'Vehicle', type: 'Expense' },
  { name: 'Life & Entertainment', type: 'Expense' },
  { name: 'Communication, PC', type: 'Expense' },
  { name: 'Financial expenses', type: 'Income' },
  { name: 'Investments', type: 'Income' },
  { name: 'Others', type: 'Expense' },
];

const Records = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredCategories = categories.filter(category => 
    selectedFilter === 'All' || category.type === selectedFilter
  );

  return (
    <Layout ChildStyle={true}>
      <Command className="w-[250px] h-[900px] bg-white rounded-[12px] px-4 py-6 flex gap-4 mb-10">
        <h1 className='font-bold text-2xl'>Records</h1>
        <Button className={Style.buttonStyle2}>
          <PlusIcon />
          Add
        </Button>
        <div className={Style.buttonStyle3}>
          <CommandInput placeholder="Search" />
        </div>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Types">
            <CommandItem onClick={() => setSelectedFilter('All')}>
              <Checkbox checked={selectedFilter === 'All'} />
              All
            </CommandItem>
            <CommandItem onClick={() => setSelectedFilter('Income')}>
              <Checkbox checked={selectedFilter === 'Income'} />
              Income
            </CommandItem>
            <CommandItem onClick={() => setSelectedFilter('Expense')}>
              <Checkbox checked={selectedFilter === 'Expense'} />
              Expense
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Category">
            {filteredCategories.map((category, index) => (
              <CommandItem key={index}>
                <EyesIcon />{category.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <Button className="bg-white text-[#1F2937] flex gap-2">
            <PlusIcon className='text-blue-600' />Add Category
          </Button>
        </CommandList>
        <Slider/>
      </Command>
      <RecordsListTable />
    </Layout>
  );
};

export default Records;
