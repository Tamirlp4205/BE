import Category from '@/components/Category';
import Layout from '@/components/Layout';
import RecordsListTable from '@/components/RecordsListTable';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Records = () => {
  const [recordData, setRecordData] = useState();
  const [currency, setCurrency] = useState('MNT');
  const [categories, setCategories] = useState();
  useEffect(() => {
    let user = localStorage.getItem('user');
    const data = JSON.parse(user);
    const id = data.id;
    const currencyType = data.currency_type;
    setCurrency(currencyType);
    {
      axios
        .get(`http://localhost:8000/record/${id}`)
        .then((res) => setRecordData(res.data));
    }
    {
      axios.get('http://localhost:8000/category/get').then((response) => {
        setCategories(response.data);
      });
    }
  }, []);
  return (
    <Layout ChildStyle={true}>
      {categories && <Category categories={categories} />}
      {recordData && (
        <RecordsListTable recordData={recordData} currency={currency} />
      )}
    </Layout>
  );
};

export default Records;