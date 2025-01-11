import { Box } from "@mui/material";
import { ChartWidtget } from "../ChartWidtget";
import { Profile } from "../Profile";
import { StatisticsSectionType } from "../../utils/types";
import "./index.scss";

export const StatisticsSection: React.FC<{
  statiscticsData: StatisticsSectionType;
}> = ({ statiscticsData }) => {
  return (
    <Box className="statistics-section-container">
      <ChartWidtget chartData={statiscticsData.chartData} />
      <Profile profileData={statiscticsData.profile} />
    </Box>
  );
};
