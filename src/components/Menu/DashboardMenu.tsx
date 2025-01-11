import {
  ListItemIcon,
  ListItemText,
  Box,
  MenuList,
  MenuItem,
  Typography,
} from "@mui/material";
import { TopLogo } from "./Logo";
import { LogOutIcon } from "../../assets";
import { useState } from "react";
import { menuItems } from "../../utils/mock";

export const DashboardMenu = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleClick = (key: string) => {
    setActiveItem(key);
  };

  return (
    <Box className="dashboard-menu-container">
      <Box className="menu-container">
        <div>
          <TopLogo />
          <MenuList>
            {menuItems.map((item) => (
              <MenuItem
                key={item.key}
                className={`menu-item ${
                  activeItem === item.key ? "active" : ""
                }`}
                onClick={() => handleClick(item.key)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </MenuItem>
            ))}
          </MenuList>
        </div>
        <div className="logout-item">
          <LogOutIcon />
          <Typography>Log Out</Typography>
        </div>
      </Box>
    </Box>
  );
};
