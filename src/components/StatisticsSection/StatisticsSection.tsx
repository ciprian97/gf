import { Box } from "@mui/material";
import { ChartWidtget } from "../ChartWidtget";
import { Profile } from "../Profile";
import "./index.scss";
export const StatisticsSection = ({ statiscticsData }) => {
  return (
    <Box className="statistics-section-container">
      <ChartWidtget chartData={statiscticsData.chartData} />
      <Profile profileData={statiscticsData.profile} />
    </Box>
  );
};
