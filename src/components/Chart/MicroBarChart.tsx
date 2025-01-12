import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { ChartData } from "../../utils/types";
import "./index.scss";

type MicroBarChartProps = {
  data: ChartData[];
  height: number;
  type: string;
};

export const MicroBarChart: React.FC<MicroBarChartProps> = ({
  data,
  height,
  type,
}) => {
  return (
    <ResponsiveContainer
      width={type === "small" ? "40%" : "100%"}
      height={height}
      className="micro-bar-chart-container"
    >
      <BarChart data={data} barSize={type === "small" ? 5 : 16}>
        <Bar
          dataKey="value"
          background={{
            fill: "#E9EDF7",
            radius: 10,
          }}
          shape={({ x, y, width, height }) => (
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              fill="#4318FF"
              rx={type === "small" ? 4 : 8}
            />
          )}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
