import ListLogo from '@/components/icon/ListLogo';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const RecordList = () => {
  const [records, setRecords] = useState([]);

  const fetchData = async () => {
    try {
      const id = JSON.parse(localStorage.getItem('user')).id;
      const res = await axios.get(`http://localhost:8000/record/${id}/getlistdata`);
      const data = res.data;
      const length = data.length    
      setRecords(data.slice(length-5, length));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const hoursAgo = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffInMs = now - createdDate;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    return diffInHours;
  };

  const getTypeStyle = (type) => {
    if (type === 'INC') {
      return 'text-green-500';
    } else if (type === 'EXP') {
      return 'text-red-500';
    }
    return '';
  };

  return (
    <div className="mx-6">
      {records.map((record, index) => (
        <div key={index} className="flex justify-between items-center h-[40] py-[20px] border-b-[1px]">
          <div className="flex items-center gap-4">
            <ListLogo />
            <div>
              <h1>{record.name}</h1>
              <p>{hoursAgo(record.createdat)} hours ago</p>
            </div>
          </div>
          <p className={getTypeStyle(record.transaction)}>
            {record.transaction === 'EXP' ? `-${record.amount}$` : `${record.amount}$`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecordList;
