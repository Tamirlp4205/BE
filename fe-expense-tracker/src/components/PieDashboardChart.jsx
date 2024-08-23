import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useEffect, useState } from 'react';
import _ from 'lodash';

const chartConfig = {
  expense: {
    label: 'Visitors',
    color: '#F2901C' // Color for 'expense'
  },
  chrome: {
    label: 'Food & Drinks',
    color: '#F2901C' // Color for 'chrome'
  },
  others: {
    label: 'Others',
    color: '#0166FF' // Color for 'others'
  },
  safari: {
    label: 'Shopping',
    color: '#E74694' // Color for 'safari'
  },
  firefox: {
    label: 'Housing',
    color: '#FDBA8C' // Color for 'firefox'
  },
  edge: {
    label: 'Vehicle',
    color: '#16BDCA' // Color for 'edge'
  },
};

export const PieDashboardChart = ({ getPieChartData }) => {
  const [pieChartData, setPieChartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const result = _.groupBy(getPieChartData, (el) => el.categoryname);
    const response = _.map(result, (records) => {
      const totalAmountForCategory = records.reduce((acc, el) => acc + el.amount, 0);
      return { categoryname: records[0].categoryname, amount: totalAmountForCategory };
    });

    const total = _.sumBy(response, 'amount');
    setTotalAmount(total);
    setPieChartData(response);
  }, [getPieChartData]);

  const getPercentage = (amount) => {
    if (totalAmount === 0) return '0%';
    return `${((amount / totalAmount) * 100).toFixed(2)}%`;
  };

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
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: chartConfig[el.categoryname]?.color || '#ccc' }}
                  ></div>
                  <p>{el.categoryname}</p>
                </div>
                <p>{el.amount}</p>
                <p>{getPercentage(el.amount)}</p>
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
              fill={(entry) => chartConfig[entry.name]?.color || '#ccc'}
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
                        >
                          {pieChartData.find((d) => d.categoryname === viewBox.cx)?.amount}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {pieChartData.find((d) => d.categoryname === viewBox.cx)?.amount}
                        </tspan>
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
