import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';
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
import { useEffect, useState } from 'react';
import _ from 'lodash'; 
const chartData = [
  { category: 'Food & Drinks', expense: 275, fill: 'var(--color-chrome)' },
  { category: 'Shopping', expense: 200, fill: 'var(--color-safari)' },
  { category: 'Housing', expense: 287, fill: 'var(--color-firefox)' },
  { category: 'Vehicle', expense: 173, fill: 'var(--color-edge)' },
  { category: 'Other', expense: 190, fill: 'var(--color-other)' },
];

const chartConfig = {
  expense: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Food & Drinks',
  },
  others: {
    label: 'Others', 
    color: '#0166FF',
  },
  safari: {
    label: 'Shopping',
    color: '#E74694',
  },
  firefox: {
    label: 'Housing',
    color: '#FDBA8C',
  },
  edge: {
    label: 'Vehicle',
    color: '#16BDCA',
  },
  other: {
    label: 'Other',
    color: '#F2901C',
  },
};

export const PieDashboardChart = ({ getPieChartData }) => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    const result = _.groupBy(getPieChartData, (el) => el.categoryname);
    const response = _.map(result, (records) => {
      const totalAmount = records.reduce((acc, el) => acc + el.amount, 0);
      return { categoryname: records[0].categoryname, amount: totalAmount };
    });

    setPieChartData(response);
  }, [getPieChartData]);

  return (
    <Card className="flex flex-col h-[284px]">
      <CardHeader className="items-start px-8 py-4 border-b-[1px]">
        <CardTitle className="text-[16px]">Income - Expense</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row-reverse items-center justify-between p-0 pr-6">
        <div className="flex flex-col w-full gap-3">
          {pieChartData &&
            pieChartData.map((el, index) => (
              <div key={index} className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 rounded-full size-3"></div>
                  <p>{el.categoryname}</p>
                </div>
                <p>{el.amount}</p>
                <p>15.50%</p>
              </div>
            ))}
        </div>

        <ChartContainer
          config={chartConfig}
          className="aspect-square h-[240px]"
        >
          <PieChart className="pb-6">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieChartData}
              dataKey="amount"
              nameKey="categoryname"
              innerRadius={50}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-3xl font-bold fill-foreground"
                        ></tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        ></tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PieDashboardChart;
