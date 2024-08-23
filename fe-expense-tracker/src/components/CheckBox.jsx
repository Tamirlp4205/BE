 import CheckboxRecord from './CheckboxRecord';

export const CheckList = ({ id, content }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full h-fit py-3 px-6 rounded-[12px] border-[1px] flex items-center justify-between bg-white">
        <CheckboxRecord id={id} content={content} />
      </div>
    </div>
  );
};

export default CheckList;