import { Box, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { MicroBarChart } from "../Chart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";
import { DetailsSectionChartData } from "../../utils/types";
import "./index.scss";

export const MicroBarChartWidget: React.FC<{
  chartData: DetailsSectionChartData;
}> = ({ chartData }) => {
  return (
    <Box className="micro-chart-widget-container">
      <Box className="micro-chart-widtget-title-container">
        <div>
          <Typography className="bar-chart-widtget-title">
            Spent this month
          </Typography>
          <Typography className="bar-chart-widtget-amount">
            {chartData.amount}
          </Typography>
        </div>
        <Box className="bar-chart-savings-container">
          <ArrowDropUpIcon />
          <Typography>{chartData.savings}</Typography>
        </Box>
      </Box>
      <Box
        className="bar-chart-widtget-track"
        color={chartData.sentiment ? "#05cd99" : "#F0F8FF"}
      >
        {chartData.sentiment === "POSITIVE" ? (
          <CheckCircleIcon />
        ) : (
          <DangerousIcon />
        )}
        <Typography pl="2px">
          {chartData.sentiment === "POSITIVE" ? "On track" : "Not On track"}
        </Typography>
      </Box>
      <Box mt={"43px"}>
        <MicroBarChart data={chartData.data} height={155} type="normal" />
      </Box>
    </Box>
  );
};
