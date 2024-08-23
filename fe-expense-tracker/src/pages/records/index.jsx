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
    const fetchData = async () => {
      try {
        let user = localStorage.getItem('user');
        const data = JSON.parse(user);
        const id = data.id;
        const currencyType = data.currency_type;
        setCurrency(currencyType);
        const [recordResponse, categoriesResponse] = await axios.all([
          axios.get(`http://localhost:8000/record/fe/${id}`),
          axios.get('http://localhost:8000/category/get')
        ]);

        setRecordData(recordResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
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
