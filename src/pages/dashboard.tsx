import { Flex } from "@chakra-ui/react";
import Header from "../components/Hedaer";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1460} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
}
