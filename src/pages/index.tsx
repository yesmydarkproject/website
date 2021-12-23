import { Box } from "@chakra-ui/react";
import type { ReactElement } from "react";

import Footer from "components/layout/Footer";
// import Header from "components/layout/Header";
import TheInitialScreen from "components/TheInitialScreen";

const Home = () => {
  return (
    <Box mb={8} w="full">
      {/* */}
      ddd
    </Box>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Box margin="0 auto" /* transition="0.5s ease-out" */>
      <Box>
        {/* <Header /> */}
        <Box as="main">{page}</Box>
        <Footer />
      </Box>
      <TheInitialScreen />
    </Box>
  );
};

export default Home;
