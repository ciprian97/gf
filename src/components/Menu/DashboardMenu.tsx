import {
  ListItemIcon,
  ListItemText,
  Box,
  MenuList,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { TopLogo } from "./Logo";
import {
  ActivityIcon,
  DashboardIcon,
  LibraryIcon,
  PayoutsIcon,
  SchedulesIcon,
  SecurityIcon,
  SettingsIcon,
  LogOutIcon,
} from "../../assets";
import { useState } from "react";

const menuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    key: "activity",
    label: "Activity",
    icon: <ActivityIcon />,
  },
  {
    key: "library",
    label: "Library",
    icon: <LibraryIcon />,
  },
  {
    key: "security",
    label: "Security",
    icon: <SecurityIcon />,
  },
  {
    key: "schedules",
    label: "Schedules",
    icon: <SchedulesIcon />,
  },
  {
    key: "payouts",
    label: "Payouts",
    icon: <PayoutsIcon />,
  },
  {
    key: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
  },
];

export const DashboardMenu = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleClick = (key: string) => {
    console.log({ key });
    setActiveItem(key);
  };

  return (
    <Box className="dashboardMenu-container">
      <div>
        <TopLogo />
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem
              key={item.key}
              className={`menu-item ${activeItem === item.key ? "active" : ""}`}
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
  );
};
