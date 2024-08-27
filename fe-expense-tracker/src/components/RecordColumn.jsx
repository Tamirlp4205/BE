import Checkbox from './CheckBox';
import ListLogo from './icon/ListLogo';
import _ from 'lodash';

const styles = {
  transTypeInc: 'text-[#84CC16] font-semibold leading-[24px]',
  transTypeExp: 'text-[#F54949] font-semibold leading-[24px]',
  listContainer:
    'flex justify-between items-center h-[40px] py-[20px] mx-6 border-b-[1px] last:border-0',
};

export const RecordColumn = ({ recordData, currency }) => {
  const sum = recordData ? _.sumBy(recordData, 'totalamount') : 0;
  const hoursAgo = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffInMs = now - createdDate;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    return diffInHours;
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full h-fit py-3 px-6 rounded-[12px] border-[1px] flex items-center justify-between bg-white">
        <Checkbox id={'selectAll'} content={'Select All'} />
        <p>+{sum}</p>
      </div>
      <div className="flex flex-col gap-3">
        {recordData &&
          recordData.map((el) => (
            <Checkbox
              key={el.id}
              id={`checkbox-${el.id}`}
              content={
                <div className="flex items-center justify-between w-[784px] gap-4">
                  <div className="flex items-center gap-4">
                    <ListLogo />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[#000] font-semibold">{el.categoryname}</h1>
                      <p>{hoursAgo(el.createdat)} hours ago</p>
                    </div>
                  </div>
                  <p
                    className={
                      el.transactiontype === 'INC' ? styles.transTypeInc : styles.transTypeExp
                    }
                  >
                    {el.transactiontype === 'INC' ? '+' : '-'}
                    {el.totalamount}
                    {el.transactiontype === 'INC' ? el.income : el.expense}
                    {currency === 'USD' ? '$' : '₮'}
                  </p>
                </div>
              }
            />
          ))}
      </div>
    </div>
  );
};

export default RecordColumn;
