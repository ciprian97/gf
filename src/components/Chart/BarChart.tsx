import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import "./index.scss";
import { useState } from "react";

const getBarColor = (value: number, hoveredValue: number) =>
  value === hoveredValue ? "#4318FF" : "#E9EDF7";

export const CustomBarChart = ({ data }) => {
  const [hoveredValue, setHoveredValue] = useState<{
    id: number;
    value: number;
  } | null>(null);
  console.log({ hoveredValue });
  const customTickStyle = {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "-0.24px",
    fill: "#A3AED0",
  };

  return (
    <ResponsiveContainer width="100%" height={300} className="chart-container">
      <BarChart
        data={data}
        barSize={35}
        onMouseLeave={() => setHoveredValue(null)}
        barCategoryGap={2}
      >
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ ...customTickStyle }}
        />
        <Bar
          dataKey="value"
          hide={false}
          radius={[5, 5, 0, 0]}
          shape={({ x, y, width, height, value, id }) => {
            const color = getBarColor(id, hoveredValue?.id);
            return (
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={color}
                rx={5}
                onMouseEnter={() => setHoveredValue({ id, value })}
              />
            );
          }}
        />
        <ReferenceLine
          y={hoveredValue?.value}
          stroke="#4318FF"
          strokeDasharray="10"
          strokeWidth={1}
          label={{
            value: `${hoveredValue?.value}$`,
            position: "right",
            offset: -20,
            fontSize: "12px",
            fontWeight: 500,
            fill: "#4318FF",
            letterSpacing: "-0.24px",
            dy: -10,
          }}
          x1={0}
          x2="15%"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
