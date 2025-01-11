import { Box, Typography } from "@mui/material";
import { CustomBarChart } from "../Chart/BarChart";
import { BarChartIcon } from "../../assets";
import { ChartData } from "../../utils/types";
import "./index.scss";

export const ChartWidtget: React.FC<{
  chartData: { totalSpent: string; data: ChartData[] };
}> = ({ chartData }) => {
  return (
    <Box className="chart-widtget-container">
      <Box className="chart-widtget-title-container">
        <div>
          <Typography className="chart-widtget-title">Total Spent</Typography>
          <Typography className="chart-widtget-amount">
            {chartData.totalSpent}
          </Typography>
        </div>
        <Box className="bar-chart-icon">
          <BarChartIcon />
        </Box>
      </Box>
      <CustomBarChart data={chartData.data} />
    </Box>
  );
};
