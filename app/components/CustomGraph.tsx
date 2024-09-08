import React from "react";
import { ResponsiveContainer, BarChart, XAxis, Tooltip, Bar, LabelList } from "recharts";

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
            <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={limitedChartData}>
                        <XAxis
                              dataKey="month"
                              tickFormatter={tickFormatter}
                              tick={{ fontSize: 12 }}
                              stroke="none"
                        />
                        <Tooltip />
                        <Bar dataKey="income" fill="#afcc54">
                              <LabelList
                                    dataKey="income"
                                    position="top"
                                    formatter={(value: number) =>
                                          `$${new Intl.NumberFormat().format(value)}`
                                    }
                              />
                              <LabelList
                                    dataKey="month"
                                    position="bottom"
                                    formatter={(value: string, index: number) => {
                                          if (index === 0 || value === "Jan") {
                                                return `${value}\n2024`;
                                          }
                                          return value;
                                    }}
                                    style={{ whiteSpace: "pre-line" }}
                              />
                        </Bar>
                  </BarChart>
            </ResponsiveContainer>
      );
};

export default CustomGraph;
