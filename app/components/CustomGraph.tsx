import React from "react";
import { ResponsiveContainer, BarChart, XAxis, Tooltip, Bar, LabelList } from "recharts";
import CustomLabel from "./CustomLabel";

interface CustomGraphProps {
      chartData: {
            month: string;
            income: number;
      }[];
}

const CustomGraph: React.FC<CustomGraphProps> = ({ chartData }) => {
      const limitedChartData = chartData.slice(0, 12);

      const tickFormatter = (value: string, index: number) => {
            if (index === 0 || value === "Jan") {
                  return `${value}\t2024`;
            }
            return value;
      };

      return (
            <ResponsiveContainer width="100%" height={400} className={""}>
                  <BarChart data={limitedChartData}>
                        <XAxis
                              dataKey="month"
                              tickFormatter={tickFormatter}
                              tick={{ fontSize: 12 }}
                              stroke="none"
                        />
                        <Tooltip
                              cursor={{ fill: "#fff" }}
                              contentStyle={{ backgroundColor: "#333", borderRadius: 4 }}
                              labelStyle={{ fontSize: 14, color: "#fff" }}
                              wrapperStyle={{ boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}
                        />
                        <Bar dataKey="income" fill="#afcc54">
                              <LabelList
                                    dataKey="income"
                                    position="top"
                                    formatter={(value: number) =>
                                          `$${new Intl.NumberFormat().format(value)}`
                                    }
                                    style={{ fontSize: 14 }}
                              />
                              <LabelList dataKey="month" position="bottom" content={CustomLabel} />
                        </Bar>
                  </BarChart>
            </ResponsiveContainer>
      );
};

export default CustomGraph;
