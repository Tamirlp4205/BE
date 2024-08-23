import CheckboxList from './CheckboxList';
import CheckboxRecord from './CheckboxRecord';
import ListLogo from './icon/ListLogo';
import _ from 'lodash';

export const RecordDateList = ({ recordData, currency, transType }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full h-fit py-3 px-6 rounded-[12px] border-[1px] flex items-center justify-between bg-white">
        <CheckboxRecord id={'selectAll'} content={'Select All'} />
        <p>-35000</p>
      </div>
      <h1>Today</h1>
      <div className="flex flex-col gap-3">
        {recordData &&
          recordData.map((el) => (
            <CheckboxList
              id={'bla'}
              content={
                <div className="flex items-center gap-4">
                  <ListLogo />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#000] font-semibold ">{el.name}</h1>
                    <p className="text-[12px] leading-4 text-[#6B7280]">
                      {el.updateat} hours Ago
                    </p>
                  </div>
                </div>
              }
              transType={el.transaction_type}
              amount={el.amount}
              currency={currency}
            />
          ))}
      </div>
    </div>
  );
};

export default RecordDateList;
