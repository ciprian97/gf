import { BarChart, Bar, ResponsiveContainer } from "recharts";
import "./index.scss";

export const MicroBarChart = ({ data }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={180}
      className="micro-bar-chart-container"
    >
      <BarChart data={data} barSize={18}>
        <Bar
          dataKey="value"
          background={{
            fill: "#E9EDF7",
          }}
          radius={[10, 10, 10, 10]}
          shape={({ x, y, width, height }) => (
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              fill="#4318FF"
              rx={10}
            />
          )}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
