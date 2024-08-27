import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Style } from '@/components/Constants';
import { PlusIcon } from 'lucide-react';
import { EyesIcon } from '@/components/icon/EyesIcon';
import Slider from '@/components/Slider';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import _ from 'lodash';
import {CategoryDialog} from "@/components/CategotyDialog"

const Category = ({ categories }) => {
  const [sortedCategories, setSortedCategories] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const sort = _.orderBy(categories, [(category) => category.categoryname], ['asc']);
    setSortedCategories(sort);
  }, [categories]);

  const filteredCategories = sortedCategories.filter(category =>
    (selectedFilter === 'All' || 
     (selectedFilter === 'Income' && category.transactiontype == "INC") || 
     (selectedFilter === 'Expense' && category.transactiontype == "EXP")) &&
    category.categoryname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Command className="w-[250px] h-fit bg-white rounded-[12px] px-4 py-6 flex gap-6">
      <h1 className='font-bold'>Records</h1>
      <CategoryDialog/>
      <div className={Style.buttonStyle3}>
        <CommandInput 
          placeholder="Search" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Types">
          <RadioGroup
            defaultValue="All"
            onValueChange={(value) => setSelectedFilter(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="All" />
              <Label>All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Income" />
              <Label>Income</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Expense" />
              <Label>Expense</Label>
            </div>
          </RadioGroup>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Category">
          {filteredCategories.map((el, index) => (
            <CommandItem key={index}>
              <EyesIcon />
              {el.categoryname}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
      <Slider />
    </Command>
  );
};

export default Category;
