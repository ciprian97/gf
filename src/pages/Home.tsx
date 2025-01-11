import { DashboardMenu } from "../components/Menu";
import { DashboardContent } from "../components/DashboardContent";
import { Box } from "@mui/material";
import { dataView } from "../utils/mock";

const Home = () => {
  return (
    <Box display="flex" height="100vh">
      <DashboardMenu />
      <DashboardContent dataView={dataView} />
    </Box>
  );
};

export default Home;
