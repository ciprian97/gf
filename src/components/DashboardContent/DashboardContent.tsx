import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { DataView } from "../../utils/types";
import { DetailsSection } from "../DetailsSection";
import { StatisticsSection } from "../StatisticsSection";
import { ChipsWidgets } from "../ChipsWidgets";
import "./index.scss";

export const DashboardContent = ({ dataView }: DataView) => {
  return (
    <Box className="dashboardContent-container">
      <Box className="top-content">
        <Box>
          <Typography className="name-typography">
            Hi {`${dataView?.user?.name},`}
          </Typography>
          <Typography className="title-typography">
            Welcome to Venus!
          </Typography>
        </Box>
        <TextField
          placeholder="Search"
          className="search"
          id="search"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
      </Box>
      <Box gap="20px 0" display={"flex"} flexDirection={"column"}>
        <ChipsWidgets widgets={dataView.general.widgets} />
        <StatisticsSection statiscticsData={dataView.statistics} />
        <DetailsSection detailsData={dataView.details} />
      </Box>
    </Box>
  );
};
