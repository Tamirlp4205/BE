import * as React from 'react';
import {
  ArrowUpDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Recordcolumnlist from './RecordColumn';
import { record } from 'zod';

const styles = {
  arrowButton:
    'p-0 size-8 rounded-[8px] flex justify-center items-center gap-1 bg-[#E5E7EB] text-[#0F172A]',
};

export const RecordsListTable = ({ recordData, currency }) => {
  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <div className="flex items-center gap-4">
          <Button className={styles.arrowButton}>
            <ChevronLeft size={20} />
          </Button>
          <p>Last 30 Days</p>
          <Button className={styles.arrowButton}>
            <ChevronRight size={20} />
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
      {recordData && (
        <Recordcolumnlist recordData={recordData} currency={currency} />
      )}
    </div>
  );
};
export default RecordsListTable;
