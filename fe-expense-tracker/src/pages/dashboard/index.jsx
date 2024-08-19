import Cards from '@/components/Cards';
import { Chart } from '@/components/Chart';
import Layout from '@/components/Layout';
import { PieDashboardChart } from '@/components/PieDashboardChart';
import RecordList from '@/components/RecordList';

const Dashboard = () => {
  return (
    <Layout>
      <Cards />
      <div className="grid grid-cols-2 gap-6 h-[284px]">
        <Chart />
        <PieDashboardChart />
      </div>
      <div className="rounded-[12px] bg-white">
        <div className="py-4 px-6 border-b-[1px] border-[#E2E8F0]">
          Last Records
        </div>
        <RecordList />
      </div>
    </Layout>
  );
};

export default Dashboard;
