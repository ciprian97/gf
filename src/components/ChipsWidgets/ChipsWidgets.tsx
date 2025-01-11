import { Box, Typography } from "@mui/material";
import { MicroBarChart } from "../Chart";
import {
  ActivityGraphIcon,
  BarChartIcon,
  ClientGraphIcon,
  ProfileIcon,
} from "../../assets";
import { Widgets } from "../../utils/types";
import "./index.scss";

export const ChipsWidgets: React.FC<{ widgets: Widgets }> = ({ widgets }) => {
  return (
    <Box display="flex" gap={"20px"}>
      <Box className="chips-widgets-container">
        <Box mr="25px">
          <Typography className="chips-widget-text">
            {widgets.spent.text}
          </Typography>
          <Typography className="chips-widget-value">
            {widgets.spent.value}
          </Typography>
        </Box>
        <MicroBarChart
          data={widgets.spent.chartData.data}
          height={55}
          type="small"
        />
      </Box>
      <Box className="chips-widgets-container">
        <Box className="icon-container profile">
          <ProfileIcon />
        </Box>
        <Box mr="25px">
          <Typography className="chips-widget-text">
            {widgets.newClients.text}
          </Typography>
          <Typography className="chips-widget-value">
            {widgets.newClients.value}
          </Typography>
        </Box>
        <ClientGraphIcon />
      </Box>
      <Box className="chips-widgets-container">
        <Box className="icon-container chart">
          <BarChartIcon />
        </Box>
        <Box mr="25px">
          <Typography className="chips-widget-text">
            {widgets.earnings.text}
          </Typography>
          <Typography className="chips-widget-value">
            {widgets.earnings.value}
          </Typography>
        </Box>
      </Box>
      <Box className="chips-widgets-container gradient">
        <Box mr="25px">
          <Typography className="chips-widget-text activity">
            {widgets.activity.text}
          </Typography>
          <Typography className="chips-widget-value activity">
            {widgets.activity.value}
          </Typography>
        </Box>
        <ActivityGraphIcon />
      </Box>
    </Box>
  );
};
