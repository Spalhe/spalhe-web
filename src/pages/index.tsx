import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

import { FaUser } from "react-icons/fa";
import { colors } from "./theme/colors";

const App: React.FC = () => {
  return (
    <Box color="white">
      <Head>
        <title>Spalhe - A Sua Nova Rede Social</title>
      </Head>

      <Center>
        <Stack w="full" maxW="1200px">
          <HStack display={["none", "flex"]} p="20px 0" justify="space-between">
            <Image src="/logo.svg" w="40px" />

            <HStack>
              <Button
                _hover={{ boxShadow: `0px 0px 30px  ${colors.primary}` }}
                variant="ghost"
              >
                download
              </Button>
              <Button
                _hover={{ boxShadow: `0px 0px 30px  ${colors.primary}` }}
                variant="ghost"
              >
                termos de uso
              </Button>
              <Button
                _hover={{ boxShadow: `0px 0px 30px  ${colors.primary}` }}
                variant="ghost"
              >
                políticas de privacidade
              </Button>
            </HStack>
          </HStack>

          <Box pt={[30, "100px"]} textAlign="center">
            <Text fontWeight="600" fontSize={[20, "48px"]}>
              Spalhe
            </Text>
            <Text mt={[20, "-40px"]} fontWeight="600" fontSize={[60, "108px"]}>
              sua nova rede social
            </Text>

            <Stack
              px={[10, 0]}
              direction={["column", "row"]}
              justify="center"
              spacing="20px"
              pt={["60px", "20px"]}
            >
              <Button
                leftIcon={<Icon as={FaUser} />}
                bg="white"
                color="black"
                p="30px"
                borderRadius="50px"
                _hover={{ boxShadow: `0px 0px 30px  ${colors.primary}` }}
              >
                Comecar a usar!
              </Button>
              <Button
                variant="outline"
                leftIcon={<Icon as={FaUser} />}
                borderColor={colors.primary}
                p="30px"
                borderRadius="50px"
                _hover={{ boxShadow: `0px 0px 30px  ${colors.primary}` }}
              >
                Conheca o Spalhe
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Center>

      <Box
        zIndex={-10}
        position="absolute"
        h="500px"
        w="full"
        bgImage="linear-gradient(to bottom, #ffffff00, #000000)"
        bottom={0}
      />
    </Box>
  );
};

export default App;
