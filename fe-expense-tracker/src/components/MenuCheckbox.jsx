'use client';

import CheckboxRecord from './CheckboxRecord';

const content = ['All', 'Income', 'Expense'];

export const MenuCheckbox = () => {
  return (
    <div className="flex flex-col gap-2">
      {content.map((el) => (
        <CheckboxRecord id={el} content={el} />
      ))}
    </div>
  );
};

export default MenuCheckbox;
