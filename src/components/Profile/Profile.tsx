import { Box, Typography } from "@mui/material";
import { Avatar } from "../Avatar";
import { ProfileMetrics } from "../ProfileMetrics";
import { LocationIcon } from "../../assets";
import { Metrics } from "../../utils/types";
import "./index.scss";

type ProfileProps = {
  profileData: {
    name: string;
    location: string;
    metrics: Metrics[];
  };
};

export const Profile: React.FC<ProfileProps> = ({ profileData }) => {
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
        {profileData.metrics.map((item, index) => (
          <ProfileMetrics title={item.title} number={item.number} key={index} />
        ))}
      </Box>
    </Box>
  );
};
