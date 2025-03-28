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

export const ChipsWidgetsSection: React.FC<{ widgets: Widgets }> = ({
  widgets,
}) => {
  return (
    <Box className="container">
      <Box className="chips-widgets-container" justifyContent="space-between">
        <Box>
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
      <Box
        className="chips-widgets-container small clients"
        justifyContent="space-between"
      >
        <Box display="flex">
          <Box className="icon-container profile">
            <ProfileIcon />
          </Box>
          <Box>
            <Typography className="chips-widget-text">
              {widgets.newClients.text}
            </Typography>
            <Typography className="chips-widget-value">
              {widgets.newClients.value}
            </Typography>
          </Box>
        </Box>
        <ClientGraphIcon />
      </Box>
      <Box className="chips-widgets-container small">
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
      <Box
        className="chips-widgets-container gradient"
        justifyContent="space-between"
      >
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
