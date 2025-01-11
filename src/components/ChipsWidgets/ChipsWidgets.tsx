import { Box, Typography } from "@mui/material";
import "./index.scss";
import { MicroBarChart } from "../Chart";
import {
  ActivityGraphIcon,
  BarChartIcon,
  ClientGraphIcon,
  ProfileIcon,
} from "../../assets";

export const ChipsWidgetsContainer = ({ children }) => {
  return <Box className="chips-widgets-container">{children}</Box>;
};

export const ChipsWidgets = ({ chipsData }) => {
  return (
    <Box display="flex" gap={"20px"}>
      <Box className="chips-widgets-container">
        <Box mr="25px" width="60%">
          <Typography className="chips-widget-text">
            {chipsData.spent.text}
          </Typography>
          <Typography className="chips-widget-value">
            {chipsData.spent.value}
          </Typography>
        </Box>
        <MicroBarChart
          data={chipsData.spent.chartData.data}
          height={55}
          type="small"
        />
      </Box>
      <Box className="chips-widgets-container">
        <Box className="icon-container profile">
          <ProfileIcon />
        </Box>
        <Box mr="25px" width="60%">
          <Typography className="chips-widget-text">
            {chipsData.newClients.text}
          </Typography>
          <Typography className="chips-widget-value">
            {chipsData.newClients.value}
          </Typography>
        </Box>
        <ClientGraphIcon />
      </Box>
      <Box className="chips-widgets-container">
        <Box className="icon-container chart">
          <BarChartIcon />
        </Box>
        <Box mr="25px" width="60%">
          <Typography className="chips-widget-text">
            {chipsData.earnings.text}
          </Typography>
          <Typography className="chips-widget-value">
            {chipsData.earnings.value}
          </Typography>
        </Box>
      </Box>
      <Box className="chips-widgets-container gradient">
        <Box mr="25px" width="60%">
          <Typography className="chips-widget-text activity">
            {chipsData.activity.text}
          </Typography>
          <Typography className="chips-widget-value activity">
            {chipsData.activity.value}
          </Typography>
        </Box>
        <ActivityGraphIcon />
      </Box>
    </Box>
  );
};
