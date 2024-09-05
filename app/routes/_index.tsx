import { useState } from 'react';
import { Box, Center, Heading, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, Stack } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';


import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Passive Income Calculator" },
    { name: "description", content: "A calculator that calculate passive income" },
  ];
};

export default function Index() {
  const [referrals, setReferrals] = useState(1);
  const [newProjects, setNewProjects] = useState(10);
  const [existingProject, setExistingProjects] = useState(300);
  const chartData = [
    { month: "Aug", income: 620 },
    { month: "Sep", income: 1243 },
    { month: "Oct", income: 1856 },
    { month: "Nov", income: 2460 },
    { month: "Dec", income: 3055 },
    { month: "Jan", income: 3641 },
    { month: "Feb", income: 4219 },
    { month: "Mar", income: 4787 },
    { month: "Apr", income: 5347 },
    { month: "May", income: 5899 },
    { month: "Jun", income: 6442 },
    { month: "Jul", income: 6978 },
    { month: "Aug", income: 7505 },
  ];



  return (
    <div className='p-8'>

      <div className='flex justify-center'>
        <h1 className='text-4xl mb-5 w-[30rem] text-center'>Calculate Your Recurring Passive Income</h1>
      </div>

      <div className="flex flex-row space-x-10">
        {/* Left Panel */}
        <div className="w-1/3">
          <div className="mb-2">Referred Customers per month</div>
          <input
            type="range"
            defaultValue={1}
            min={0}
            max={100}
            step={1}
            onChange={setReferrals}
            className="w-full"
          />

          <div className="mt-4 mb-2">Avg. new projects per month</div>
          <input
            type="range"
            defaultValue={10}
            min={0}
            max={100}
            step={1}
            onChange={setNewProjects}
            className="w-full"
          />

          <div className="mt-4 mb-2">Avg. existing projects</div>
          <input
            type="range"
            defaultValue={300}
            min={0}
            max={1000}
            step={10}
            onChange={setExistingProjects}
            className="w-full"
          />

          <div className="mt-8 text-2xl font-bold">
            Your monthly income after 1 year: <br />${(7505).toLocaleString()}
          </div>
        </div>

        {/* Right Panel: Chart */}
        <div className="w-2/3">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>

              <XAxis dataKey="month" tickFormatter={(value) => value} stroke='none' />
              <Tooltip />
              <Bar dataKey="income" fill="#82ca9d">
                <LabelList dataKey='income' position='top' formatter={(value: number) => `$${new Intl.NumberFormat().format(value)}`} />
                <LabelList
                  dataKey="month"
                  position="bottom"
                  formatter={(value: string) => value}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
