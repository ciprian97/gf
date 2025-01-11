import { Box, Link, Typography } from "@mui/material";
import { StoreIcon, SubscriptionIcon, TransportIcon } from "../../assets";
import EastIcon from "@mui/icons-material/East";
import { Items } from "../../utils/types";
import { ReactNode } from "react";
import "./index.scss";

type DetailsWidgets = {
  items: Items[];
  title: ReactNode;
  textLink: string;
};

export const DetailsWidgets: React.FC<DetailsWidgets> = ({
  items,
  title,
  textLink,
}) => {
  const handleIcons = (iconType: string) => {
    switch (iconType) {
      case "transport":
        return <TransportIcon />;
      case "store":
        return <StoreIcon />;
      case "subscriptions":
        return <SubscriptionIcon />;
      default:
        return <TransportIcon />;
    }
  };

  return (
    <Box className="details-widgets-container">
      <div>
        {title}
        {items.map((item) => (
          <Box display="flex" alignItems="center" mb="35px">
            {item.iconType ? (
              <Box className="icon-wrapper">{handleIcons(item.iconType)}</Box>
            ) : (
              <div className="devider" />
            )}
            <Box>
              <Typography className="details-widgets-title">
                {item.title}
              </Typography>
              <Typography className="details-widgets-subtitle">
                {item.subTitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </div>
      <Link className="link-container">
        <Typography className="text-link">{textLink}</Typography>
        <EastIcon />
      </Link>
    </Box>
  );
};
