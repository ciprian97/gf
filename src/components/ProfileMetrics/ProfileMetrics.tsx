import { Box, Typography } from "@mui/material";
import "./index.scss";

export const ProfileMetrics = ({ title, number }) => {
  return (
    <Box className="profile-metrics-container">
      <Typography className="profile-metrics-title">{title}</Typography>
      <Typography className="profile-metrics-number">{number}</Typography>
    </Box>
  );
};
