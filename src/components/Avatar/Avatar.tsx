import { Box } from "@mui/material";
import avatar from "../../assets/Avatar.png";
import "./index.scss";

export const Avatar = () => {
  return (
    <Box className="avatar-container">
      <img src={avatar} alt={"avatar"} />
    </Box>
  );
};
