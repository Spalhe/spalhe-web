import { Button, HStack, Image } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { colors } from "../../theme/colors";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const { push } = useRouter();

  return (
    <HStack display={["none", "flex"]} p="20px 0" justify="space-between">
      <Image onClick={() => push("/")} src="/logo.svg" w="100px" />

      <Head>
        <title>{title} - Spalhe Rede Social</title>
      </Head>

      <HStack>
        <Button
          _hover={{ boxShadow: `0px 0px 30px  ${colors.primary}` }}
          variant="ghost"
          onClick={() =>
            push("https://play.google.com/store/apps/details?id=com.spalhe")
          }
        >
          download
        </Button>

        <Button
          _hover={{ boxShadow: `0px 0px 30px  ${colors.primary}` }}
          variant="ghost"
          onClick={() => push("/terms")}
        >
          termos e políticas de privacidade
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
