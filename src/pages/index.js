import { Box, Grid, Flex, GridItem, Text } from "@chakra-ui/react";
import Header from "../components/Footer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Box
        bgColor="red"
        width="500px"
        height="500px"
        display="flex"
        flexDirection="column"
      ></Box>
      <Footer />
    </>
  );
};

export default Home;
