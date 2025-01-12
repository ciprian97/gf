import { Box, Typography } from "@mui/material";
import { DataView } from "../../utils/types";
import { DetailsSection } from "../DetailsSection";
import { StatisticsSection } from "../StatisticsSection";
import { ChipsWidgetsSection } from "../ChipsWidgetsSection";
import "./index.scss";
import { Search } from "../Search";

export const DashboardContent = ({ dataView }: DataView) => {
  return (
    <Box className="dashboard-content-container">
      <Box className="top-content">
        <Box>
          <Typography className="name-typography">
            Hi {`${dataView?.user?.name},`}
          </Typography>
          <Typography className="title-typography">
            Welcome to Venus!
          </Typography>
        </Box>
        <Search />
      </Box>
      <Box gap="20px 0" display={"flex"} flexDirection={"column"} pb="47px">
        <ChipsWidgetsSection widgets={dataView.general.widgets} />
        <StatisticsSection statiscticsData={dataView.statistics} />
        <DetailsSection detailsData={dataView.details} />
      </Box>
    </Box>
  );
};
