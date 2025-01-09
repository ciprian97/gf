import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { Content } from "../../utils/types";
import "./index.scss";
import { DetailsSection } from "../DetailsSection/DetailsSection";
import { Profile } from "../Profile";

export const DashboardContent = ({ dataView }: Content) => {
  return (
    <Box mx="30px" my="47px" className="dashboardContent-container">
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
      <DetailsSection detailsData={dataView.details} />
      <Profile profileData={dataView.profile} />
    </Box>
  );
};
