import { useState } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import CustomSlider from '../components/CustomSlider';

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
    <div className='p-20'>

      <header className='flex justify-center'>
        <h1 className='text-4xl mb-5 w-[30rem] text-center'>Calculate Your Recurring Passive Income</h1>
      </header>

      <div className="flex flex-row space-x-10">
        {/* Left Panel */}
        <section className="w-1/3 p-8">
          <p className='mb-10'>Add in your excepted refferrals to see how much you could earn as a <span className="font-bold">Sunvoy Affiliate</span> in just 1 year.</p>
          <CustomSlider label="Reffered customers per month" onChange={setReferrals} />

          <CustomSlider label="Avg. new projects per month"
            onChange={setNewProjects}
            tooltipLabel="tooltip help" />
          <CustomSlider label="Avg. existing projects" tooltipLabel="tooltip help" onChange={setExistingProjects} />

          <div className="mt-8 text-center">
            <p>Your <span className="font-bold">monthly income </span> after 1 year:</p>
            <p className="text-5xl mt-5">${(7505).toLocaleString()}</p>
          </div>
        </section>

        {/* Right Panel: Chart */}
        <section className="w-2/3">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>

              <XAxis dataKey="month" tickFormatter={(value) => value} stroke='none' />
              <Tooltip />
              <Bar dataKey="income" fill="#afcc54">
                <LabelList dataKey='income' position='top' formatter={(value: number) => `$${new Intl.NumberFormat().format(value)}`} />
                <LabelList
                  dataKey="month"
                  position="bottom"
                  formatter={(value: string) => value}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>
      <div className='flex justify-center text-center'>
        <p>Calculations are based on the number of customers you refer each month and thier avg. project volume.<br />Factor in our churm and this bring you to your estimated total passive future income. </p>
      </div>
    </div>
  );
}
