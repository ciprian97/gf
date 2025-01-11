import { BarChart, Bar, ResponsiveContainer } from "recharts";
import "./index.scss";

export const MicroBarChart = ({ data, height, type }) => {
  return (
    <ResponsiveContainer
      width={type === "small" ? "40%" : "100%"}
      height={height}
      className="micro-bar-chart-container"
    >
      <BarChart data={data} barSize={type === "small" ? 5 : 18}>
        <Bar
          dataKey="value"
          background={{
            fill: "#E9EDF7",
          }}
          shape={({ x, y, width, height }) => (
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              fill="#4318FF"
              rx={type === "small" ? 4 : 10}
            />
          )}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
