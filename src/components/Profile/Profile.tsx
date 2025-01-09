import { Box, Typography } from "@mui/material";
import { Avatar } from "../Avatar";
import { ProfileMetrics } from "../ProfileMetrics";
import { LocationIcon } from "../../assets";
import "./index.scss";

export const Profile = ({ profileData }) => {
  return (
    <Box className="profile-container">
      <Avatar />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography className="profile-name">{profileData.name}</Typography>
        <Box display="flex" alignItems="center">
          <LocationIcon />
          <Typography className="profile-location">
            {profileData.location}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" mt="31px" gap="42px">
        {profileData.metrics.map((item) => (
          <ProfileMetrics title={item.title} number={item.number} />
        ))}
      </Box>
    </Box>
  );
};
