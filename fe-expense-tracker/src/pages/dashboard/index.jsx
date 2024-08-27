import Cards from '@/components/Cards';
import { Chart } from '@/components/Chart'
import Layout from '@/components/Layout';
import { PieDashboardChart } from '@/components/PieDashboardChart';
import RecordList from '@/components/RecordList';
import axios from "axios"
import { useEffect,useState } from 'react';

const Dashboard = () => {
  const [getPieChartData, setGetPieChartData] = useState();
  useEffect(() => {
    let user = localStorage.getItem('user');
    const data = JSON.parse(user);
    const userId = data.id;
    axios
      .get(`http://localhost:8000/record/${userId}/recordPieChart`)
      .then((resp) => setGetPieChartData(resp.data));
  }, []);
  return (
    <div className='flex flex-col gap-10'>
      <Cards />
      <div className="grid grid-cols-2 gap-6 h-[284px]">
        <Chart />
        <PieDashboardChart getPieChartData={getPieChartData}/>
      </div>
      <div className="rounded-[12px] bg-white">
        <div className="py-4 px-6 border-b-[1px] border-[#E2E8F0]">
          Last Records
        </div>
        <RecordList />
      </div>
    </div>
  );
};

export default Dashboard;
