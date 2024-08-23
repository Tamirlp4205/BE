 import CheckboxRecord from './CheckboxRecord';
const styles = {
  transTypeInc: 'text-[#84CC16] font-semibold leading-[24px]',
  transTypeExp: 'text-[#F54949] font-semibold leading-[24px]',
  listContainer:
    'flex justify-between items-center h-[40] py-[20px] mx-6 border-b-[1px] last:border-0',
};

export const CheckList = ({ id, content, amount, currency, transType }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full h-fit py-3 px-6 rounded-[12px] border-[1px] flex items-center justify-between bg-white">
        <CheckboxRecord id={id} content={content} />
        <p
          className={
            transType == 'INC' ? styles.transTypeInc : styles.transTypeExp
          }
        >
          {transType == 'INC' ? '+' : '-'}
          {amount}
          {currency == 'USD' ? '$' : '₮'}
        </p>
      </div>
    </div>
  );
};

export default CheckList;