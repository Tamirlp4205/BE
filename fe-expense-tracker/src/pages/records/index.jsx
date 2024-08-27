import Category from '@/components/Category';
import RecordsListTable from '@/components/RecordsListTable';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Records = () => {
  const [recordData, setRecordData] = useState();
  const [currency, setCurrency] = useState('MNT');
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let user = localStorage.getItem('user');
        const data = JSON.parse(user);
        const id = data.id;
        const currencyType = data.currency_type;
        setCurrency(currencyType);
        const recordResponse = await axios.get(`http://localhost:8000/record/fe/${id}`);
        setRecordData(recordResponse.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data'); 
        setLoading(false); 
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>; 

  return (
    <div className='flex gap-10'>
      {recordData && <Category categories={recordData} />}
      {recordData && (
        <RecordsListTable recordData={recordData} currency={currency} />
      )}
    </div>
  );
};

export default Records;
