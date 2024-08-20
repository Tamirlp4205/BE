import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import { useEffect, useState } from "react";
import axios from "axios";
export const Chart = () => {
  const [chartData, setChartData] = useState([]);
  const fetchData = async () => {

    const id = JSON.parse(localStorage.getItem('user')).id
    const res = await axios.get(`http://localhost:8000/record/${id}/barchart`);
    setChartData(res.data);
  }
  useEffect(() => {
    fetchData()
  }, [])
  const chartConfig = {
    income: {
      label: "Desktop",
      color: "#2563eb",
    },
    expense: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };
  return (
    <Card className="h-[284px]">
      <CardHeader className="py-4 px-6 border-b-[1px]">
        <CardTitle className="text-[16px] ">Income - Expense</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between gap-4 px-6 py-8 ">
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis

            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar dataKey="income" fill="var(--color-income)" radius={4} />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
