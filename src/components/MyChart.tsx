'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', Positive: 186, Negative: 80 },
  { month: 'February', Positive: 305, Negative: 200 },
  { month: 'March', Positive: 237, Negative: 120 },
  { month: 'April', Positive: 73, Negative: 190 },
  { month: 'May', Positive: 209, Negative: 130 },
  { month: 'June', Positive: 214, Negative: 140 },
];

const chartConfig = {
  Positive: {
    label: 'Positive',
    color: '#2563eb',
  },
  Negative: {
    label: 'Negative',
    color: '#60a5fa',
  },
} satisfies ChartConfig;

function MyChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary Data</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="Positive"
              fill={chartConfig.Positive.color}
              radius={4}
            />
            <Bar
              dataKey="Negative"
              fill={chartConfig.Negative.color}
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default MyChart;
