import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLabel: React.FC<any> = ({ x, y, value, index, height, width }) => {
      const thisYear = new Date().getFullYear();
      let displayValue = value;

      // Adding the year for index 0 and for "Jan"
      if (index === 0) {
            displayValue = `${value}\n${thisYear}`;
      } else if (value === "Jan") {
            displayValue = `${value}\n${thisYear + 1}`;
      }

      // Adjusting y position to appear below the bar and x to center the label
      const yOffset = y + height + 20;
      const xOffset = x + width / 2; // Center the label along the x-axis

      return (
            <text
                  x={xOffset}
                  y={yOffset}
                  fontSize="12"
                  textAnchor="middle"
                  fill="#666"
                  style={{ whiteSpace: "pre-line" }}
            >
                  {displayValue.split("\n").map((line: string, i: number) => (
                        <tspan x={xOffset} dy={i === 0 ? 0 : "1.2em"} key={i}>
                              {line}
                        </tspan>
                  ))}
            </text>
      );
};
export default CustomLabel;
