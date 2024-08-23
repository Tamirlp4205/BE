import { Button } from '@/components/ui/button';
import { Style } from '@/components/Constants';
import { PlusIcon } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { EyesIcon } from '@/components/icon/EyesIcon';
import Slider from '@/components/Slider';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { useEffect, useState } from 'react';

export const Category = ({ categories }) => {
  const [sortedCategories, setSortedCategories] = useState();
  useEffect(() => {
    const sort = _.orderBy(categories, [(category) => category.name], ['asc']);
    setSortedCategories(sort);
  }, []);

    const [selectedFilter, setSelectedFilter] = useState('All');
    const filteredCategories = categories.filter(category =>
      selectedFilter === 'All' || category.type === selectedFilter
    );

    return (
      <Command className="w-[250px] h-fit bg-white rounded-[12px] px-4 py-6 flex gap-6 ">
        <h1>Records</h1>
        <Button className={Style.buttonStyle2}>
          <PlusIcon />
          Add Category
        </Button>
        <div className={Style.buttonStyle3}>
          <CommandInput placeholder="Search" />
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
            {sortedCategories &&
              sortedCategories.map((el) => <CommandItem><EyesIcon/>{el.name}</CommandItem>)}
            <Button className="bg-white text-[#1F2937]">Add Catecory</Button>
          </CommandGroup>
        </CommandList>
      </Command>
    );
  };
  export default Category;