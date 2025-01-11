import { Box, Typography } from "@mui/material";
import { DetailsWidgets } from "../DetailsWidgets/DetailsWidgets";
import { MicroBarChartWidget } from "../MicroBarChartWidget";
import { DetailsSectionType } from "../../utils/types";
import "./index.scss";

export const DetailsSection: React.FC<{ detailsData: DetailsSectionType }> = ({
  detailsData,
}) => {
  return (
    <Box display="flex" gap="20px" className="detailsSection-container">
      <MicroBarChartWidget chartData={detailsData.chartData} />
      <DetailsWidgets
        items={detailsData?.transactionsItems}
        title={
          <Typography className="transactions-title">
            Your transactions
          </Typography>
        }
        textLink="View all"
      />
      <DetailsWidgets
        items={detailsData.calendar.calendarItems}
        title={<Typography className="calendar-title">27 May</Typography>}
        textLink="View all Tasks"
      />
    </Box>
  );
};
