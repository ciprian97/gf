import { Box, Typography } from "@mui/material";
import { DetailsWidgets } from "../DetailsWidgets/DetailsWidgets";
import "./index.scss";

export const DetailsSection = ({ detailsData }) => {
  return (
    <Box display="flex" gap="20px" className="detailsSection-container">
      <DetailsWidgets
        items={detailsData.transactions?.transactionsItems}
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
