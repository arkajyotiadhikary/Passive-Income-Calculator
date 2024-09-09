import React from "react";
import { ResponsiveContainer, BarChart, XAxis, Tooltip, Bar, LabelList, Cell } from "recharts";
import CustomLabel from "./CustomLabel";

interface CustomGraphProps {
      chartData: {
            month: string;
            income: number;
      }[];
}

const CustomGraph: React.FC<CustomGraphProps> = ({ chartData }) => {
      const tickFormatter = (value: string, index: number) => {
            if (index === 0 || value === "Jan") {
                  return `${value}\t2024`;
            }
            return value;
      };

      return (
            <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={chartData}>
                        <XAxis
                              dataKey="month"
                              tickFormatter={tickFormatter}
                              tick={{ fontSize: 20 }}
                              stroke="none"
                        />
                        <Tooltip
                              cursor={{ fill: "#fff" }}
                              contentStyle={{
                                    backgroundColor: "#f9fafb",
                                    borderRadius: 4,
                                    color: "#fff",
                              }}
                              labelStyle={{ fontSize: 20, color: "black", fontWeight: 300 }}
                              wrapperStyle={{ boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}
                              formatter={(value: number) => (
                                    <span style={{ color: "#afcc54" }}>
                                          ${value.toLocaleString()}
                                    </span>
                              )}
                        />
                        <Bar dataKey="income">
                              {chartData.map((entry, index) => (
                                    <Cell
                                          key={`cell-${index}`}
                                          fill={
                                                index === chartData.length - 1
                                                      ? "#afcc54"
                                                      : "#D3D3D3"
                                          }
                                    />
                              ))}
                              <LabelList
                                    dataKey="income"
                                    position="top"
                                    formatter={(value: number) =>
                                          `$${new Intl.NumberFormat().format(value)}`
                                    }
                                    style={{
                                          fontSize: 20,
                                          fill: "gray",
                                          fontWeight: 300,
                                    }}
                              />
                              <LabelList
                                    dataKey="month"
                                    position="bottom"
                                    content={CustomLabel}
                                    style={{
                                          fontSize: 20,
                                          fill: "gray",
                                          fontWeight: 300,
                                    }}
                              />
                        </Bar>
                  </BarChart>
            </ResponsiveContainer>
      );
};

export default CustomGraph;
